const carrito = [
   {
   id: 198752,
   name: "Tinta DJ27 Color",
   price: 52.95,
   count: 3,
   premium: true
   },
   {
   id: 75621,
   name: "Impresora ticketera PRO-201",
   price: 32.75,
   count: 2,
   premium: true
   },
   {
   id: 54657,
   name: "Caja de rollos de papel para ticketera",
   price: 5.95,
   count: 3,
   premium: false
   },
   {
   id: 3143,
   name: "Caja de folios DIN-A4 80gr",
   price: 9.95,
   count: 2,
   premium: false
   }
];

let mostrarCarrito = () => {

   for(var index=0; index < carrito.length; index++){
      console.log("Producto nº" + (index + 1) +": ", carrito[index]);
   }

   mostrarHTML();
}

let borrarCarrito = () => {
   borrarProducto(54657); 
   mostrarHTML();
}

let calcularPrecio = () => {
   let total = 0;
   for(producto of carrito) {
      total = total + (producto.price*producto.count);
   }

   if(total > 50) {
      total = total * 0.95;
   }

   if(producto.premium) {
      console.log( "Gastos de envío cero");
   } else {
      console.log( "Con gastos de envío");   
   }

   console.log("El precio total es : ", total);
}

let calcularProductosPrime = () => {
   for(producto of carrito) {
      if(producto.premium) {
         console.log( "El producto " + producto.name + " es premium!");
      }
   }

   if(productosPrime()){
      console.log("Todos los productos son prime!");
   }
}

let mostrarHTML = () => {
   document.getElementById("carrito-compra").innerHTML = "<h1> Lista de la Compra </h1><br>";
   for(producto of carrito) {
      document.getElementById("carrito-compra").innerHTML += '<span class="producto">' + producto.name + 
                                                             '<span class="borrar" onclick="borrarProducto(' + producto.id + ')">X</span></span><br>'
   }
}

let borrarProducto = (i) => {
   for(var index=0; index < carrito.length; index++) {
      if(carrito[index].id == i) {
         carrito.splice(index,1);
      }
   }
   mostrarHTML();
}

let productosPrime = () => {
   
   for(producto of carrito) {
      if(!producto.premium) {
         return false;
      }
   }

   return true;
}