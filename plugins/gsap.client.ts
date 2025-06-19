import { defineNuxtPlugin } from "#app";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import is from "@sindresorhus/is";
export default defineNuxtPlugin(() => {
	gsap.registerPlugin(SplitText);
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(ScrollToPlugin);
	ScrollToPlugin.config({ autoKill: false });
});
