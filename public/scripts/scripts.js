// Mobile Nav JS

const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("is-active");
    //Animate Links

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .1s ease-in forwards`;
      }
    });
    //burger animation
    burger.classList.toggle("is-active");
  });
};
navSlide();

// Video Speed Javascript

document.querySelector('video').playbackRate = 1;

const scrollFunc = () => {
  let y = window.scrollY;

};

// JS for Scroll Function

window.addEventListener("scroll", scrollFunc);

window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  const logop = document.querySelector('#logo-p');
  if (this.scrollY <= 10) nav.className = '';
  else nav.className = 'scroll';
  if (this.scrollY <= 10) logop.className = '';
  else logop.className = 'scroll-p';
};

// JS for reverse navSlide for when user clicks on nav link item to redirect to section on same page and automatically closes the 
// nav for them

const reverseSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
    //Toggle Nav
    nav.classList.toggle("is-active");
    //Animate Links

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .1s ease-in forwards`;
      }
    });
    //burger animation
    burger.classList.toggle("is-active");


};

const navLink2 = document.querySelector('.nav-links');
navLink2.addEventListener("click", reverseSlide);