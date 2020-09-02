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



// For RPG section game. 

window.onload = function() {
    var thegamelink = "https://play.idevgames.co.uk/embed/oscuros-reign";
    var ref = document.referrer;
    var theurl = document.referrer;
    ref = ref.substring(ref.indexOf("://") + 3);
    ref = ref.split("/")[0];
    if(ref == "my-ga.me"){
    theurl = "true"
    } else {
        theurl = "false"
    } 
    document.getElementById("embededGame").src = thegamelink+"/"+theurl;
}

