function performOperation() {
    var num1 = document.getElementById("a").value;
    var num2 = document.getElementById("b").value;
  
    var num1Error = document.getElementById("num1Error");
    var num2Error = document.getElementById("num2Error");
  
 
    num1Error.textContent = "";
    num2Error.textContent = "";
    num1Error.style.color = "red";
    num2Error.style.color = "red";
  

    if (num1.trim() === "") {
      num1Error.textContent = "* Number 1 is required";
      return;
    }
  
    if (num2.trim() === "") {
      num2Error.textContent = "* Number 2 is required";
      return;
    }

    if (isNaN(num1)) {
      num1Error.textContent = "* Invalid input";
      return;
    }
  
    if (isNaN(num2)) {
      num2Error.textContent = "* Invalid input";
      return;
    }

    var result;
    var operator = document.getElementById("operator").value;
    switch (operator) {
      case '+':
        result = parseInt(num1) + parseInt(num2);
        break;
      case '-':
        result = parseInt(num1) - parseInt(num2);
        break;
      case '*':
        result = parseInt(num1) * parseInt(num2);
        break;
      case '/':
        result = parseInt(num1) / parseInt(num2);
        break;
      default:
        result = NaN;
    }
  
    var msg = document.getElementById("msg");
    if (!isNaN(result)) {
      msg.textContent = "Result: " + result;
    } else {
      msg.textContent = "Please enter a valid operation to Perform.";
    }
  }
  