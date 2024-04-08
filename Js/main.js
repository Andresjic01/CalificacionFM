var botones = document.querySelectorAll('.options');
var submit = document.getElementById('home');
var number = document.getElementById('number');
var thanks = document.getElementById('gratulation');

var valor;
    
botones.forEach(function(boton) {
    boton.addEventListener('click', function() {
          // Remover la clase 'boton-seleccionado' de todos los botones
        botones.forEach(function(b) {
        b.classList.remove('boton-seleccionado');
        });
          // Agregar la clase 'boton-seleccionado' solo al botón clickeado
          boton.classList.add('boton-seleccionado');
          valor = boton.value;
          
    });
});

function submits() {
    console.log(valor)
    if (valor !== undefined) { // Usar !== para comprobar si valor no es null
        submit.classList.add('homedelete');
        thanks.classList.remove('homedelete')
        number.innerText = (valor)

    } else {
        submit.classList.remove('homedelete');
    }
}



    