import { pingPong } from './ping-pong.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function generateList(numbers) {
  numbers.forEach(function(number) {
    if (typeof number === "number") {
      $("#result ul").prepend("<li>" + number + "</li>");
    } else {
      $("#result ul").prepend("<li class='" + number + "'>" + number +"</li>");
    }
  });
}

$(function() {
  $("#number").click(function() {
    $(this).addClass("redBlur");
  });

  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#number").val());
    var numbers = pingPong(userInput);

    //displays every number to the user in a list
    $("#result ul").empty();
    $("#result").addClass("redBlur");

    if (userInput > 250) {
      var confirmation = confirm("Entering a number bigger than 250 may cause the page to crash. Are you sure you want to continue?");
    }

    if (confirmation || (userInput <= 250)) {
      generateList(numbers);
    }
  });
});
