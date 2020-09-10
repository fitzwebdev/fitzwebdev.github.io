// For responsive hamburger nav menu

const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav");
 
function toggleNav() {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        nav.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleNav, false);



// For modal contact form
var modal = document.querySelector(".contact-modal");
var trigger = document.querySelector(".contact-trigger");

function toggleContactModal() {
    modal.classList.toggle("show-contact-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleContactModal();
    }
}

trigger.addEventListener("click", toggleContactModal);
window.addEventListener("click", windowOnClick);

