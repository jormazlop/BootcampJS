import { Reserva } from './src/reserva.js';
import { Tour } from './src/tourOperador.js';
import { calculaSubTotal, calculaTotal } from './src/calculaPrecios.js';

function getPrecios() {

   document.getElementById('persons').style = 'border: 1px solid black;';
   document.getElementById('nights').style = 'border: 1px solid black;';

   let resultados = document.getElementById('resultados');
   resultados.innerHTML = '';

   const tipoHabitacion = document.getElementById('tipo').value;
   const personas = document.getElementById('persons').value;
   const noches = document.getElementById('nights').value;
   const desayuno = document.getElementById('desayuno').checked;
   const operador = document.getElementById('operador').checked;

   if(!personas || personas < 0) {
      document.getElementById('persons').style = 'border: 1px solid red;';
      return;
   }

   if(!noches || noches < 0) {
      document.getElementById('nights').style = 'border: 1px solid red;';
      return;
   }

   const reserva = operador? new Tour(tipoHabitacion, personas, noches, desayuno) : new Reserva(tipoHabitacion, personas, noches, desayuno);

   numeroSubTotal += calculaSubTotal(reserva);
   const subTotal = document.createElement('p');
   subTotal.append('El subtotal es de ' + numeroSubTotal + ' €');

   numeroTotal += calculaTotal(reserva);
   const total = document.createElement('p');
   total.append('El total es de ' + numeroTotal + ' €');

   resultados.appendChild(subTotal);
   resultados.appendChild(total);

   const reservas = document.createElement('p');
   numeroReservas++;
   resultados.append('Nº de reservas : ' + numeroReservas);

}

let numeroReservas = 0;
let numeroTotal = 0;
let numeroSubTotal = 0;

document.getElementById('calcula-precio').addEventListener('click', function() {getPrecios()});
