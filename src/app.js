import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to(".box", {
  duration: 3,
  //   rotation: 360,
  scale: 4,
  scrollTrigger: {
    trigger: ".box",
    markers: true,
    scrub: true,
  },
});

gsap.to(".title", {
  duration: 2,
  delay: 1,
  text: {
    value: "be as water, my friend",
  },
});
