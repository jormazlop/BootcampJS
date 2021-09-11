// Se inicializa el carrito en base a la variable 'productos'.
let getCarrito = () => {

   let main = document.getElementById("main");
   let precios = document.getElementById("precios");
   let indice = 0;

   for(producto of products) {

      let productRow = document.createElement("div");
      productRow.setAttribute("class", "product-row");

      let productoNumber = document.createElement("div");
      productoNumber.innerText = ++indice + ".";
      productRow.appendChild(productoNumber);
 
      let productName = document.createElement("div");
      productName.setAttribute("class", "product-description");
      // Se le añade un pequeño tooltip para indicar el stock restante de cada producto.
      productName.setAttribute("data-toggle", "tooltip");
      productName.setAttribute("title", "El stock de este producto es " + producto.stock);
      productName.innerText = producto.description + " - " + producto.price + "€";
      productRow.appendChild(productName);
      
      let precio = document.createElement("input");

      precio.setAttribute("class", "product-units");
      precio.setAttribute("id", producto.description);
      precio.setAttribute("type", "number");
      precio.setAttribute("value", producto.units);
      productRow.appendChild(precio);

      main.appendChild(productRow);

   }

   // Solo se crea el botón si existen productos.
   if(indice > 0) {
      let buttonCalcular = document.createElement("button");
      buttonCalcular.setAttribute("class", "calcular-button");
      buttonCalcular.setAttribute("id", "calcular-button");
      buttonCalcular.setAttribute("onclick", "calculatePrice()");
      buttonCalcular.innerText = 'Calcular';
      main.appendChild(buttonCalcular);
   }

}

// Funcion que calcula el contenedor de precios del resultado.
let calculatePrice = () => {

   document.getElementById("precios").innerHTML = "";
  
   let precioSubTotal = document.createElement("h2");

   precioSubTotal.innerText = "Subtotal " + calcularTotal() + "€";

   precios.appendChild(precioSubTotal);

   let impuestosTotal = document.createElement("h2");

   impuestosTotal.innerText = "IVA " + calcularImpuestos() + "€";

   precios.appendChild(impuestosTotal);

   let precioFinal = document.createElement("h2");

   precioFinal.innerText = "TOTAL " + (calcularTotal() + calcularImpuestos()) + "€";

   precios.appendChild(precioFinal);

}

// Funcion que calcula el precio total sin impuestos.
let calcularTotal = () => {

   let total = 0;

   for(producto of products) {

      let units = document.getElementById(producto.description).value;
      total += (units * producto.price);

   }   

   return total;
}

// Funcion que calcula los impuestos totales.
let calcularImpuestos = () => {

   let impuestos = 0;

   for(producto of products) {

      let units = document.getElementById(producto.description).value;
      impuestos += (units * producto.price) * (producto.tax/100);

   }  

   return impuestos;

}

// Si el usuario no ha elegido al menos 1 unidad de algún producto (El precio total es 0),
// no se muestra ni el boton ni la seccion de precios
let buttonCheck = () => {

   if(calcularTotal() < 0) {
      document.getElementById("mensaje").innerHTML = "No se pueden seleccionar unidades negativas!";
      document.getElementById("calcular-button").style = "display:none";
      document.getElementById("precios").style = "display:none";

   } else {
      document.getElementById("mensaje").innerHTML = ""
      document.getElementById("calcular-button").style = calcularTotal() != 0 ? "": "display:none";
      document.getElementById("precios").style = calcularTotal() != 0 ? "": "display:none";
   }

}

// Se inicializa el carrito y el boton
getCarrito();
buttonCheck();

let buttonCalcular = document.getElementById("calcular-button");
main.addEventListener("change", event => buttonCheck());
