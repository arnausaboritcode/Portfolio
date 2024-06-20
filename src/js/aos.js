import AOS from "aos";
import "aos/dist/aos.css";

export function aosInit() {
  AOS.init({ duration: 500, easing: "ease-out-cubic", once: true, offset: 50 });
}
