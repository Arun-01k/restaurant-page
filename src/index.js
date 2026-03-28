import "./styles.css";
import { loadHome } from "./loadHome";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import { initCart } from "./cart";

let currentPage = "home";

function clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";          // Simple and instant clear
}

function setActiveButton(page) {
    document.querySelectorAll("nav button").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.page === page);
    });
}

function switchPage(page) {
    clearContent();
    currentPage = page;
    setActiveButton(page);

    if (page === "home")      loadHome();
    else if (page === "menu") loadMenu();
    else if (page === "contact") loadContact();
}

// Main setup
function init() {
    // Initial load
    loadHome();
    setActiveButton("home");

    // Navigation clicks
    document.querySelector("nav").addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON" && e.target.dataset.page) {
            switchPage(e.target.dataset.page);
        }
    });

    // Cart button
    document.getElementById("cart-btn").addEventListener("click", () => {
        window.showCart();
    });

    // Initialize cart system
    initCart();
}

init();