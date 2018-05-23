let rec zip (x : 'a list) (y : 'b list) : ('a * 'b) list =
  match x, y with
  | [], [] -> []
  | (x::xs), (y::ys) -> (x, y)::(zip xs ys)
  | _ -> failwith "Invalid args"
