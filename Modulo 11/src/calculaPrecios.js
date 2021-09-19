import { Tour } from './tourOperador.js';

const calculaSubTotal = reserva => {

   let subTotal = 0;

   if(reserva instanceof Tour) {
      subTotal = 100;

   } else {

      switch(reserva.tipoHabitacion) {
         case 'standard':
            subTotal = 100;
            break;
         case 'doble':
            subTotal = 120;
            break;
         case 'triple':
            subTotal = 135;
            break;
         case 'suite':
            subTotal = 150;
            break;
      }

   }

   subTotal = subTotal + (reserva.pax*40);

   subTotal = subTotal*reserva.noches;

   reserva.desayuno? subTotal += (15*reserva.pax*reserva.noches) : subTotal;

   return reserva instanceof Tour? subTotal*0.85 : subTotal;

 }

 const calculaTotal = reserva => { return calculaSubTotal(reserva)*1.21 }

 export { calculaSubTotal, calculaTotal };