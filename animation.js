// Window match media
let picture = document.getElementById("founder2");
let parent = document.getElementById("martin");
let mediaResize = window.matchMedia("(max-width: 812px)");
let introduction= document.getElementById("introduction");
let pinkPicture = document.getElementById("pink");
let mediaIntro = window.matchMedia("(max-width: 415px)");

function moveImg () {
    if (mediaResize.matches) {
        parent.prepend(picture);
    } else {
        parent.appendChild(picture);
    }
}

moveImg(mediaResize);
mediaResize.addListener(moveImg);

function moveTextBlock () {
    if(mediaIntro.matches) {
        pinkPicture.remove();
    } 
}

moveTextBlock (mediaIntro); 
mediaIntro.addListener(moveTextBlock);
// Animations
let tl = gsap.timeline();

tl.from("#hand", {duration: 1, opacity: 0, x: 150, stagger: 0.3})
tl.from("#herb", {duration: 2, opacity: 0, y: 150, stagger: 0.3})