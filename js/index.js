$(document).ready(function () {
  var inputs = [""];
  var totalString;
  var operators1 = ["+", "-", "*", "/"];
  var operators2 = ["."];
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function getValue(input) {
    if (operators2.includes(inputs[inputs.length - 1]) === true && input === ".") {
      console.log("Duplicate '.' ");
    } else
    if (operators1.includes(input) === false && inputs.length === 1) {
      inputs.push(input);
    } else
    if (operators1.includes(inputs[inputs.length - 1]) === false) {
      inputs.push(input);
    } else
    if (nums.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }
  function totalOutput() {
    totalString = inputs.join("");
    $("#display").html(eval(totalString));
  }
  function update() {
    totalString = inputs.join("");
    $("#display").html(totalString);
  }
  $("button").on("click", function () {
    if (this.id === "clear") {
      inputs = [''];
      update();
    } else
    if (this.id === "CE") {
      inputs.pop();
      update();
    } else
    if (this.id === "equals") {
      totalOutput();
    } else
    {
      if (inputs[inputs.length - 1].indexOf("+", "-", "*", "/") === -1) {
        getValue(this.value);
      } else
      {
        getValue(this.value);
      }
    }
  });
});