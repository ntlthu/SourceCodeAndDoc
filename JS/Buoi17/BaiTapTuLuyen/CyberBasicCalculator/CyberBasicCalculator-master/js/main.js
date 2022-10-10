

function calculate() {

  // Validation
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var operators = document.querySelectorAll('input[name="operation"]');
  var math = "";

  for (let i = 0; i < operators.length; i++) {
    if (operators[i].checked) {
      math = operators[i].value;
    }
  }


  var result = checkOperators(math, Number(num1), Number(num2));

  if (result != undefined && num1 != "" && num2 != "") {

    document.getElementById("result").innerHTML = num1 + " " + math + " " + num2 + " = " + result;
    document.getElementById("result").style.display = "block";
  }
  
}

function checkOperators(value, num1, num2) {
  switch (value) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;

    default:
  }
}