let tipoBillete = (devolucion) => {

   if(devolucion/200 >= 1 ) {
      return 200;
   }

   if(devolucion/100 >= 1 ) {
      return 100;
   }

   if(devolucion/50 >= 1 ) {
      return 50;
   }

   if(devolucion/20 >= 1 ) {
      return 20;
   }

   if(devolucion/10 >= 1 ) {
      return 10;
   }

   if(devolucion/5 >= 1 ) {
      return 5;
   }

   return 0;

}

let tipoMoneda = (devolucion) => {

   if(devolucion/2 >= 1 ) {
      return 2;
   }

   if(devolucion/1 >= 1 ) {
      return 1;
   }

   if(devolucion/0.50 >= 1 ) {
      return 0.50;
   }

   if(devolucion/0.20 >= 1 ) {
      return 0.20;
   }

   if(devolucion/0.10 >= 1 ) {
      return 0.10;
   }

   if(devolucion/0.05 >= 1 ) {
      return 0.05;
   }

   if(devolucion/0.02 >= 1 ) {
      return 0.02;
   }

   if(devolucion/0.01 >= 1 ) {
      return 0.01;
   }

   return 0;

}

let billeteADevolver = () => {

   const total = document.getElementById("total").value;
   const entregado = document.getElementById("entregado").value;
   const totalADevolver = entregado - total;
   let restante = totalADevolver;
   let devolucion = [];

   while(tipoBillete(restante) != 0) {

      if(tipoBillete(restante)) {
         for(i = 0; i <= restante/tipoBillete(restante); i++) {
            devolucion.push(tipoBillete(restante));
         }
         restante = restante%tipoBillete(restante);
      }

   }

   while(tipoMoneda(restante) != 0) {

      if(tipoMoneda(restante)) {
         for(i = 0; i <= restante/tipoMoneda(restante); i++) {
            devolucion.push(tipoMoneda(restante));
         }
         restante = restante%tipoMoneda(restante);
      }

   }

   console.log('Billetes/monedas a devolver : ' + devolucion);

}