





gsap.registerPlugin(ScrollTrigger);

let textAnim = document.querySelectorAll("h1")
let textAnimInner = document.getElementsByClassName("text")
let textAnimInner2 = document.getElementsByClassName("text2")
let textAnimInner3 = document.getElementsByClassName("text3")
let textAnimInner4 = document.getElementsByClassName("text4")
let textAnimInner5 = document.getElementsByClassName("text5")
let textAnimInner6 = document.getElementsByClassName("text6")


// let imgParralex1 = document.querySelector('.img1')
// console.log(imgParralex1)

// // data speed is a class you add to the HTML element.
// document.addEventListener("mousemove", parallax);
// function parallax(e){

//     const speed = imgParralex1.getAttribute('data-speed')

//     const x = (window.innerWidth - e.pageX*speed)/200
//     const y = (window.innerHeight - e.pageY*speed)/200

//     imgParralex1.style.transform = `translateX(${x}px) translateY(${y}px)`

// }




//custom cursor 
const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY -60)+"px; left: "+(e.pageX -60)+"px;" )
})
document.addEventListener('click', e => {
    cursor.classList.add("expand");

    setTimeout(() =>{
        cursor.classList.remove("expand");
    }, 500)
})

// // This code uses the sction element(pinned) Then the container
// // of the horizontal scroll doc.
// var appContainer = $('.wwc');
// var boxes = $('.boxes_holder');



// ///creates an animation with no duration
// gsap.set()

// //gsap timeline
// gsap.timeline()
//     .from("",{})
//     .from("",{})







// const section = document.getElementById("f-p")
// const options = { };
// const observer = new IntersectionObserver(function(entries, observer){
//     entries.forEach(entry => {
//         console.log(entry);
//     })
// } , options);

// observer.observe(section)




// /// Website color mode
// let isBlack = true


// /// Website Color mode
// function lightMode() {
//     if (isBlack === true) {
//         otherColors.style.background = "#252525"
//         container.style.background = "#8a8888"
//         container.style.color = "white"
//         isBlack = false
//     }else if(isBlack === false){
//         otherColors.style.background = "#8a8888"
//         container.style.background = "#252525"
//         container.style.color = "white"
//         isBlack = true
//     }

// }

let tl = gsap.timeline()

///gsap variables
let otherColors = document.getElementById('nav_links')
let container = document.getElementById('main')
let bigSpan = document.getElementsByClassName('scroll-down');
let bigHeader = document.getElementsByClassName('span-text');
let wordHeader = document.getElementsByClassName('lerp-wrap');
let alignText = document.getElementsByClassName('align-left');
let textContainer = document.getElementsByClassName('landing-main-container');
let naV = document.getElementsByClassName('nav');
let naVigation = document.querySelector('.nav-igation');



//scrollTrigger scrub working



gsap.to(bigHeader, {
    scrollTrigger: {
        end:"bottom+=200%",
        start:"top top",
        toggleActions: "play restart reverse reverse",
    },
    stagger: -0.08,
    opacity : 0, 
    duration: .5, 
    y: 200,
    rotate: 35, 
    ease: "power3.out",}
    );

// gsap.from(appContainer, {
//     opacity : 0.5, 
//     duration: .5, 
//     x: 200, 
//     ease: "power3.out",}
//     );


//gsap timeline
tl  .from( naV,{y:-100, opacity:0, duration: 2, ease: "expo.out",})
    .from( bigHeader, {stagger: -0.08, opacity : 0, duration: .5, y: 500, rotate: 35, ease: "expo.out", })
    .from( naVigation,{y:120, opacity:0, duration: 0.5, ease: "expo.out", });

// tl.from(appContainer,{
//     scrollTrigger: {
//         trigger: ".approach-container",
//         end: "bottom top",
//         start: "top top",
//         markers: true,
//     },
//     x:200,  });


gsap.from(textAnimInner,{
    scrollTrigger: {
        trigger: '.text',
        end:"bottom+=800",
        start:"top bottom",
        toggleActions: "play restart none reset",

        // markers: true,
    },
    y: 200,
    stagger: 0.08,
    duration: .5,
    ease: "circ.out",

})
gsap.from(textAnimInner2,{
    scrollTrigger: {
        trigger: '.text2',
        end:"bottom+=800",
        start:"top bottom",
        toggleActions: "play restart none reset",

        // markers: true,
    },
    y: 200,
    stagger: 0.08,
    duration: .5,
    ease: "circ.out",

})
gsap.from(textAnimInner3,{
    scrollTrigger: {
        trigger: '.text3',
        end:"bottom+=800",
        start:"top bottom",
        toggleActions: "play restart none reset",

        // markers: true,
    },
    y: 200,
    stagger: 0.08,
    duration: .5,
    ease: "circ.out",

})
gsap.from(textAnimInner4,{
    scrollTrigger: {
        trigger: '.text4',
        end:"bottom+=800",
        start:"top bottom",
        toggleActions: "play restart none reset",

        // markers: true,
    },
    y: 200,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    ease: "circ.out",

})
gsap.from(textAnimInner5,{
    scrollTrigger: {
        trigger: '.text5',
        end:"bottom+=800",
        start:"top bottom",
        toggleActions: "play restart none reset",

        // markers: true,
    },
    y: 200,
    stagger: 0.08,
    duration: .5,
    ease: "circ.out",

})
gsap.from(textAnimInner6,{
    scrollTrigger: {
        trigger: '.text6',
        end:"bottom+=800",
        start:"top bottom",
        toggleActions: "play restart none reset",

        // markers: true,
    },
    y: 200,
    stagger: 0.08,
    duration: .5,
    ease: "circ.out",

})





