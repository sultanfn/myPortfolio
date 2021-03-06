//header 
new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

 
  // Delay Animation
  gsap.from(".banner",{ opacity: 0, duration: 1, delay: 1.5, x: -100});
  gsap.from(".myInfo h3", { opacity: 0, duration: 1, delay: 1.5, y: -50 });
  gsap.from(".myInfo h1", { opacity: 0, duration: 1, delay: 1.8, y: -40 });
  gsap.from(".myInfo h4", { opacity: 0, duration: 1, delay: 2, y: -30 });
  gsap.from(".my-btn",{ opacity: 0, duration: 1, delay: 2, x: -100});

  gsap.from(".nav-item", {
      opacity: 0,
      duration: 1,
      delay: 1.2,
      y: 30,
      stagger: .2,
  });
  gsap.from(".icons a", {
      opacity: 0,
      duration: 1,
      delay: 2,
      y: 30,
      stagger: .2,
  });

// About Me
new TypeIt("#type2", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

// AOS initialize
AOS.init();


$(document).ready(function () {
// Sticky menu
// $(".sticky-nav").waypoint(function(direction){
//   if(direction == "down"){
//     $("nav").addClass("show-nav");
//   }else{
//     $("nav").removeClass("show-nav");
//   }
// });

// Project
  var mixer = mixitup(".p-content");
});  
