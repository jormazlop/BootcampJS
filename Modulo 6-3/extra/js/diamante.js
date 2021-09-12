let calcularDiamante = () => {
   const n = document.getElementById("n-diamante-value").value;
   const char = document.getElementById("char-diamante-value").value;

   document.getElementById("n-diamante-value").style = "border: 1px solid black;"
   document.getElementById("char-diamante-value").style = "border: 1px solid black;"

   if(!n || n < 1) {
      console.log('n debe de valer al menos 1!');
      document.getElementById("n-diamante-value").style = "border: 1px solid red;"
      return;
   }

   if(!char) {
      console.log('char no puede ser vacio!');
      document.getElementById("char-diamante-value").style = "border: 1px solid red;"
      return;
   }

   if(document.getElementById("cuadrado-diamante-button").innerText == 'Calcular') {
      diamante(n, char);
   } else {
      document.getElementById("cuadrado-diamante-result").innerText = '';
      document.getElementById("cuadrado-diamante-button").innerText = 'Calcular';
   }

}

let diamante = (n, char) => {
   
   document.getElementById("cuadrado-diamante-result").innerHTML = "";
   let result = document.getElementById("cuadrado-diamante-result");
   let repeatnumber = 1;

   for(index1 = 1; index1 <= n; index1++) {

      let resultRow = document.createElement("div");

      if(index1 == 1) {
         resultRow.innerText = char.repeat(repeatnumber);
      } else {
         resultRow.innerText = char.repeat(repeatnumber+2);
         repeatnumber = repeatnumber + 2;
      }

      result.appendChild(resultRow);
   }

   for(index1 = n; index1 > 1; index1--) {

      let resultRow = document.createElement("div");

      if(index1 == 1) {
         resultRow.innerText = char.repeat(repeatnumber);
      } else {
         resultRow.innerText = char.repeat(repeatnumber-2);
         repeatnumber = repeatnumber - 2;
      }

      result.appendChild(resultRow);
   }



   document.getElementById("cuadrado-diamante-button").innerText = 'Ocultar'

}