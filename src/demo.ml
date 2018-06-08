open Reprocessing

type vec
  = { x : float; y : float }

type commit =
  { commit_sha : string
  ; commit_parent : string option
  ; commit_p : vec
  ; commit_v : vec
  }

type gref =
  { gref_name : string
  ; gref_sha : string
  }

module StringMap = Map.Make(String)

type repo =
  { repo_name : string
  ; repo_refs : gref list
  ; repo_commits : commit StringMap.t
  ; repo_p : vec
  }

type stateT =
  { repos: repo list
  ; t : float
  }

let zero_vec = { x = 0.; y = 0. }

let global_forces (t : float) = { x = 100. *. Js.Math.sin (t /. 2.) +. 20. *. Js.Math.cos (t /. 3.); y = -. 1000. }

let origin_init : repo =
  let repo_init_p = { x = 150.; y = 550. } in
  { repo_name = "origin"
  ; repo_refs = [{ gref_name = "master"; gref_sha = "abc" }]
  ; repo_commits =
      (List.fold_left (fun m c -> StringMap.add c.commit_sha c m)
         StringMap.empty
         [ { commit_sha = "abc"; commit_parent = None; commit_p = repo_init_p; commit_v = zero_vec }
         ; { commit_sha = "def"; commit_parent = (Some "abc"); commit_p = repo_init_p; commit_v = zero_vec }
         ; { commit_sha = "ghi"; commit_parent = (Some "def"); commit_p = repo_init_p; commit_v = zero_vec }
         ; { commit_sha = "jkl"; commit_parent = (Some "ghi"); commit_p = repo_init_p; commit_v = zero_vec }
         ; { commit_sha = "mno"; commit_parent = (Some "jkl"); commit_p = repo_init_p; commit_v = zero_vec }
         ; { commit_sha = "pqr"; commit_parent = (Some "mno"); commit_p = repo_init_p; commit_v = zero_vec }
         ; { commit_sha = "stu"; commit_parent = (Some "def"); commit_p = repo_init_p; commit_v = zero_vec }
         ; { commit_sha = "vwx"; commit_parent = (Some "stu"); commit_p = repo_init_p; commit_v = zero_vec }
         ; { commit_sha = "yzz"; commit_parent = (Some "vwx"); commit_p = repo_init_p; commit_v = zero_vec }
         ; { commit_sha = "1ab"; commit_parent = (Some "stu"); commit_p = repo_init_p; commit_v = zero_vec }
         ; { commit_sha = "1bc"; commit_parent = (Some "1ab"); commit_p = repo_init_p; commit_v = zero_vec }
         ; { commit_sha = "1de"; commit_parent = (Some "1bc"); commit_p = repo_init_p; commit_v = zero_vec }
         ]
      )
  ; repo_p = repo_init_p
  }

let initState =
  { repos = [origin_init]
  ; t = 0.
  }

let target_d = 10.
let target_d_sq = target_d ** 2.

let calc_mag_sq (p : vec) =
  p.x ** 2. +. p.y ** 2.

let add_vecs (p : vec) (p2 : vec) =
  { x = p.x +. p2.x; y = p.y +. p2.y }

let sub_vecs (p : vec) (p2 : vec) =
  { x = p.x -. p2.x; y = p.y -. p2.y }

let scale_vec (c : float) (p : vec) =
  { x = c *. p.x; y = c *. p.y }

let rand_direction () : vec =
  let phi = 2. *. 3.14 *. (Js.Math.random ()) in
  { x = Js.Math.cos phi; y = Js.Math.sin phi }

let one_parent_p (repo : repo) (commit : commit) : vec =
  match commit.commit_parent with
  | None -> repo.repo_p
  | Some sha ->
    let c = StringMap.find sha repo.repo_commits in
    c.commit_p

let rec gather_parent_ps ?acc:(acc=[]) (repo : repo) (commit : commit) : vec list =
  match commit.commit_parent with
  | None -> List.rev (repo.repo_p :: acc)
  | Some sha ->
    let c = StringMap.find sha repo.repo_commits in
    gather_parent_ps ~acc:(c.commit_p :: acc) repo c

