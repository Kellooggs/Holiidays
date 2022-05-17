const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  treshold: 1,
};

//Observer pour le scroll
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

//Pour le fading
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

//Pour le slide
sliders.forEach((slide) => {
  appearOnScroll.observe(slide);
});

/*SCROLL TRANSPARENT NAV BAR*/
const items = document.querySelectorAll(".nav-item");

window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 80) {
      document.querySelector(".navigation").classList.add("nav-colored");
      items.forEach((items) => {
        items.classList.add("nav-item-colored");
      });
    } else {
      document.querySelector(".navigation").classList.remove("nav-colored");
      items.forEach((items) => {
        items.classList.remove("nav-item-colored");
      });
    }
  });
};
