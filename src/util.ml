open Reprocessing

type vec
  = { x : float; y : float }

type color =
  { r : int; g : int; b : int }

let c_orange : color = { r = 245; g = 77; b = 39 }
let c_light_blue : color = { r = 199; g = 217; b = 229 }
let c_dark_blue : color = { r = 0; g = 144; b = 154 }
let c_yellow : color = { r = 205; g = 159; b = 0 }

let c_of ?a:(a=255) (c: color) : colorT =
  let {r;g;b} = c in
  (Utils.color ~r ~g ~b ~a)


module UList = struct
  let rec zip (x : 'a list) (y : 'b list) : ('a * 'b) list =
    match x, y with
    | [], [] -> []
    | (x::xs), (y::ys) -> (x, y)::(zip xs ys)
    | _ -> failwith "Invalid args"

  let flat_map (f : 'a -> 'b list) (xs : 'a list) : 'b list =
    List.map f xs |> List.concat

  let find_opt (f : 'a -> bool) (xs : 'a list) : 'a option =
    try Some (List.find f xs)
    with Not_found -> None
end
