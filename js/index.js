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
    const triggers = { trigger1: [".disbioso", ".disbiosis"], trigger2: [".obeso", ".obesidad"], trigger3: [".diabeto", ".diabetes"] };
    for (let trigger in triggers) {
        console.log(trigger)
        console.log(triggers[trigger])
        new ScrollMagic.Scene({
                triggerElement: "#" + trigger,
                triggerHook: 0.7, // show, when scrolled 10% into view
                // duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
                offset: 70 // move trigger to center of element
            })
            .setClassToggle(triggers[trigger].toString(), "visible") // add class to reveal
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }

    // build scenes
    var revealElements = document.getElementsByClassName("facts");
    console.log(revealElements)
    for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
        console.log(revealElements[i])
        new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50, // start a little later
                triggerHook: 0.9,
            })
            .setClassToggle(revealElements[i], "visible") // add class toggle
            .addIndicators({ name: "facts " + (i + 1) }) // add indicators (requires plugin)
            .addTo(controller);
    }

    // get all slides
    // var slides = document.querySelectorAll("section.panel");
    // // create scene for every slide
    // untriggers = ["70%", "100%", "100%", "1"];
    // for (var i = 0; i < slides.length; i++) {
    //     new ScrollMagic.Scene({
    //             triggerElement: slides[i],
    //             triggerHook: 'onLeave',
    //             duration: untriggers[i]
    //         })
    //         .setPin(slides[i], { pushFollowers: false })
    //         .addIndicators() // add indicators (requires plugin)
    //         .addTo(controller);
    // }



};