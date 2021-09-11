

const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";



let encryptMessage = () => {
   
   document.getElementById("message").style = "border: 1px solid black;";
   document.getElementById("message-encrypt").style = "border: 1px solid black;";

   let messageOriginal = document.getElementById("message").value;
   let messageEncrypt = "";

   if(!messageOriginal) {
      document.getElementById("message").style = "border: 1px solid red;";
      return;
   }

   for(charMessage of messageOriginal) {
      let indexChar = plainAlphabet.indexOf(charMessage);

      if(indexChar != -1) {
         messageEncrypt += encryptedAlphabet[indexChar];
      } else {
         messageEncrypt += charMessage;
      }
   }

   document.getElementById("message-encrypt").value = messageEncrypt;
}

let desencryptMessage = () => {
   document.getElementById("message").style = "border: 1px solid black;";
   document.getElementById("message-encrypt").style = "border: 1px solid black;";


   let messageEncrypt = document.getElementById("message-encrypt").value;
   let messageOriginal = "";

   if(!messageEncrypt) {
      document.getElementById("message-encrypt").style = "border: 1px solid red;";
      return;
   }

   for(charMessage of messageEncrypt){
      let indexChar = encryptedAlphabet.indexOf(charMessage);

      if(indexChar != -1) {
         messageOriginal += plainAlphabet[indexChar];
      } else {
         messageOriginal += charMessage;
      }
   }

   document.getElementById("message").value = messageOriginal;

}