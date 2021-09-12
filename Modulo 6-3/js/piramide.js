let calcularPiramide = () => {
   const n = document.getElementById("n-piramide-value").value;
   const char = document.getElementById("char-piramide-value").value;

   document.getElementById("n-piramide-value").style = "border: 1px solid black;"
   document.getElementById("char-piramide-value").style = "border: 1px solid black;"

   if(!n || n < 1) {
      console.log('n debe de valer al menos 1!');
      document.getElementById("n-piramide-value").style = "border: 1px solid red;"
      return;
   }

   if(!char) {
      console.log('char no puede ser vacio!');
      document.getElementById("char-piramide-value").style = "border: 1px solid red;"
      return;
   }

   if(document.getElementById("cuadrado-piramide-button").innerText == 'Calcular') {
      piramide(n, char);
   } else {
      document.getElementById("cuadrado-piramide-result").innerText = '';
      document.getElementById("cuadrado-piramide-button").innerText = 'Calcular';
   }

}

let piramide = (n, char) => {
   
   document.getElementById("cuadrado-piramide-result").innerHTML = "";
   let result = document.getElementById("cuadrado-piramide-result");
   let repeatnumber = 1;

   for(index = 1; index <= n; index++) {

      let resultRow = document.createElement("div");

      if(index == 1) {
         resultRow.innerText = char.repeat(repeatnumber);
      } else {
         resultRow.innerText = char.repeat(repeatnumber+2);
         repeatnumber = repeatnumber + 2;
      }

      result.appendChild(resultRow);
   }

   document.getElementById("cuadrado-piramide-button").innerText = 'Ocultar'

}