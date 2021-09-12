let calcularMedioDiamante = () => {
   const n = document.getElementById("n-medio-value").value;
   const char = document.getElementById("char-medio-value").value;

   document.getElementById("n-medio-value").style = "border: 1px solid black;"
   document.getElementById("char-medio-value").style = "border: 1px solid black;"

   if(!n || n < 1) {
      console.log('n debe de valer al menos 1!');
      document.getElementById("n-medio-value").style = "border: 1px solid red;"
      return;
   }

   if(!char) {
      console.log('char no puede ser vacio!');
      document.getElementById("char-medio-value").style = "border: 1px solid red;"
      return;
   }

   if(document.getElementById("cuadrado-medio-button").innerText == 'Calcular') {
      medioDiamante(n, char);
   } else {
      document.getElementById("cuadrado-medio-result").innerText = '';
      document.getElementById("cuadrado-medio-button").innerText = 'Calcular';
   }

}

let medioDiamante = (n, char) => {
   
   document.getElementById("cuadrado-medio-result").innerHTML = "";
   let result = document.getElementById("cuadrado-medio-result");

   for(index1 = 0; index1 < n; index1++) {
      let resultRow = document.createElement("div");
      resultRow.innerText = char.repeat(index1+1);

      result.appendChild(resultRow);
   }

   for(index2 = n-1; index2 >= 0; index2--) {
      let resultRow = document.createElement("div");
      resultRow.innerText = char.repeat(index2);

      result.appendChild(resultRow);
   }

   document.getElementById("cuadrado-medio-button").innerText = 'Ocultar'

}