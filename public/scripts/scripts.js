// Nav
// const burger = document.querySelector(".hamburger");
//  const nav = document.querySelector(".nav-links");

//  burger.addEventListener('click', () => {
//    burger.classList.toggle('is-active');
//    nav.classList.toggle('is-active');
//  })

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

// donate
const popupOverlay = document.querySelector('.donate-popup-overlay');
const closePopup = document.querySelector('.close-popup');
const popupTrigger = document.querySelector('.popup-btn');
const body = document.querySelector('body');
popupTrigger.addEventListener('click', () => {
  popupOverlay.style.display = 'flex';
  // body.classList.toggle('body-fixed');
})
closePopup.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
  // body.classList.toggle('body-fixed');
})

// video
const videoModal = document.querySelector('#video-modal');
const triggers = document.querySelectorAll('.vid-trigger');
const modalClose = document.querySelector('#close');
const currentVideoBox = document.querySelector('.current-video');
const videoDonateBtn = document.querySelector('.video-donate');

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    videoModal.style.display = 'flex';
    currentVideoBox.style.display = 'block'
    // body.classList.toggle('body-fixed');
    currentVideoBox.src = trigger.getAttribute('data-video');
    currentVideoBox.play();
})
})
// close video
modalClose.addEventListener('click', () => {
  videoModal.style.display = 'none';
  currentVideoBox.style.display = 'none'
  // body.classList.toggle('body-fixed');
  currentVideoBox.pause();
})

// add all the elements inside modal which you want to make focusable
const  focusableElements =
    "button#donate-btn, input[type='number']";
const modal = document.querySelector('#main-modal'); // select the modal by it's id

const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();