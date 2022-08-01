gsap.registerPlugin(ScrollTrigger);

// var appContainer = $('.approach');
// var boxes = $('.dp-1');

// gsap.from(boxes,{
//     scrollTrigger: {
//         trigger:".dp-1",
//         end:"bottom+=800",
//         start:"top center",
//         // markers: true,
//     },
//     x: 100,
//     stagger: 0.2,
//     duration: 2,
//     ease: "circ.out",

// })

// gsap.to(boxes, {
//     x: () => { return -(appContainer[0].scrollWidth - document.documentElement.clientWidth) + "px" },
//     ease: "circ.out",

//     scrollTrigger: {
//       trigger: boxes,
//       start: () => "center center",
//       end: () => { return "+=" + appContainer[0].scrollWidth },
//       scrub: 1,
//       pin: '.approach',
//       anticipatePin: 1,    
//     }
  
//   });
let appContainer = document.getElementsByClassName('approach')
let contain = document.getElementsByClassName('approach-header')




gsap.to(contain, {
    duration: 8,
    scrollTrigger: {
        trigger:".approach",
        start: "top center",
        // end: "top +=-30%",
        scrub: 4,
        toggleActions: "restart none none none", 
        pin: contain,
        pinSpacing: true,
    // play pause resume reverse restart reset complete none  
                //  onEnter onLeave onEnterBack onLeaveBack
        end: () => `+=${document.querySelector(".approach").offsetHeight}`,
        // markers: true,
    }
});



