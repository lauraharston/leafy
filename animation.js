// Window match media
let picture = document.getElementById("founder2");
let parent = document.getElementById("martin");
let mediaResize = window.matchMedia("(max-width: 992px)");


function moveImg () {
    if (mediaResize.matches) {
        parent.prepend(picture);
    } else {
        parent.appendChild(picture);
    }
}

moveImg(mediaResize);
mediaResize.addListener(moveImg);



// Animations


let tl = gsap.timeline();
tl.from(".logo",{duration: 2, opacity: 0})
tl.from("#motto", {duration: 0.5, opacity: 0, x:-150})
tl.from(".header", {duration: 1, opacity: 0, y: 150})
tl.from("#feature1", {duration: 0.8, opacity: 0, x: 150})
tl.from("#feature2", {duration: 0.8, opacity: 0, x: 150})
tl.from("#feature3", {duration: 0.8, opacity: 0, x: 150})
tl.from('#decor', {duration: 1, opacity: 0})
tl.from('.decor',{duration: 1, opacity: 0, x: -150 })
tl.from('.animated-col',{duration: 1, opacity: 0, y: 150})
tl.from("#hand", {duration: 1, opacity: 0, x: 150})
tl.from("#herb", {duration: 2, opacity: 0, y: 150})
tl.from("#vertical-txt",{duration: 1, opacity: 0})
tl.from("#isaiah", {duration: 1, opacity: 0, y: 150})
tl.from("#martin", {duration: 1, opacity: 0, x: 150})


