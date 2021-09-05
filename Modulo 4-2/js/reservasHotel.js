let getHotelPrice = () => {
   const tipoReserva = document.getElementById("tipo").value;
   const spa = document.getElementById("spa").checked;
   const tipoOcupacion = document.getElementById("ocupacion").value;
   let tarifa;

   switch(tipoReserva) {
      case "standard":
         tarifa = 100;
         break;
      case "junior":
         tarifa = 120;
         break;
      case "suite":
         tarifa = 150;
         break;
   }

   tarifa = spa? tarifa + 20: tarifa;

   switch(tipoOcupacion) {
      case "individual":
         tarifa = tarifa * 0.75;
         break;
      case "doble":
         break;
      case "triple":
         tarifa = tarifa * 1.25;
         break;
   }

   const numeroNoches = parseInt(document.getElementById("noches").value);
   const nochesParking = parseInt(document.getElementById("parking").value) * 10;

   let precioFinal = tarifa * numeroNoches;
   precioFinal = precioFinal + nochesParking;

   if(precioFinal) {
      document.getElementById("precio").innerHTML = "El precio final es de " + precioFinal + " €";
      document.getElementById("precio").style = "color: green;"
   } else {
      document.getElementById("precio").innerHTML = "¡Valor de entrada invalido!";
      document.getElementById("precio").style = "color: red;"
   }

}

document.getElementById("tipo").addEventListener("change", function() {getHotelPrice()});
document.getElementById("spa").addEventListener("change", function() {getHotelPrice()});
document.getElementById("ocupacion").addEventListener("change", function() {getHotelPrice()});
document.getElementById("noches").addEventListener("change", function() {getHotelPrice()});
document.getElementById("parking").addEventListener("change", function() {getHotelPrice()});
