const patternTarjeta1 = /^5[0-5][0-9][0-9]\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/i;
const patternTarjeta2 = /^5[0-5][0-9][0-9]\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/i;
const patternTarjeta3 = /^5[1-5][0-9]{14}$/i;

const patternTarjetaextraccion1 = /[0-9]{4}/g;

let validaTarjeta = () => {
   const tarjeta = document.getElementById('tarjeta1').value;

   if(patternTarjeta1.test(tarjeta)) {
      console.log('Se valida el patron 1!');
   } else {
      console.log('No se valida el patron 1!');
   }

   if(patternTarjeta2.test(tarjeta)) {
      console.log('Se valida el patron 2!');
   } else {
      console.log('No se valida el patron 2!');
   }

   if(patternTarjeta3.test(tarjeta)) {
      console.log('Se valida el patron 3!');
   } else {
      console.log('No se valida el patron 3!');
   }

   let index = 1;

   for(digitos of tarjeta.match(patternTarjetaextraccion1)) {
      console.log('El grupo ' + index + ' de digitos es : ' + digitos);
      index++;
   }

}
