//creates array 'numbers' and pushes inside the numbers
//from one up to the inputed number
var numbers = function(number) {
  var numbers = [];
  for (var i = 1; i <= number; i++) {
    numbers.push(i);
  }
  return numbers;
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#number").val());
    var result = numbers(userInput);

    //displays every number to the user in a list
    $("#result ul").empty();

    if (userInput > 250) {
      var confirmation = confirm("Entering a number bigger than 250 may cause the page to crash. Are you sure you want to continue?");
    }

    if (confirmation || (userInput <= 250)) {
      result.forEach(function(number) {
        if ((number % 3 === 0) && (number % 5 !== 0)) {
          $("#result ul").prepend("<li>ping</li>");
        } else if ((number % 5 === 0) && (number % 3 !== 0)) {
          $("#result ul").prepend("<li>pong</li>");
        } else if ((number % 3 === 0) && (number % 5 === 0)) {
          $("#result ul").prepend("<li>ping pong</li>");
        } else {
          $("#result ul").prepend("<li>" + number + "</li>");
        }
      });
    }
  });
});
