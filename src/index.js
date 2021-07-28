import "./styles.css";
import "./js/main.js";
import arrayItems from "./menu.json";
import template from "./templates/menu.hbs";

let ul = document.querySelector('.js-menu');

let markup = template(arrayItems);
ul.insertAdjacentHTML("beforeend", markup);
