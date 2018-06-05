import { pingPong } from './../src/ping-pong.js';

describe("Ping-Pong", function() {
  it('should return an array of all numbers leading up to inputted one', function() {
    var numbers = pingPong(15);
    expect(numbers.length).toEqual(15);
  });

  it('should return the first two numbers leading up to the inputed one', function() {
    var numbers = pingPong(2);
    expect(numbers).toEqual([1, 2]);
  });

  it('should replace the numbers divisible by 3 with "ping"', function() {
    var numbers = pingPong(3);
    expect(numbers).toEqual([1, 2, 'ping']);
  });

  it('should replace the numbers divisible by 3 with "pong"', function() {
    var numbers = pingPong(5);
    var testArray = [1, 2, 'ping', 4, 'pong'];
    expect(numbers).toEqual(testArray);
  });

  it('should replace the numbers divisible by 3 AND 5 with "ping-pong"', function() {
    var numbers = pingPong(15);
    var testArray = [1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong',
      11, 'ping', 13, 14, 'ping-pong'];
    expect(numbers).toEqual(testArray);
  });
});
