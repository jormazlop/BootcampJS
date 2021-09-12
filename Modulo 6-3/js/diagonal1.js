let calcularDiagonal1 = () => {
   const n = document.getElementById("n-diagonal1-value").value;
   const sup = document.getElementById("char-sup1-value").value;
   const inf = document.getElementById("char-inf1-value").value;

   document.getElementById("n-diagonal1-value").style = "border: 1px solid black;"
   document.getElementById("char-sup1-value").style = "border: 1px solid black;"
   document.getElementById("char-inf1-value").style = "border: 1px solid black;"

   if(!n || n < 1) {
      console.log('n debe de valer al menos 1!');
      document.getElementById("n-diagonal1-value").style = "border: 1px solid red;"
      return;
   }

   if(!sup) {
      console.log('El char superior no puede estar vacio!');
      document.getElementById("char-sup1-value").style = "border: 1px solid red;"
      return;
   }

   if(!inf) {
      console.log('El char inferior no puede estar vacio!');
      document.getElementById("char-inf1-value").style = "border: 1px solid red;"
      return;
   }

   if(document.getElementById("cuadrado-diagonal1-button").innerText == 'Calcular') {
      squareDiagonal1(n, sup, inf);
   } else {
      document.getElementById("cuadrado-diagonal1-result").innerText = '';
      document.getElementById("cuadrado-diagonal1-button").innerText = 'Calcular';
   }

}

let squareDiagonal1 = (n, sup, inf) => {
   
   document.getElementById("cuadrado-diagonal1-result").innerHTML = "";
   let result = document.getElementById("cuadrado-diagonal1-result");

   for(index = 0; index < n; index++) {
      let resultRow = document.createElement("div");

      for(index1 = 0; index1 < n; index1++) {
         if(index1 < index) {
            resultRow.innerText += inf;
         } else if (index1 == index) {
            resultRow.innerText += '\\';
         } else { 
            resultRow.innerText += sup;
         }
      }

      result.appendChild(resultRow);
   }

   document.getElementById("cuadrado-diagonal1-button").innerText = 'Ocultar'

}