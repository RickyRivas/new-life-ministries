// Nav
const burger = document.querySelector(".hamburger");
 const nav = document.querySelector(".nav-links");

 burger.addEventListener('click', () => {
   burger.classList.toggle('is-active');
   nav.classList.toggle('is-active');
 })

 document.querySelector('video').playbackRate = 1;
 const scrollToTopButton = document.querySelector("#js-top");
// 
 const scrollFunc = () => {
   let y = window.scrollY;
   if (y > 0) {
     scrollToTopButton.className = "bottom-fixed show";
   } else {
     scrollToTopButton.className = "bottom-fixed hide";
   }
 };
window.addEventListener("scroll", scrollFunc); 
//modal 
const videoModal = document.querySelector('#video-modal');
const triggers = document.querySelectorAll('.vid-trigger');
const modalClose = document.querySelector('#close');
const currentVideoBox = document.querySelector('.current-video');
const videoDonateBtn = document.querySelector('.video-donate');

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    videoModal.style.display = 'flex';
    currentVideoBox.style.display = 'block'
    body.classList.toggle('body-fixed');
    currentVideoBox.src = trigger.getAttribute('data-video');
    currentVideoBox.play();
})
})
// close video
modalClose.addEventListener('click', () => {
  videoModal.style.display = 'none';
  currentVideoBox.style.display = 'none'
  body.classList.toggle('body-fixed');
  currentVideoBox.pause();
})