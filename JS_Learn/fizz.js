let mynum = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

if (mynum%3 == 0 && mynum%5 == 0) {
    alert("FizzBuzz");
} else if (mynum%3 == 0) {
    alert("Fizz");
} else if (mynum%5 == 0) {
    alert("Buzz");
}
