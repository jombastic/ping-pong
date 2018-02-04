//creates array 'numbers' and pushes inside the numbers
//from one up to the inputed number
var testFunction = function(number) {
  var numbers = [];
  for (var i = 1; i <= number; i++) {
    numbers.push(i);
  }
  return numbers;
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var number = $("#number").val();
    var numbers = testFunction(number);

    //displays every number to the user in a list
    $("#result").show();
    numbers.forEach(function(number) {
      if (number % 3 === 0) {
        $("#result ul").prepend("<li>ping</li>");
      } else if (number % 5 === 0) {
        $("#result ul").prepend("<li>pong</li>");
      } else {
        $("#result ul").prepend("<li>" + number + "</li>");
      }
    });
  });
});
