open Reprocessing

type vec
  = { x : float; y : float }

type commit =
  { commit_sha : string
  ; commit_parent : string option
  ; commit_p : vec
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

type stateT = {
  repos: repo list
}


let origin =
  let init_p = { x = 10.; y = 10. } in
  { repo_name = "local"
  ; repo_refs = [{ gref_name = "master"; gref_sha = "abc" }]
  ; repo_commits =
      (List.fold_left (fun m c -> StringMap.add c.commit_sha c m)
         StringMap.empty
         [ { commit_sha = "abc"; commit_parent = (Some "def"); commit_p = init_p }
         ; { commit_sha = "def"; commit_parent = (Some "ghi"); commit_p = init_p }
         ; { commit_sha = "ghi"; commit_parent = None; commit_p = init_p }
         ]
      )
  ; repo_p = init_p
  }

let initState =
  { repos = [origin]
  }

let setup env : stateT =
  Env.size ~width:600 ~height:600 env;
  initState

let v_max = 50.
let v_max_sq = 50. ** 2.

let r_sq_relation ?inverse:(inverse=false) ?scale:(scale=1.) (p : vec) (p2 : vec) =
  let d_orig = { x = p2.x -. p.x; y = p2.y -. p.y } in
  let d = { x = if d_orig.x = 0. && d_orig.y = 0. then Js.Math.random () +. 0.1 else d_orig.x
          ; y = if d_orig.x = 0. && d_orig.y = 0. then Js.Math.random () +. 0.1 else d_orig.y
          }
  in
  let r_sq = (d.x ** 2. +. d.y ** 2.) in
  let r = sqrt r_sq in
  let d_unit = { x = d.x /. r; y = d.y /. r } in
  let a_mag = if inverse then 1. /. r_sq else r_sq in
  { x = d_unit.x *. a_mag *. scale; y = d_unit.y *. a_mag *. scale }

let step_commit (dt : float) (repo : repo) (repeller_ps : vec list) commit =
  let p = commit.commit_p in
  let attractor_p = match commit.commit_parent with
    | None -> repo.repo_p
    | Some sha ->
      let c = StringMap.find sha repo.repo_commits
      in c.commit_p
  in
  let attract_a = r_sq_relation p attractor_p in
  (* print_endline (Printf.sprintf "attract_ax: %f, attract_ay: %f" attract_a.x attract_a.y); *)
  let repel_a =
    repeller_ps
    |> List.fold_left (fun a_total p2 ->
        let a = r_sq_relation ~inverse:true ~scale:50000. p p2 in
        { x = a.x +. a_total.x; y = a.y +. a_total.y }
      ) { x = 0.; y = 0. }
  in
  (* print_endline (Printf.sprintf "repel_ax: %f, repel_ay: %f" repel_a.x repel_a.y); *)
  let a = { x = attract_a.x +. repel_a.x; y = attract_a.y +. repel_a.y } in
  (* print_endline (Printf.sprintf "ax: %f, ay: %f" a.x a.y); *)
  let v_orig = { x = a.x *. dt; y = a.y *. dt } in
  let v_mag_sq = v_orig.x ** 2. +. v_orig.y ** 2. in
  let v = if v_mag_sq > v_max_sq then
      let v_mag = sqrt v_mag_sq in
      { x = v_orig.x *. v_max /. v_mag; y = v_orig.y *. v_max /. v_mag }
    else
      v_orig
  in
  (* print_endline (Printf.sprintf "vx: %f, vy: %f" v.x v.y); *)
  let p = { x = p.x +. v.x *. dt; y = p.y +. v.y *. dt } in
  (* print_endline (Printf.sprintf "x: %f, y: %f" p.x p.y); *)
  { commit with commit_p = p }

let step_repo (dt : float) repo =
  let repeller_ps =
    [repo.repo_p] @ StringMap.fold (fun _ c acc -> c.commit_p :: acc) repo.repo_commits []
  in
  { repo with repo_commits = StringMap.map (step_commit dt repo repeller_ps) repo.repo_commits }

let step_state (dt : float) (state : stateT) =
  { repos = List.map (step_repo dt) state.repos }

let draw_commit env commit =
  Draw.fill (Utils.color ~r:241 ~g:78 ~b:50 ~a:255) env;
  Draw.stroke Constants.black env;
  Draw.strokeWeight 3 env;
  Draw.ellipsef ~center:(commit.commit_p.x, commit.commit_p.y) ~radx:30. ~rady:30. env

let draw_repo env repo =
  Draw.fill Constants.white env;
  Draw.stroke Constants.black env;
  Draw.strokeWeight 3 env;
  Draw.rectf ~pos:(repo.repo_p.x, repo.repo_p.y) ~width:100. ~height:50. env;
  StringMap.iter (fun _ c -> draw_commit env c) repo.repo_commits

let draw state env =
  let dt = Env.deltaTime env in
  let state' = step_state dt state in
  Draw.background (Utils.color ~r:199 ~g:217 ~b:229 ~a:255) env;
  List.iter (draw_repo env) state'.repos;
  state'

let _ = run ~setup ~draw ()
