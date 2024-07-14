// gsap.from(".header", { y: '-100%', ease: "bounce", duration: 1 });
// gsap.from(".logo", { opacity: 0, y: "20px", delay: 1 });
// gsap.from(".header-link", { opacity: 0, delay: 1.2, stagger: 0.5 });
// gsap.from(".title", { opacity: 0, x: "-300px", ease: "bounce", duration: 1, delay: 1.6 });
// gsap.to(".astronaut", { opacity: 1, width: '350px', rotate: '30deg', duration: 1, delay: 1.8 });

const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline
    .from(".header", { y: '-100%', ease: "bounce" })
    .from(".logo", { opacity: 0, y: "20px", })
    .from(".header-link", { opacity: 0, stagger: 0.5 })
    .from(".title", { opacity: 0, x: "-300px", ease: "bounce", })
    .to(".astronaut", { opacity: 1, width: '350px', rotate: '30deg', })