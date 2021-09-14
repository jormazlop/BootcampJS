
const patternMatricula1 = /^[0-9]{4}\s[A-Z]{3}$/i;
const patternMatriculaextract1 = /[0-9]{4}/i;
const patternMatriculaextract2 = /[A-Z]{3}/i;
const patternMatricula2 = /^[0-9]{4}-[A-Z]{3}$/i;
const patternMatricula3 = /^[0-9]{4}[A-Z]{3}$/i;

let validaMatriculas = () => {
   if(patternMatricula1.test('2021 GMD')){
      console.log('El primer patron se valida!');
      console.log(patternMatriculaextract1.exec('2021 GMD')[0]);
      console.log(patternMatriculaextract2.exec('2021 GMD')[0]);
   } else {
      console.log('El primer patron falla!');
   }

   if(patternMatricula2.test('2345-GMD')){
      console.log('El segundo patron se valida!');
      console.log(patternMatriculaextract1.exec('2345-GMD')[0]);
      console.log(patternMatriculaextract2.exec('2345-GMD')[0]);
   } else {
      console.log('El segundo patron falla!');
   }

   if(patternMatricula3.test('4532BDB')){
      console.log('El tercer patron se valida!');
      console.log(patternMatriculaextract1.exec('4532BDB')[0]);
      console.log(patternMatriculaextract2.exec('4532BDB')[0]);
   } else {
      console.log('El tercer patron falla!');
   } 

   if(patternMatricula2.test('0320-AAA')){
      console.log('El cuarto patron se valida!');
      console.log(patternMatriculaextract1.exec('0320-AAA')[0]);
      console.log(patternMatriculaextract2.exec('0320-AAA')[0]);
   } else {
      console.log('El cuarto patron falla!');
   } 

}