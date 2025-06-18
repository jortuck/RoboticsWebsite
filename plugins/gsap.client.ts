import { defineNuxtPlugin } from "#app";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
export default defineNuxtPlugin(() => {
	gsap.registerPlugin(SplitText);
	gsap.registerPlugin(ScrollTrigger);
});
