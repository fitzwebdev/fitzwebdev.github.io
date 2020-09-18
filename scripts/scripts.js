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
toggle.addEventListener("click" , toggleNav, false);


// For modal contact form
var modal = document.querySelector(".contact-modal");
var trigger = document.querySelector(".contact-trigger");
var closeButton = document.querySelector(".close-button");

function toggleContactModal() {
    modal.classList.toggle("show-contact-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleContactModal();
    }
}

trigger.addEventListener("click", toggleContactModal);
closeButton.addEventListener("click", toggleContactModal);
window.addEventListener("click", windowOnClick);

// dark theme set up
const toggleSwitch = document.querySelector('.switch input[type = "checkbox"]');

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'darkmode');
        localStorage.setItem('theme', 'darkmode');
    } else {
        document.documentElement.setAttribute('data-theme', 'lightmode');
        localStorage.setItem('theme', 'lightmode');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') || null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'darkmode') {
        toggleSwitch.checked = true;
    }
}