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

// Login button visibility start
  document.addEventListener("DOMContentLoaded", function () {
    const authLink = document.getElementById("authLink");
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!authLink) return;

    if (loggedInUser) {
      authLink.textContent = "Logout";
      authLink.href = "#";
      authLink.addEventListener("click", function (e) {
        e.preventDefault();
        if (confirm("Do you want to logout?")) {
          localStorage.removeItem("loggedInUser");
          alert("You have been logged out.");
          window.location.reload();
        }
      });
    } else {
      authLink.textContent = "Login";
      authLink.href = "Login.html";
    }
  });
// Login button visibility end
  function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert("Login successful!");
      window.location.href = "Home.html"; // Or dashboard
    } else {
      alert("Invalid username or password.");
    }
  }
