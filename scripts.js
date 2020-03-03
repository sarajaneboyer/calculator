// need to make functions in here for add, subtract, multiply, divide, and total
// need to make click function show buttons on display

const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator_keys');

keys.addEventListener("click", e => {
  if (e.target.matches('button')) {
    alert("you pressed the button");
  }
});

document.getElementById('button').addEventListener("click", function() {
    alert("you pressed the button");
});
