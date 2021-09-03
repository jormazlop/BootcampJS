const empleado = {
   bruto: Number,
   hijos: Number,
   pagas: Number
}

empleado.bruto = window.prompt('Introduzca el sueldo bruto del empleado');
empleado.hijos = window.prompt('Introduzca el numero de hijos del empleado');

const numeroPagas = window.confirm('El empleado recibe 14 pagas?');

empleado.pagas = numeroPagas ? 14 : 12;

let retencion;

if(empleado.bruto < 12000) {
   retencion = 0;
}

if(empleado.bruto >= 12000 && empleado.bruto < 24000){
   retencion = 0.08;
}

if(empleado.bruto >= 24000 && empleado.bruto < 34000){
   retencion = 0.16;
}

if(empleado.bruto >= 34000) {
   retencion = 0.30;
}

if(empleado.hijos > 0) {
   if(retencion >= 0.2){
      retencion = retencion - 0.2;
   }
}

const netoAnual = empleado.bruto - (empleado.bruto*retencion);
const netoMensual = netoAnual / empleado.pagas;

console.log('Se aplica una retencion del ' + (retencion*100) + ' %');
console.log('El sueldo neto anual es de ' + netoAnual + ' €');
console.log('El sueldo neto mensual es de ' + netoMensual + ' € en ' + empleado.pagas + ' pagas');