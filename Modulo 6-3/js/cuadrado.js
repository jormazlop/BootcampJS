let calcularCuadrado = () => {
   const n = document.getElementById("n-value").value;
   const char = document.getElementById("char-value").value;

   document.getElementById("n-value").style = "border: 1px solid black;"
   document.getElementById("char-value").style = "border: 1px solid black;"

   if(!n || n < 1) {
      console.log('n debe de valer al menos 1!');
      document.getElementById("n-value").style = "border: 1px solid red;"
      return;
   }

   if(!char) {
      console.log('char no puede ser vacio!');
      document.getElementById("char-value").style = "border: 1px solid red;"
      return;
   }

   if(document.getElementById("cuadrado-button").innerText == 'Calcular') {
      square(n, char);
   } else {
      document.getElementById("cuadrado-result").innerText = '';
      document.getElementById("cuadrado-button").innerText = 'Calcular';
   }

}

let square = (n, char) => {
   
   document.getElementById("cuadrado-result").innerHTML = "";
   let result = document.getElementById("cuadrado-result");

   for(index = 0; index < n; index++) {
      let resultRow = document.createElement("div");
      resultRow.innerText = char.repeat(n);
      result.appendChild(resultRow);
   }

   document.getElementById("cuadrado-button").innerText = 'Ocultar'

}
