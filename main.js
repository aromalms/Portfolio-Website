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
    sidemenu.style.right = "0";
    barIcon.classList.add("hide");
    closeIcon.style.display = "block";
}

function closemenu() {
    sidemenu.style.right = "-250px";
    barIcon.classList.remove("hide");
    closeIcon.style.display = "none";
}

// Hide close icon by default on load
closeIcon.style.display = "none";
barIcon.classList.remove("hide");

// Update resize handler as well
window.addEventListener('resize', function() {
    if(window.innerWidth > 600){
        barIcon.classList.add("hide");
        closeIcon.style.display = "none";
        sidemenu.style.right = "0";
    } else {
        barIcon.classList.remove("hide");
        closeIcon.style.display = "none";
        sidemenu.style.right = "-250px";
    }
});

