function openTab(tabName) {
    var tabLinks = document.querySelectorAll('.tab-links');
    var tabContents = document.querySelectorAll('.tab-contents');
    tabLinks.forEach(link => link.classList.remove('active-link'));
    tabContents.forEach(content => content.classList.remove('active-tab'));
    document.querySelector('.tab-links[onclick="openTab(\'' + tabName + '\')"]').classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}