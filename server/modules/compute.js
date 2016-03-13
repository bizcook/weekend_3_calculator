var compute = function (object) {
  var result;

  //create a switch case to go through which math operator was used.
  switch (object.mathStuff) {
    case "add":
      result = parseInt(object.inputOne) + parseInt(object.inputTwo);
      break;

    case "subtract":
      result = parseInt(object.inputOne) - parseInt(object.inputTwo);
      break;

    case "multiply":
      result = parseInt(object.inputOne) * parseInt(object.inputTwo);
      break;

    case "divide":
      result = parseInt(object.inputOne) / parseInt(object.inputTwo);
      break;

    default:
      result = "Better Luck Next Time";
  }
  return result;
}

module.exports = compute;
