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

    // // init controller
    var controller = new ScrollMagic.Controller();

    // // build scene
    new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            triggerHook: 0.6, // show, when scrolled 10% into view
            // duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
            offset: 70 // move trigger to center of element
        })
        .setClassToggle("#reveal1", "visible") // add class to reveal
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    // init
    // var controller = new ScrollMagic.Controller({
    //     globalSceneOptions: {
    //         triggerHook: 'onLeave',
    //         duration: "100%" // this works just fine with duration 0 as well
    //             // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
    //             // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    //     }
    // });

    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    // hacer lista de triggers para cada row con diferentes durations=tamaño
    for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i],
                triggerHook: 'onLeave',
                duration: "100%"
            })
            .setPin(slides[i], { pushFollowers: false })
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }



};