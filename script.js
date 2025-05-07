let indice = 0;
const imagenes = document.querySelectorAll('.carrusel-img');
const btnIzq = document.querySelector('.izquierda');
const btnDer = document.querySelector('.derecha');
let intervaloCarrusel;

function mostrarImagen(i) {
  imagenes.forEach(img => img.classList.remove('activa'));
  imagenes[i].classList.add('activa');
}

// Función para avanzar al siguiente slide
function avanzarSlide() {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen(indice);
}

// Iniciar carrusel automático
function iniciarCarruselAutomatico() {
  // Limpiar cualquier intervalo existente primero
  if (intervaloCarrusel) {
    clearInterval(intervaloCarrusel);
  }
  // Crear nuevo intervalo - cambia cada 2 segundos (2000ms)
  intervaloCarrusel = setInterval(avanzarSlide, 2000);
}

// Detener carrusel automático (para cuando el usuario hace clic en los botones)
function detenerCarruselAutomatico() {
  clearInterval(intervaloCarrusel);
}

// Reiniciar el carrusel automático después de interacción del usuario
function reiniciarCarruselAutomatico() {
  detenerCarruselAutomatico();
  // Esperar un poco antes de reiniciar para evitar conflictos
  setTimeout(iniciarCarruselAutomatico, 5000);
}

btnIzq.addEventListener('click', () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indice);
  reiniciarCarruselAutomatico();
});

btnDer.addEventListener('click', () => {
  avanzarSlide();
  reiniciarCarruselAutomatico();
});

// Iniciar el carrusel automático cuando carga la página
document.addEventListener('DOMContentLoaded', iniciarCarruselAutomatico);

// Modo oscuro / claro
const toggleBtn = document.getElementById('modo-toggle');
let modoOscuro = false;

toggleBtn.addEventListener('click', () => {
  modoOscuro = !modoOscuro;
  
  if (modoOscuro) {
    // Modo oscuro
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    
    // Cambiar color de texto en párrafos
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach(p => {
      p.style.color = 'white';
    });
    
    // Cambiar color del texto en otras secciones si es necesario
    const titulosSecciones = document.querySelectorAll('.primeraseccion .texto-intro h1');
    titulosSecciones.forEach(titulo => {
      titulo.style.color = 'rgb(9, 209, 219)'; // Mantener el color cyan
    });
    
  } else {
    // Modo claro
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    
    // Restaurar color de texto en párrafos
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach(p => {
      p.style.color = 'black';
    });
    
    // Restaurar color del texto en otras secciones si es necesario
    const titulosSecciones = document.querySelectorAll('.primeraseccion .texto-intro h1');
    titulosSecciones.forEach(titulo => {
      titulo.style.color = 'rgb(9, 209, 219)'; // Mantener el color cyan
    });
  }
});