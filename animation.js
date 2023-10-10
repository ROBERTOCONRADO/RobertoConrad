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

//Animation Skills Delay
const skillElements = document.querySelectorAll('.skills__bar.skill-animate');
const baseDelay = 500; // 0,5 segundos
skillElements.forEach((element, index) => {
  const delay = baseDelay * index;
  element.classList.add('animated');
  element.style.animationDelay = `${delay}ms`;
});


