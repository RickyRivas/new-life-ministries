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
/* fixed button Script */
document.querySelector('video').playbackRate = 1;
// // Set a variable for our button element.
// const scrollToTopButton = document.getElementById("js-top");

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);
// Scroll Nav 

window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  const logop = document.querySelector('#logo-p');
  if (this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
  if(this.scrollY <= 10) logop.className = ''; else logop.className = 'scroll-p';
};