let projeto1 = document.querySelector(".projeto1");
let projeto2 = document.querySelector(".projeto2");
let projeto3 = document.querySelector(".projeto3");
let projeto4 = document.querySelector(".projeto4");
let projeto5 = document.querySelector(".projeto5");
let projeto6 = document.querySelector(".projeto6");
let projeto7 = document.querySelector(".projeto7");
let projeto8 = document.querySelector(".projeto8");
let projeto9 = document.querySelector(".projeto9");
let projeto10 = document.querySelector(".projeto10");
let projeto11 = document.querySelector(".projeto11");
let projeto12 = document.querySelector(".projeto12");
let projeto13 = document.querySelector(".projeto13");
let projeto14 = document.querySelector(".projeto14");
// projeto1
projeto1.addEventListener("mouseover", function() {
  projeto2.style.display = "none";
  document.querySelector(".right1").style.display = "block";
  projeto1.addEventListener("mouseout", function() {
    document.querySelector(".right1").style.display = "none";
    projeto2.style.display = "block";
    projeto2.classList.add('opacity');
  })
});
// projeto2
projeto2.addEventListener("mouseover", function() {
  projeto1.style.display = "none";
  document.querySelector(".left1").style.display = "block";
  projeto2.addEventListener("mouseout", function() {
    document.querySelector(".left1").style.display = "none";
    projeto1.style.display = "block";
    projeto1.classList.add('opacity');
  })
});
// . . . 
projeto3.addEventListener("mouseover", function() {
  projeto4.style.display = "none";
  document.querySelector(".right2").style.display = "block";
  projeto3.addEventListener("mouseout", function() {
    document.querySelector(".right2").style.display = "none";
    projeto4.style.display = "block";
    projeto4.classList.add('opacity');
  })
});
projeto4.addEventListener("mouseover", function() {
  projeto3.style.display = "none";
  document.querySelector(".left2").style.display = "block";
  projeto4.addEventListener("mouseout", function() {
    document.querySelector(".left2").style.display = "none";
    projeto3.style.display = "block";
    projeto3.classList.add('opacity');
  })
});

projeto5.addEventListener("mouseover", function() {
  projeto6.style.display = "none";
  document.querySelector(".right3").style.display = "block";
  projeto5.addEventListener("mouseout", function() {
    document.querySelector(".right3").style.display = "none";
    projeto6.style.display = "block";
    projeto6.classList.add('opacity');
  })
});
projeto6.addEventListener("mouseover", function() {
  projeto5.style.display = "none";
  document.querySelector(".left3").style.display = "block";
  projeto6.addEventListener("mouseout", function() {
    document.querySelector(".left3").style.display = "none";
    projeto5.style.display = "block";
    projeto5.classList.add('opacity');
  })
});

projeto7.addEventListener("mouseover", function() {
  projeto8.style.display = "none";
  document.querySelector(".right4").style.display = "block";
  projeto7.addEventListener("mouseout", function() {
    document.querySelector(".right4").style.display = "none";
    projeto8.style.display = "block";
    projeto8.classList.add('opacity');
  })
});
projeto8.addEventListener("mouseover", function() {
  projeto7.style.display = "none";
  document.querySelector(".left4").style.display = "block";
  projeto8.addEventListener("mouseout", function() {
    document.querySelector(".left4").style.display = "none";
    projeto7.style.display = "block";
    projeto7.classList.add('opacity');
  })
});

projeto9.addEventListener("mouseover", function() {
  projeto10.style.display = "none";
  document.querySelector(".right5").style.display = "block";
  projeto9.addEventListener("mouseout", function() {
    document.querySelector(".right5").style.display = "none";
    projeto10.style.display = "block";
    projeto10.classList.add('opacity');
  })
});
projeto10.addEventListener("mouseover", function() {
  projeto9.style.display = "none";
  document.querySelector(".left5").style.display = "block";
  projeto10.addEventListener("mouseout", function() {
    document.querySelector(".left5").style.display = "none";
    projeto9.style.display = "block";
    projeto9.classList.add('opacity');
  })
});

projeto11.addEventListener("mouseover", function() {
  projeto12.style.display = "none";
  document.querySelector(".right6").style.display = "block";
  projeto11.addEventListener("mouseout", function() {
    document.querySelector(".right6").style.display = "none";
    projeto12.style.display = "block";
    projeto12.classList.add('opacity');
  })
});
projeto12.addEventListener("mouseover", function() {
  projeto11.style.display = "none";
  document.querySelector(".left6").style.display = "block";
  projeto12.addEventListener("mouseout", function() {
    document.querySelector(".left6").style.display = "none";
    projeto11.style.display = "block";
    projeto11.classList.add('opacity');
  })
});

projeto13.addEventListener("mouseover", function() {
  projeto14.style.display = "none";
  document.querySelector(".right7").style.display = "block";
  projeto13.addEventListener("mouseout", function() {
    document.querySelector(".right7").style.display = "none";
    projeto14.style.display = "block";
    projeto14.classList.add('opacity');
  })
});
projeto14.addEventListener("mouseover", function() {
  projeto13.style.display = "none";
  document.querySelector(".left7").style.display = "block";
  projeto14.addEventListener("mouseout", function() {
    document.querySelector(".left7").style.display = "none";
    projeto13.style.display = "block";
    projeto13.classList.add('opacity');
  })
});

