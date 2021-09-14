const patternIBAN1 = /^ES\d{22}$/i;

const patternIBAN2 = /^ES\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/i;

const patternIBAN3 = /^ES\d{2}/i;

let validaIBAN1 = () => {

   const iban = document.getElementById('iban1').value;

   if(patternIBAN1.test(iban)) {
      document.getElementById('iban1').style = 'border: 1px solid green;'
      document.getElementById('symbol1').innerHTML = '&#10003';
      document.getElementById('symbol1').style = 'color: green';
   } else {
      document.getElementById('iban1').style = 'border: 1px solid red;'
      document.getElementById('symbol1').innerHTML = '&#935;';
      document.getElementById('symbol1').style = 'color: red';
   }

   console.log(patternIBAN1.test(iban));

   //console.log(patternIBAN1.test('ES6600190020961234567890'));
}

let validaIBAN2 = () => {

   const iban = document.getElementById('iban2').value;

   if(patternIBAN2.test(iban)) {
      document.getElementById('iban2').style = 'border: 1px solid green;'
      document.getElementById('symbol2').innerHTML = '&#10003';
      document.getElementById('symbol2').style = 'color: green';

   } else {
      document.getElementById('iban2').style = 'border: 1px solid red;'
      document.getElementById('symbol2').innerHTML = '&#935;';
      document.getElementById('symbol2').style = 'color: red';
   }

   //console.log(patternIBAN2.test(ES66 0019 0020 9612 3456 7890));
}

let validaIBAN3 = () => {

   const iban = document.getElementById('iban3').value;
   document.getElementById("iban-extract").value = '';

   if(patternIBAN1.test(iban)) {
      document.getElementById('iban3').style = 'border: 1px solid green;'
      document.getElementById('symbol3').innerHTML = '&#10003';
      document.getElementById('symbol3').style = 'color: green';
      document.getElementById("iban-extract").innerText = "Codigo extraido : " + iban.match(patternIBAN3);
   } else {
      document.getElementById('iban3').style = 'border: 1px solid red;'
      document.getElementById('symbol3').innerHTML = '&#935;';
      document.getElementById('symbol3').style = 'color: red';
   }
}

