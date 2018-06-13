open Reprocessing
open Util
open Draw

type draw_commit
  = { p : vec }

type draw_commit_line
  = { p : vec; p_parent : vec }

type draw_branch_ref
  = { p : vec; text : string }

type draw_repo
  = { p : vec }

type draw_cmd
  = Draw_commit of draw_commit
  | Draw_commit_line of draw_commit_line
  | Draw_branch_ref of draw_branch_ref
  | Draw_repo of draw_repo

let draw_commit_line env (d : draw_commit_line) =
  Draw.linef ~p1:(d.p_parent.x, d.p_parent.y) ~p2:(d.p.x, d.p.y) env

let draw_branch_ref env (d : draw_branch_ref) =
  let p = d.p in
  Draw.strokeWeight 0 env;
  Draw.rectMode Reprocessing_Common.Corner env;
  let o_x = 15. in
  let t_w = 10. in
  let r_w = 100. in
  let half_h = 16. in
  let p_1 = (p.x +. o_x, p.y) in
  let p_2 = (p.x +. o_x +. t_w, p.y +. half_h) in
  let p_3 = (p.x +. o_x +. t_w +. r_w, p.y +. half_h) in
  let p_4 = (p.x +. o_x +. t_w +. r_w, p.y -. half_h) in
  let p_5 = (p.x +. o_x +. t_w, p.y -. half_h) in
  Draw.fill (c_of ~a:128 c_dark_blue) env;
  Draw.rectf ~pos:(p.x +. o_x +. 10., p.y -. half_h) ~width: r_w ~height:(half_h *. 2.) env;
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
