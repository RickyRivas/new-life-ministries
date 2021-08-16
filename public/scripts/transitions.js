var tl = gsap.timeline();

tl.to('ul.transition li', {
    duration: .5,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: .2
});

tl.to('ul.transition li', {
    duration: .5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: .1,
    delay: .1
})

tl.from('.anim1', {
    opacity: 0,
    duration: 1,
    y: -50,
    stagger: .6
})