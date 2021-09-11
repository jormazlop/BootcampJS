

let randomPick = () => {

   const n = Number(document.getElementById("cantidad").value);
   const min = Number(document.getElementById("min").value);
   const max = Number(document.getElementById("max").value);

   let result = [];
   index = 0;

   if(!n || !min || !max) {
      console.log('Valor incorrecto!');
      return;
   }

   if (n < 1) {
      console.log('n debe ser un numero mayor que 0!');
      return;
   }

   if(min > max) {
      console.log('El minimo no puede ser mayor que el maximo!');
      return;
   }

   while(index < n) {
      result.push(getRandomInt(min, max));
      index++;
   }

   console.log(result);

}

let getRandomInt = (min, max) => {
   return Math.round(Math.random() * (max - min)) + min;
 }