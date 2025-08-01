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