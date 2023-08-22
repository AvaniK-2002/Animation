document.addEventListener("DOMContentLoaded", () => {
    const exploreButton = document.getElementById("explore-btn");
    exploreButton.addEventListener("click", () => {
        alert("Exploring the website!");
    });
});
const dynamicHeading = document.getElementById("dynamic-heading");
const headings = [
    "Explore New Destinations",
    "Plan Your Dream Vacation",
    "Discover Amazing Adventures"
];
let currentIndex = 0;

function changeHeading() {
    dynamicHeading.style.opacity = "0"; // Fade out
    setTimeout(() => {
        dynamicHeading.textContent = headings[currentIndex];
        currentIndex = (currentIndex + 1) % headings.length;
        dynamicHeading.style.opacity = "1"; // Fade in
    }, 500); // Wait for the fade-out animation to complete (in ms)
}

// Initial call to set the first heading
changeHeading();

// Set an interval to change the heading and apply transition
setInterval(changeHeading, 3000); // Change heading every 3 seconds
const logoText = document.querySelector(".logo-text");

logoText.addEventListener("click", () => {
    logoText.classList.toggle("bounce");
});
document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero");
    hero.classList.add("show-heading");
});
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.getElementById("typing-animation");
    const words = ["animation", "transition", "effect", "typing"];
    let currentIndex = 0;

    function animateTextTyping() {
        typingElement.textContent = words[currentIndex];
        currentIndex = (currentIndex + 1) % words.length;
        setTimeout(animateTextTyping, 2000); // Change timing as needed
    }

    animateTextTyping();
});
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});





