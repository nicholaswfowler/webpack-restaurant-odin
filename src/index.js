import homePage from "./home-page";
import aboutPage from "./about-page";
import menuPage from "./menu-page";

const mainContent = document.querySelector("#content");

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");


homeButton.addEventListener("click", ()=>{
    homePage(mainContent);
});

menuButton.addEventListener("click", ()=>{
    menuPage(mainContent);
});

aboutButton.addEventListener("click", ()=>{
    aboutPage(mainContent);
});