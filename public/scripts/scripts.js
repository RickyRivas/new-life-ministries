 const burger = document.querySelector(".hamburger");
 const nav = document.querySelector(".nav-links");

 burger.addEventListener('click', () => {
   burger.classList.toggle('is-active');
   nav.classList.toggle('is-active');
 })

 document.querySelector('video').playbackRate = 1;
 const scrollToTopButton = document.querySelector("#js-top");

 const scrollFunc = () => {
   let y = window.scrollY;
   if (y > 0) {
     scrollToTopButton.className = "bottom-fixed show";
   } else {
     scrollToTopButton.className = "bottom-fixed hide";
   }
 };

 window.addEventListener("scroll", scrollFunc);