window.onload = function() {
    Particles.init({
      selector: '.background',
      maxParticles: 110,
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
                    50
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
                    40
            ,
            connectParticles: 
                true
            ,    
        }
    }, {
        breakpoint: 
            320
        ,
        options: {
            maxParticles: 
                10
            ,
            connectParticles:
                true
            ,    
            minDistance:
                280            
 
        // disables particles.js
      }
    }
  ]
});
}


