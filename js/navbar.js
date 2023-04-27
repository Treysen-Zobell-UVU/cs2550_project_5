const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const home = document.querySelector("#home-page");
const homeButton = document.querySelector("#home-page-button");
const about = document.querySelector("#about-page");
const aboutButton = document.querySelector("#about-page-button");
const contact = document.querySelector("#contact-page");
const contactButton = document.querySelector("#contact-page-button");
const find = document.querySelector("#how-did-you-find-me");
const findButton = document.querySelector("#how-did-you-find-me-button");

about.style.display = "none";
contact.style.display = "none";
find.style.display = "none";

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(
    n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

homeButton.addEventListener("click", () => {
    home.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    find.style.display = "none";
})

aboutButton.addEventListener("click", () => {
    home.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";
    find.style.display = "none";
})

contactButton.addEventListener("click", () => {
    home.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
    find.style.display = "none";
})

findButton.addEventListener("click", () => {
    home.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    find.style.display = "block";
})