
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
let tl1 = gsap.timeline();
let tl2 = gsap.timeline(
    {   
        scrollTrigger: {
          trigger: ".header",
          scrub: false, 
          start: "top center",
          end: "top 3OOpx"
        }
      }
);

let tl3 = gsap.timeline(
    {   
        scrollTrigger: {
          trigger: "#decor",
          scrub: 1, 
          start: "top center",
          end: "top 100px"
        }
      }
);

let tl3a = gsap.timeline(
  {   
      scrollTrigger: {
        trigger: "#imgAnimated3",
        scrub: 1, 
        start: "top center",
        end: "top 100px"
      }
    }
);

let tl3b = gsap.timeline(
  {   
      scrollTrigger: {
        trigger: "#imgAnimated3",
        scrub: 1, 
        start: "top center",
        end: "top 100px"
      }
    }
);

let tl3c = gsap.timeline(
  {   
      scrollTrigger: {
        trigger: "#decor",
        scrub: 1, 
        start: "top center",
        end: "top 100px"
      }
    }
);

let tl3d = gsap.timeline(
  {   
      scrollTrigger: {
        trigger: "#decor",
        scrub: 1, 
        start: "top center",
        end: "top 100px"
      }
    }
);

let tl4 = gsap.timeline(
    {   
        scrollTrigger: {
          trigger: "#hand",
          scrub: 1, 
          start: "top center",
          end: "top 100px"
        }
      }
);

let tl5 = gsap.timeline(
    {   
        scrollTrigger: {
          trigger: "#isaiah",
          scrub: 1, 
          start: "top center",
          end: "top 100px"
        }
      }
);

let tl6 = gsap.timeline(
  {   
      scrollTrigger: {
        trigger: "#martin",
        scrub: true, 
        start: "top center",
        end: "top 100px"
      }
    }
);


tl1.from(".logo",{duration: 1.5, opacity: 0})
  .from("#motto", {duration: 1, opacity: 0, x:-150})


tl2.from(".header", {duration: 1, opacity: 0, y: 150})
    .from("#feature1", {duration: 0.7, opacity: 0, x: 150})
    .from("#feature2", {duration: 0.7, opacity: 0, x: 150})
    .from("#feature3", {duration: 0.7, opacity: 0, x: 150})


  tl3.from('.decor',{duration: 1, opacity: 0, x: -150 })
  tl3a.from('#imgAnimated2',{duration: 1, opacity: 0, x: -100})
  tl3b.from('#imgAnimated3',{duration: 1, opacity: 0, x: 100})
  tl3c.from('#imgAnimated1',{duration: 1, opacity: 0, y: -100})
  tl3d.from('#imgAnimated4',{duration: 1, opacity: 0, y: 100})


  tl4.from("#hand", {duration: 5, opacity: 0, x: 150})
    .from("#vertical-txt",{duration: 5, opacity: 0})

  tl5.from("#isaiah", {duration: 1, opacity: 0, y: 50})
  tl6.from("#martin", {duration: 1, opacity: 0, x: 50})
      
      


