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

type repo =
  { repo_name : string
  ; repo_refs : gref list
  ; repo_commits : commit list
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
      [ { commit_sha = "abc"; commit_parent = (Some "def"); commit_p = init_p }
      ; { commit_sha = "def"; commit_parent = (Some "ghi"); commit_p = init_p }
      ; { commit_sha = "ghi"; commit_parent = None; commit_p = init_p }
      ]
  ; repo_p = init_p
  }

let initState =
  { repos = [origin]
  }

let setup env : stateT =
  Env.size ~width:600 ~height:600 env;
  initState

let step_commit (dt : float) commit =
  let p = commit.commit_p in
  { commit with commit_p = { x = p.x +. 10. *. dt; y = p.y +. 10. *. dt }}

let step_repo (dt : float) repo =
  { repo with repo_commits = List.map (step_commit dt) repo.repo_commits }

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
  List.iter (draw_commit env) repo.repo_commits

let draw state env =
  let dt = Env.deltaTime env in
  let state' = step_state dt state in
  Draw.background (Utils.color ~r:199 ~g:217 ~b:229 ~a:255) env;
  List.iter (draw_repo env) state'.repos;
  state'

let _ = run ~setup ~draw ()
