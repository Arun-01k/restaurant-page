import "./styles.css";
import { loadHome } from "./loadHome";
import { menu } from "./menu";
import { about } from "./about"

loadHome();

const nav = document.querySelector('nav');

nav.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const actions = {
    home: loadHome,
    menu: menu,
    about: about
  };

  actions[e.target.dataset.page]?.();
});
