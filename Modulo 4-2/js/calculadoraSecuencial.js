let a = 0;
let flagResultado = false;
let result=0;

let sum = () => {
   getValues();
   if(a) {
      result = result + a;
      setResult(" + ");
   }
}

let substraction = () => {
   getValues();
   if(a) {
      result = result - a;
      setResult(" - ");
   }
}

let division = () => {
   getValues();
   if(a) {
      result = result / a;
      setResult(" / ");
   }
}

let multiplication = () => {
   getValues();
   if(a) {
      result = result * a;
      setResult(" * ");
   }
}

let getValues = () => {
   a = parseInt(document.getElementById("varA").value);
}

let setResult = (symbol) => {

   if(!document.getElementById("result").innerHTML || flagResultado) {
      document.getElementById("result").innerHTML = document.getElementById("result").innerHTML = result;
      document.getElementById("result").style = "color: black;"
      flagResultado = false;
   } else {
      document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + symbol + a;
   }

}

let getResult = () => {

   if(!result && result !=0) {
      document.getElementById("result").innerHTML = "Error!";
      document.getElementById("result").style = "color: red;"
   } else {
      document.getElementById("result").innerHTML = "El resultado es : " + result;
      document.getElementById("result").style = "color: green;"
   }
   flagResultado = true;
   result = 0;
}

document.getElementById("sum").addEventListener("click", function() {sum()});
document.getElementById("substraction").addEventListener("click", function() {substraction()});
document.getElementById("division").addEventListener("click", function() {division()});
document.getElementById("multiplication").addEventListener("click", function() {multiplication()});
document.getElementById("resultado").addEventListener("click", function() {getResult()});