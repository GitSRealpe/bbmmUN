function resized() {
    target = document.getElementById("medidas");
    ancho = window.innerWidth
    if (ancho > 1400) {
        target.innerHTML = window.innerWidth + " xxl ";
    }
    if (ancho < 1400 && ancho > 1200) {
        target.innerHTML = window.innerWidth + " xl ";
    }
    if (ancho < 1200 && ancho > 992) {
        target.innerHTML = window.innerWidth + " lg ";
    }
    if (ancho < 992 && ancho > 768) {
        target.innerHTML = window.innerWidth + " md ";
    }
    if (ancho < 768 && ancho > 576) {
        target.innerHTML = window.innerWidth + " sm ";
    }
    if (ancho < 576) {
        target.innerHTML = window.innerWidth + " xs ";
    }

}

window.addEventListener('resize', resized);

resized();