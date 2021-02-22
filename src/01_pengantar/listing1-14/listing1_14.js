var number = 1;

// 500 lines later

// let with same name redeclared is an error
var number = 2;


var echoer = function(message) {
  // Reusing function argument name as let is an error
  var message = "Local message"; //Duplicate declaration "message"
  console.log(message);
  return message;
}

echoer("Hello there!");