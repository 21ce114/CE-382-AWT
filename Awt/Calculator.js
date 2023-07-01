function add(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let num1Error = document.getElementById('num1Error');
    let num2Error = document.getElementById('num2Error');
    num1Error.textContent = "";
    num2Error.textContent = "";
    num1Error.style.color= "red";
    num2Error.style.color= "red";

    //Check if the field is empty or not
    if (a.trim() === "") {
        num1Error.textContent = "* Number 1 is required";
        return;
      }
    
      if (b.trim() === "") {
        num2Error.textContent = "* Number 2 is required";
        return;
      }

      //Check if the entered value is a number or not
      if (isNaN(a)) {
        num1Error.textContent = "* Invalid input";
        return;
      }
    
      if (isNaN(b)) {
        num2Error.textContent = "* Invalid input";
        return;
      }
      let res = parseInt(a)+parseInt(b);
      document.getElementById('msg').innerHTML = res;
}

function sub(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let num1Error = document.getElementById('num1Error');
    let num2Error = document.getElementById('num2Error');
    num1Error.textContent = "";
    num2Error.textContent = "";
    num1Error.style.color= "red";
    num2Error.style.color= "red";
    if (a.trim() === "") {
        num1Error.textContent = "* Number 1 is required";
        return;
      }
    
      if (b.trim() === "") {
        num2Error.textContent = "* Number 2 is required";
        return;
      }

      if (isNaN(a)) {
        num1Error.textContent = "* Invalid input";
        return;
      }
    
      if (isNaN(b)) {
        num2Error.textContent = "* Invalid input";
        return;
      }
      let res = parseInt(a)-parseInt(b);
      document.getElementById('msg').innerHTML = res;
}

function mul(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let num1Error = document.getElementById('num1Error');
    let num2Error = document.getElementById('num2Error');
    num1Error.textContent = "";
    num2Error.textContent = "";
    num1Error.style.color= "red";
    num2Error.style.color= "red";
    if (a.trim() === "") {
        num1Error.textContent = "* Number 1 is required";
        return;
      }
    
      if (b.trim() === "") {
        num2Error.textContent = "* Number 2 is required";
        return;
      }

      if (isNaN(a)) {
        num1Error.textContent = "* Invalid input";
        return;
      }
    
      if (isNaN(b)) {
        num2Error.textContent = "* Invalid input";
        return;
      }
      let res = parseInt(a)*parseInt(b);
      document.getElementById('msg').innerHTML = res;
}

function div(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let num1Error = document.getElementById('num1Error');
    let num2Error = document.getElementById('num2Error');
    num1Error.textContent = "";
    num2Error.textContent = "";
    num1Error.style.color= "red";
    num2Error.style.color= "red";
    if (a.trim() === "") {
        num1Error.textContent = "* Number 1 is required";
        return;
      }
    
      if (b.trim() === "") {
        num2Error.textContent = "* Number 2 is required";
        return;
      }

      if (isNaN(a)) {
        num1Error.textContent = "* Invalid input";
        return;
      }
    
      if (isNaN(b)) {
        num2Error.textContent = "* Invalid input";
        return;
      }
      let res = parseInt(a)/parseInt(b);
      document.getElementById('msg').innerHTML = res;
}
