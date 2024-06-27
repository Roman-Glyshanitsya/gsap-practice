import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to(".image", {
  duration: 3,
  //   rotation: 360,
  scale: 2,
  scrollTrigger: {
    trigger: ".image",
    scrub: true,
  },
});

gsap.to(".title", {
  duration: 2,
  delay: 1,
  text: {
    value: "Escape to Ultimate Relaxation.",
  },
});
