// for the navbar scrolling
// window.addEventListener('scroll', () => {
//     const navbar = document.getElementById('navbar');

//     if (window.scrollY > 200) {
//         navbar.classList.add('scrolled')
//     }
//     else {
//         navbar.classList.remove('scrolled')
//     }
// })



// for the search button
function handleSearch(event) {
    event.preventDefault(); // Prevent actual form submission
    const query = event.target.query.value.trim();
    if (query) {
        // You can either redirect or filter products dynamically
        window.location.href = "products.html";
    }
}


//  NEEDTO STUDAY START

// Dark/Light mode logic
function toggleTheme() {
    const body = document.body;
    const logo = document.querySelector('.navbar-brand img');
    const btn = document.getElementById('theme-toggle');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        logo.src = 'media/Logo-dark.png'; // Use your dark logo file
        btn.innerText = '🤍';
        btn.classList.remove('btn-outline-dark');
        btn.classList.add('btn-outline-light');
        localStorage.setItem('theme', 'dark');
    } else {
        logo.src = 'media/Logo.png';
        btn.innerText = '🖤';
        btn.classList.remove('btn-outline-light');
        btn.classList.add('btn-outline-dark');
        localStorage.setItem('theme', 'light');
    }
}
// On page load, set theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === '🖤') {
        document.body.classList.add('dark-mode');
        document.querySelector('.navbar-brand img').src = 'media/Logo-dark.png';
        const btn = document.getElementById('theme-toggle');
        btn.innerText = '🤍';
        btn.classList.remove('btn-outline-dark');
        btn.classList.add('btn-outline-light');
    }
});

// NEEDTO STUDAY END