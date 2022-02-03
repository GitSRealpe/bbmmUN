$(document).ready(function(){
// init controller
var controller = new ScrollMagic.Controller();



// create a scene

var scene = new ScrollMagic.Scene({
    triggerElement:'.u-section-2',
    reverse:false
})
.setClassToggle(".u-section-2", "zapSize")
    .addTo(controller); // assign the scene to the controller
    

// create a scene
var scene1 = new ScrollMagic.Scene({
    triggerElement:'.u-section-3',
    reverse:false
})
.setClassToggle(".u-section-3", "zap")
    .addTo(controller); // assign the scene to the controller

    controller.addScene([
        scene,
        scene1
        
      ]);

      

});