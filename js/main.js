var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(-" + slideIndex + "00%)";
  }
}

function nextSlide() {
  var slides = document.getElementsByClassName("slide");
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
}

function prevSlide() {
  var slides = document.getElementsByClassName("slide");
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
}

var nextBtn = document.getElementsByClassName("nextBtn")[0];
var prevBtn = document.getElementsByClassName("prevBtn")[0];

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);






/* ===================================sticky nabvar===================== */
let menuIcon = document.querySelector('#menu-icon');
let nabvar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  nabvar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            });
        };
    });


    /* ===================================sticky nabvar===================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ===================================remove toggle icon navbar when===================== */
    menuIcon.classList.remove('bx-x');
    nabvar.classList.remove('active');
    
};


/* ===================================scroll reveal===================== */
ScrollReveal({
     //reset: true ,
     distance: '80px',
     duration: 200,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });



    /* ===================================typed js===================== */

    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Game Developer', 'App Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
});




























