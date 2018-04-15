open Reprocessing

type commit =
  { sha : string
  ; parent : string option
  }

type gref =
  { name: string
  ; sha: string
  }

type repo =
  { name : string
  ; refs: gref list
  ; commits: commit list
  }

type stateT = {
  repos: repo list
}

let origin =
  { name = "local"
  ; refs =
      [{ name = "master"; sha = "abc" }]
  ; commits =
      [{ sha = "abc"; parent = (Some "def")}; { sha = "def"; parent = (Some "ghi")}; { sha = "ghi"; parent = None}]
  }

let initState =
  { repos = [origin]
  }

let setup env : stateT =
  Env.size ~width:600 ~height:600 env;
  initState

let draw state env =
  let dt = Env.deltaTime env in
  let state' = { squarePos = fst squarePos +. 5. *. dt, snd squarePos +. 5. *. dt } in
  Draw.background (Utils.color ~r:199 ~g:217 ~b:229 ~a:255) env;
  Draw.fill (Utils.color ~r:41 ~g:166 ~b:244 ~a:255) env;
  Draw.rectf ~pos:(fst state'.squarePos, snd state'.squarePos) ~width:300. ~height:300. env;
  state'

let _ = run ~setup ~draw ()
