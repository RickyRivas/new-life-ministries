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

// JS for Scroll Function
const scrollToTopButton = document.querySelector("#js-top");

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 0) {
    scrollToTopButton.className = "bottom-fixed show";
  } else {
    scrollToTopButton.className = "bottom-fixed hide";
  }
};

window.addEventListener("scroll", scrollFunc);

// removed temp

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