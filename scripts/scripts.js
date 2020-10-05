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

// dev.to article fetch via api

const api_url = "https://dev.to/api/articles?username=fitzwebdev";

async function getArticle() {
    const response = await fetch(api_url);
    const data = await response.json();

    const title = data[0].title;
    const link = data[0].url;
    const profilePic = data[0].user.profile_image;
    const tag = data[0].tag_list;
    const name = data[0].user.username;

    document.getElementById("article_title").textContent = title;
    document.getElementById("devArticle").href = link;
    document.getElementById("profile_image").src = profilePic;
    document.getElementById("tags").textContent = tag.map(i => "#" + i);
    document.getElementById("username").textContent = "@" + name;

    //for grabbing last 4 articles from dev.to
    function displayMultipleArticles() {
        for (let i = 1; i < 4; i ++) {
            //container
            let element = document.createElement("div");
            element.className = "blog-card";
            element.className = "devArticle";

            //link
            let articleLink = document.createElement("a");
            articleLink.id = "devArticle";
            articleLink.target = "_blank";
            articleLink.rel = "noopener";
            articleLink.href = data[i].url;

            //title
            let theTitle = document.createElement("h1");
            theTitle.id = "article_title";
            theTitle.textContent = data[i].title;

            //info container
            let infoArt = document.createElement("div");
            infoArt.className = "article-info";

            //media container
            let emptyDiv = document.createElement("div");

            //media
            let thePofileImage = document.createElement("img");
            thePofileImage.style.width = "50px";
            thePofileImage.id = "profile_image";
            thePofileImage.src = data[i].user.profile_image;

            //tags container
            let anotherEmptyDiv = document.createElement("div");
            anotherEmptyDiv.className ="tag-container"

            //tags
            let tagsInArt = document.createElement("p");
            tagsInArt.id = "tags";
            let realTags = data[i].tag_list;
            tagsInArt.textContent = realTags.map(i => "#" + i);

            //username
            let yourUsername = document.createElement("p");
            yourUsername.id = "username";
            yourUsername.textContent = "@" + data[i].user.username;

            element.appendChild(articleLink);
            articleLink.appendChild(theTitle);
            articleLink.appendChild(infoArt);
            infoArt.appendChild(emptyDiv);
            emptyDiv.appendChild(thePofileImage);
            infoArt.appendChild(anotherEmptyDiv);
            anotherEmptyDiv.appendChild(tagsInArt);
            anotherEmptyDiv.appendChild(yourUsername);
            document.getElementById("blog").appendChild(element);
        }
    }
    displayMultipleArticles();
}
getArticle();

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