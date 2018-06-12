open Reprocessing

type color =
  { r : int; g : int; b : int }

let c_orange : color = { r = 245; g = 77; b = 39 }
let c_light_blue : color = { r = 199; g = 217; b = 229 }
let c_dark_blue : color = { r = 0; g = 144; b = 154 }
let c_yellow : color = { r = 205; g = 159; b = 0 }

let c_of ?a:(a=255) (c: color) : colorT =
  let {r;g;b} = c in
  (Utils.color ~r ~g ~b ~a)

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

type draw_commit
  = { p : vec }

type draw_commit_line
  = { p : vec; p_parent : vec }

type draw_branch_ref
  = { p : vec }

type draw_repo
  = { p : vec }

type draw_cmd
  = Draw_commit of draw_commit
  | Draw_commit_line of draw_commit_line
  | Draw_branch_ref of draw_branch_ref
  | Draw_repo of draw_repo

let zero_vec = { x = 0.; y = 0. }

let global_forces (t : float) = { x = 100. *. Js.Math.sin (t /. 2.) +. 20. *. Js.Math.cos (t /. 3.); y = -. 1000. }

let origin_init : repo =
  let repo_init_p = { x = 150.; y = 550. } in
  { repo_name = "origin"
  ; repo_refs = [{ gref_name = "master"; gref_sha = "1de" }]
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

let draw_commit_line env (d : draw_commit_line) =
  Draw.linef ~p1:(d.p_parent.x, d.p_parent.y) ~p2:(d.p.x, d.p.y) env

let draw_branch_ref env (d : draw_branch_ref) =
  let p = d.p in
  Draw.strokeWeight 0 env;
  Draw.rectMode Reprocessing_Common.Corner env;
  let o_x = 15. in
  let t_w = 10. in
  let r_w = 100. in
  let half_h = 10. in
  let p_1 = (p.x +. o_x, p.y) in
  let p_2 = (p.x +. o_x +. t_w, p.y +. half_h) in
  let p_3 = (p.x +. o_x +. t_w +. r_w, p.y +. half_h) in
  let p_4 = (p.x +. o_x +. t_w +. r_w, p.y -. half_h) in
  let p_5 = (p.x +. o_x +. t_w, p.y -. half_h) in
  Draw.fill (c_of ~a:128 c_dark_blue) env;
  Draw.rectf ~pos:(p.x +. o_x +. 10., p.y -. 10.) ~width: r_w ~height:(half_h *. 2.) env;
  Draw.trianglef ~p1:p_1 ~p2:p_2 ~p3:p_5 env;
  Draw.stroke Constants.black env;
  Draw.strokeWeight 3 env;
  Draw.linef ~p1:p_1 ~p2:p_2 env;
  Draw.linef ~p1:p_2 ~p2:p_3 env;
  Draw.linef ~p1:p_3 ~p2:p_4 env;
  Draw.linef ~p1:p_4 ~p2:p_5 env;
  Draw.linef ~p1:p_5 ~p2:p_1 env

let draw_commit env (d : draw_commit) =
  Draw.fill (c_of c_orange) env;
  Draw.stroke Constants.black env;
  Draw.strokeWeight 3 env;
  Draw.ellipsef ~center:(d.p.x, d.p.y) ~radx:10. ~rady:10. env

let draw_repo env (d : draw_repo) =
  Draw.fill Constants.white env;
  Draw.stroke Constants.black env;
  Draw.strokeWeight 3 env;
  Draw.rectMode Center env;
  Draw.rectf ~pos:(d.p.x, d.p.y) ~width:100. ~height:50. env

let build_branch_ref_draws c =
  [ Draw_branch_ref { p = c.commit_p } ]

let build_commit_line_draws repo c =
  let p = c.commit_p in
  let p_parent = one_parent_p repo c in
  [ Draw_commit_line { p = p; p_parent = p_parent }]

let build_commit_draws repo c =
  List.concat
  [ [ Draw_commit { p = c.commit_p }]
  ; (if List.exists (fun r -> r.gref_sha = c.commit_sha) repo.repo_refs
     then build_branch_ref_draws c
     else [])
  ]

let build_repo_draws repo =
  let cs = StringMap.bindings repo.repo_commits in
  List.concat
    [ [ Draw_repo { p = repo.repo_p } ]
    ; (Util.List.flat_map (fun (_, c) -> build_commit_line_draws repo c) cs)
    ; (Util.List.flat_map (fun (_, c) -> build_commit_draws repo c) cs)
    ]


let draw_draws env ds =
  List.iter (function | Draw_repo d -> draw_repo env d | _ -> ()) ds;
  List.iter (function | Draw_commit_line d -> draw_commit_line env d | _ -> ()) ds;
  List.iter (function | Draw_commit d -> draw_commit env d | _ -> ()) ds;
  List.iter (function | Draw_branch_ref d -> draw_branch_ref env d | _ -> ()) ds

let draw state env =
  let dt = Env.deltaTime env in
  let dt_sim = min dt 0.1 in
  let state' = step_state dt_sim state in
  let draws = List.map build_repo_draws state'.repos |> List.concat in
  Draw.background (c_of c_light_blue) env;
  draw_draws env draws;
  state'

let setup width height env : stateT =
  Env.size ~width ~height env;
  (* Draw.scale ~x:0.5 ~y:0.5 env; *)
  initState

external innerWidth : int = "window.document.documentElement.clientWidth" [@@bs.val]
external innerHeight : int = "window.document.documentElement.clientHeight" [@@bs.val]

let _ =
  let w, h = innerWidth, innerHeight in
  Reprocessing.setScreenId "gitsim-screen";
  run ~setup:(setup (w * 60 / 100) h) ~draw ()
