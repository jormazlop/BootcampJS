let calcularCuadradoBorde = () => {
   const n = document.getElementById("n-borde-value").value;
   const char = document.getElementById("char-borde-value").value;

   document.getElementById("n-borde-value").style = "border: 1px solid black;"
   document.getElementById("char-borde-value").style = "border: 1px solid black;"

   if(!n || n < 1) {
      console.log('n debe de valer al menos 1!');
      document.getElementById("n-borde-value").style = "border: 1px solid red;"
      return;
   }

   if(!char) {
      console.log('char no puede ser vacio!');
      document.getElementById("char-borde-value").style = "border: 1px solid red;"
      return;
   }

   if(document.getElementById("cuadrado-borde-button").innerText == 'Calcular') {
      squareBorde(n, char);
   } else {
      document.getElementById("cuadrado-borde-result").innerText = '';
      document.getElementById("cuadrado-borde-button").innerText = 'Calcular';
   }

}
let squareBorde = (n, char) => {
   
   document.getElementById("cuadrado-borde-result").innerHTML = "";
   let result = document.getElementById("cuadrado-borde-result");

   for(index = 0; index < n; index++) {
      let resultRow = document.createElement("div");
      if(index == 0 || index == (n-1)) {
         resultRow.innerText = 'B'.repeat(n);
      } else {
         resultRow.innerText = 'B' + char.repeat(n-2) + 'B';
      }

      result.appendChild(resultRow);
   }

   document.getElementById("cuadrado-borde-button").innerText = 'Ocultar'

}