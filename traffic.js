let received = prompt();

function updateLight(received){
  switch (received.toUpperCase()){
    case "GREEN":
	  return "YELLOW";
	case "RED":
	  return "GREEN";
	case "YELLOW":
	  return "RED";
	default:
	  return "Is not a valid color";
  }
}

console.log(updateLight(received));
