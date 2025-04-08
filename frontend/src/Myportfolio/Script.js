import Typed from "typed.js";

export function loadTypingEffect() {
  const el = document.querySelector(".text");
  if (el) {
    new Typed(el, {
      strings: ["Frontend Developer","Backend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  }
}
