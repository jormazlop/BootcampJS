var nombre = prompt('Introduzca nombre del hotel (Barcelo/Silken)');

var lugar = prompt('Introduzca localizacion del hotel');

var puntuacion = prompt('¿Como valora el hotel? (De 1 a 5)');

var anonima = confirm('Es una reseña anonima?');

var stars = {
   1: "<span>&starf;</span><span>&star;</span><span>&star;</span><span>&star;</span><span>&star;</span>",
   2: "<span>&starf;</span><span>&starf;</span><span>&star;</span><span>&star;</span><span>&star;</span>",
   3: "<span>&starf;</span><span>&starf;</span><span>&starf;</span><span>&star;</span><span>&star;</span>",
   4: "<span>&starf;</span><span>&starf;</span><span>&starf;</span><span>&starf;</span><span>&star;</span>",  
   5: "<span>&starf;</span><span>&starf;</span><span>&starf;</span><span>&starf;</span><span>&starf;</span>",  
}

document.getElementById('hotel-name').innerHTML = "Hotel " + nombre;

document.getElementById('hotel-location').innerHTML = "Ubicado en " + lugar;

document.getElementById('hotel-img').src = "./img/" + nombre + ".jpg";

document.getElementById('stars').innerHTML = stars[puntuacion];

document.getElementById('reseña').checked = anonima;