let step_commit (dt : float) (state : stateT) (repo : repo) commit =
  let parent_ps = gather_parent_ps repo commit in
  let sibling_ps = repo.repo_commits |> StringMap.filter (fun _ c ->
      c.commit_parent = commit.commit_parent && c <> commit
    )
  in
  let p = commit.commit_p in
  let parent_repel_a = parent_ps |> List.fold_left (fun acc pp ->
        let a =
          if pp = p then
            scale_vec 1000. (rand_direction ())
          else
            let delta = sub_vecs p pp in
            let r_sq = calc_mag_sq delta in
            let r = sqrt r_sq in
            scale_vec (1000. /. r) delta
        in
        add_vecs acc a
    ) zero_vec
  in
  let sibling_repel_a = StringMap.fold (fun _ commit acc ->
      let pp = commit.commit_p in
      let a =
        if pp = p then
          scale_vec 1000. (rand_direction ())
        else
          let delta = sub_vecs p pp in
          let r_sq = calc_mag_sq delta in
          let r = sqrt r_sq in
          scale_vec (700. /. r) delta
      in
      add_vecs acc a
    ) sibling_ps zero_vec
  in
  let drag_a =
    let r_sq = calc_mag_sq commit.commit_v in
    let r = sqrt r_sq in
    scale_vec (-. (min 5. (r *. 0.2))) commit.commit_v
  in
  let attract_a =
    let direct_parent = one_parent_p repo commit in
    let delta = sub_vecs direct_parent p in
    let r_sq = calc_mag_sq delta in
    let r = sqrt r_sq in
    let unit_vec = scale_vec (1. /. r) delta in
    if r <= target_d then
      zero_vec
    else
      scale_vec ((target_d -. r) ** 2.) unit_vec
  in
  let a = zero_vec
          |> add_vecs (global_forces state.t)
          |> add_vecs parent_repel_a
          |> add_vecs sibling_repel_a
          |> add_vecs attract_a
          |> add_vecs drag_a
  in
  let v =
    { x = commit.commit_v.x +. a.x *. dt
    ; y = commit.commit_v.y +. a.y *. dt
    }
  in
  let p =
    { x = p.x +. v.x *. dt; y = p.y +. v.y *. dt }
  in
  { commit with commit_p = p; commit_v = v }

let step_repo (dt : float) (state : stateT) repo =
  { repo with repo_commits = StringMap.map (step_commit dt state repo) repo.repo_commits }

let step_state (dt : float) (state : stateT) =
  { t = state.t +. dt
  ; repos = List.map (step_repo dt state) state.repos
  }

let draw_commit_lines env repo commit =
  let p = commit.commit_p in
  let parent_p = one_parent_p repo commit in
  Draw.linef ~p1:(parent_p.x,parent_p.y) ~p2:(p.x,p.y) env

let draw_commit env commit =
  let p = commit.commit_p in
  Draw.fill (Utils.color ~r:241 ~g:78 ~b:50 ~a:255) env;
  Draw.stroke Constants.black env;
  Draw.strokeWeight 3 env;
  Draw.ellipsef ~center:(p.x, p.y) ~radx:20. ~rady:20. env

let draw_repo env repo =
  Draw.fill Constants.white env;
  Draw.stroke Constants.black env;
  Draw.strokeWeight 3 env;
  Draw.rectMode Center env;
  Draw.rectf ~pos:(repo.repo_p.x, repo.repo_p.y) ~width:100. ~height:50. env;
  StringMap.iter (fun _ c -> draw_commit_lines env repo c) repo.repo_commits;
  StringMap.iter (fun _ c -> draw_commit env c) repo.repo_commits

let draw state env =
  let dt = Env.deltaTime env in
  let dt_sim = min dt 0.1 in
  let state' = step_state dt_sim state in
  Draw.background (Utils.color ~r:199 ~g:217 ~b:229 ~a:255) env;
  List.iter (draw_repo env) state'.repos;
  state'

let setup width height env : stateT =
  Env.size ~width ~height env;
  initState

external innerWidth : int = "window.document.documentElement.clientWidth" [@@bs.val]
external innerHeight : int = "window.document.documentElement.clientHeight" [@@bs.val]

let _ =
  let w, h = innerWidth, innerHeight in
  Reprocessing.setScreenId "gitsim-screen";
  run ~setup:(setup w h) ~draw ()
