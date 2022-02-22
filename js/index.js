function resized() {
    target = document.getElementById("medidas");
    target.innerHTML = window.innerWidth;
}

window.addEventListener('resize', resized);

resized();