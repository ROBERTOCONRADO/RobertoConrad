window.onload = function() {
    Particles.init({
      selector: '.background',
      maxParticles: 150,
      sizeVariations: 5,
      speed: 0.5,
      minDistance: 120,
      connectParticles: true,
      
        // options for breakpoints
        responsive: [
            {
            breakpoint: 
                768
            ,
            options: {
                maxParticles: 
                    120
                ,
                color: 
                    'rgb(97, 0, 0);'
                ,
                connectParticles: 
                    true
            }
        }, {
            breakpoint: 
                425
            ,
            options: {
                maxParticles: 
                    100
            ,
            connectParticles: 
                true
        }
    }, {
        breakpoint: 
            320
        ,
        options: {
            maxParticles: 
                60
            ,
            connectParticles:
                true    
 
        // disables particles.js
      }
    }
  ]
});
    
}