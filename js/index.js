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
window.onload = function() {
    window.addEventListener('resize', resized);
    resized();

    // init controller
    var controller = new ScrollMagic.Controller();

    // build scene
    new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            triggerHook: 0.6, // show, when scrolled 10% into view
            // duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 70 // move trigger to center of element
        })
        .setClassToggle("#reveal1", "visible") // add class to reveal
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

};