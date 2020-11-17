// Window match media
let picture = document.getElementById("founder2");
let parent = document.getElementById("martin");
let mediaResize = window.matchMedia("(max-width: 767px)")

function moveImg () {
    if (mediaResize.matches) {
        parent.prepend(picture);
      } else {
          parent.appendChild(picture);
      }
}

moveImg(mediaResize);
mediaResize.addListener(moveImg)


// Animations
let tl = gsap.timeline();

tl.from("#hand", {duration: 1, opacity: 0, x: 150, stagger: 0.3})
tl.from("#herb", {duration: 2, opacity: 0, y: 150, stagger: 0.3})