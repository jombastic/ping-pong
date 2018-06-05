export function pingPong(number) {
  var numbers = [];
  for (var i = 1; i <= number; i++) {
    if ((i % 3 === 0) && (i % 5 !== 0)) {
      numbers.push("ping");
    } else if ((i % 5 === 0) && (i % 3 !== 0)) {
      numbers.push("pong");
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
      numbers.push("ping-pong");
    } else {
      numbers.push(i);
    }
  }
  return numbers;
}
