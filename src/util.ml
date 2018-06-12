module List = struct
  let rec zip (x : 'a list) (y : 'b list) : ('a * 'b) list =
    match x, y with
    | [], [] -> []
    | (x::xs), (y::ys) -> (x, y)::(zip xs ys)
    | _ -> failwith "Invalid args"

  let flat_map (f : 'a -> 'b list) (xs : 'a list) : 'b list =
    List.map f xs |> List.concat
end
