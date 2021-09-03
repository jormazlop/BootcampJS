const product = { 
   count: Number, 
   price: Number, 
   type: String 
};

product.count = window.prompt('Introduzca la cantidad de producto');
product.price = window.prompt('Introduzca el precio del producto');
product.type = window.prompt('Introduzca el tipo de producto');

let precioTotal = product.count > 0 ? product.count * product.price : 0;

let iva = 0;

switch(product.type) {
   case 'alimentacion':
      iva = 0.1;
      break;
   case 'libro':
      iva = 0.04;
      break;
   default:
      iva = 0.21;
      break;
}

precioTotal = precioTotal + (precioTotal*iva);

console.log('Se aplica un iva del ' + (iva*100) + ' %');
console.log('El precio total es de ' + precioTotal + ' €');
