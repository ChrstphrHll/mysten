
 export function get_track_border(track){
    switch (track){
    case "Assault":
        return "aslt";
    case "Protection":
        return "prot";
    case "Exploration":
        return "expl";
    case "Diplomacy":
        return "dipl";
    }
    return ""
}

export function get_track_bg(track){
    switch (track) {
        case "Assault":
          return "aslt-l";
        case "Protection":
          return "prot-l";
        case "Exploration":
          return "expl-l";
        case "Diplomacy":
          return "dipl-l";
      }
      return ""
}
