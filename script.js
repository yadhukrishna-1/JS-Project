// script.js
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

// Dark mode toggle start
const toggleBtn = document.getElementById('darkModeToggle');
const logoImg = document.getElementById('logo-img');
function setDarkMode(on) {
  document.body.classList.toggle('dark-mode', on);
  if (on) {
    logoImg.src = 'media/Home/Logo dark.png';
    toggleBtn.innerHTML = '<i class="bi bi-brightness-high"></i>';
    toggleBtn.classList.remove('btn-outline-dark');
    toggleBtn.classList.add('btn-outline-light');
  } else {
    logoImg.src = 'media/Home/Logolight.png';
    toggleBtn.innerHTML = '<i class="bi bi-moon"></i>';
    toggleBtn.classList.remove('btn-outline-light');
    toggleBtn.classList.add('btn-outline-dark');
  }
}
// Load preference
const darkPref = localStorage.getItem('darkMode') === 'true';
setDarkMode(darkPref);
toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  setDarkMode(isDark);
  localStorage.setItem('darkMode', isDark);
});

// NEEDTO STUDAY END

// slide button start
document.getElementById('scrollLeft').onclick = function() {
  document.getElementById('laptopScroll').scrollBy({left: -300, behavior: 'smooth'});
};
document.getElementById('scrollRight').onclick = function() {
  document.getElementById('laptopScroll').scrollBy({left: 300, behavior: 'smooth'});
};
// slide button end

// login page start
    function login(e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      localStorage.setItem("user", username);
      alert("Logged in as " + username);
      window.location.href = "products.html";
    }
// login page end