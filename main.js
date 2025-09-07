function openTab(tabName) {
    var tabLinks = document.querySelectorAll('.tab-links');
    var tabContents = document.querySelectorAll('.tab-contents');
    tabLinks.forEach(link => link.classList.remove('active-link'));
    tabContents.forEach(content => content.classList.remove('active-tab'));
    document.querySelector('.tab-links[onclick="openTab(\'' + tabName + '\')"]').classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

// Mobile sidemenu toggle
const sidemenu = document.getElementById("sidemenu");
const barIcon = document.getElementById("bar-icon");
const closeIcon = document.getElementById("close-icon");

function openmenu() {
    sidemenu.classList.add("active");
    barIcon.style.display = "none";
    closeIcon.style.display = "block";
}

function closemenu() {
    sidemenu.classList.remove("active");
    barIcon.style.display = "block";
    closeIcon.style.display = "none";
}

// Initial state on load
function setMenuIcons() {
    if (window.innerWidth <= 600) {
        barIcon.style.display = sidemenu.classList.contains("active") ? "none" : "block";
        closeIcon.style.display = sidemenu.classList.contains("active") ? "block" : "none";
    } else {
        barIcon.style.display = "none";
        closeIcon.style.display = "none";
        sidemenu.classList.remove("active");
    }
}

// Run on load
window.addEventListener("DOMContentLoaded", setMenuIcons);
// Run on resize
window.addEventListener("resize", setMenuIcons);

