let aspiraImagen = () => {

   let index = 1; 

   for(img of document.getElementsByTagName('img')) {
      console.log("El src de la imagen " + index + " es : " + img.src);
      index++;
   }

}