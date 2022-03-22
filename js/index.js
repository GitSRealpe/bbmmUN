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
// window.onload = function() {
window.addEventListener('resize', resized);
resized();
// init controller
var controller = new ScrollMagic.Controller();
const triggers = { trigger1: ["#disbioso.dibujo", ".disbiosis", "#inicio.titulo"], trigger2: ["#obeso.dibujo", ".obesidad", "#obesidadT.titulo"], trigger3: ["#diabeto.dibujo", ".diabetes", "#diabetesT.titulo"], trigger4: ["#insulino.dibujo"], trigger5: ["#pancreas.dibujo"] };
for (let trigger in triggers) {
    // console.log(trigger)
    // console.log(triggers[trigger])
    new ScrollMagic.Scene({
            triggerElement: "#" + trigger,
            triggerHook: 0.7, // show, when scrolled 10% into view
            // duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 0 // move trigger to center of element
        })
        .setClassToggle(triggers[trigger].toString(), "visible") // add class to reveal
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
}

var tween;
var dropElements = document.getElementsByClassName("drop");
for (let i = 0; i < dropElements.length; i++) {
    console.log("#dropTrigger" + i)
    tween = gsap.fromTo(dropElements[i], { autoAlpha: 0, y: -70, delay: .5 }, { autoAlpha: 1, duration: .5, y: 0, ease: "back.out(2)" });
    new ScrollMagic.Scene({
            triggerElement: "#dropTrigger" + i,
            triggerHook: 0.7,
            offset: 0
        })
        .setTween(tween)
        // .addIndicators()
        .addTo(controller);

}
// var tween = gsap.fromTo('#test', { autoAlpha: 0, y: -150 }, { autoAlpha: 1, duration: .5, y: 0, ease: "bounce.out", delay: 0 });

// build scenes
var revealElements = document.getElementsByClassName("facts");
// console.log(revealElements)
for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
    // console.log(revealElements[i])
    new ScrollMagic.Scene({
            triggerElement: revealElements[i],
            offset: 20, // start a little later
            triggerHook: 0.9,
        })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        // .addIndicators({ name: "facts " + (i + 1) })
        .addTo(controller);
}