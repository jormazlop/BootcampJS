let a = 0;
let b = 0;
let result = 0;

let sum = () => {
   getValues();
   result = a + b;
   setResult();
}

let substraction = () => {
   getValues();
   result = a - b;
   setResult();
}

let division = () => {
   getValues();
   result = a / b;
   setResult();
}

let multiplication = () => {
   getValues();
   result = a * b;
   setResult();
}

let getValues = () => {
   a = parseInt(document.getElementById("varA").value);
   b = parseInt(document.getElementById("varB").value);
}

let setResult = () => {
   if(!result && result != 0) {
      document.getElementById("result").innerHTML = "Error!";
      document.getElementById("result").style = "color: red;"
   } else {
      document.getElementById("result").innerHTML = "El resultado es : " + result;
      document.getElementById("result").style = "color: green;"
   }
}

document.getElementById("sum").addEventListener("click", function() {sum()});
document.getElementById("substraction").addEventListener("click", function() {substraction()});
document.getElementById("division").addEventListener("click", function() {division()});
document.getElementById("multiplication").addEventListener("click", function() {multiplication()});