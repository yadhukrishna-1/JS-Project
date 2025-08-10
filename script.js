// ==========================
// Dark Mode Toggle
// ==========================
const toggleBtn = document.getElementById('darkModeToggle');
const logoImg = document.getElementById('logo-img');

function setDarkMode(on) {
  document.body.classList.toggle('dark-mode', on);
  if (on) {
    logoImg.src = 'media/Home/Logo dark.png';
    toggleBtn.innerHTML = '<i class="bi bi-brightness-high"></i>';
    toggleBtn.classList.replace('btn-outline-dark', 'btn-outline-light');
  } else {
    logoImg.src = 'media/Home/Logolight.png';
    toggleBtn.innerHTML = '<i class="bi bi-moon"></i>';
    toggleBtn.classList.replace('btn-outline-light', 'btn-outline-dark');
  }
}

const darkPref = localStorage.getItem('darkMode') === 'true';
setDarkMode(darkPref);

toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  setDarkMode(isDark);
  localStorage.setItem('darkMode', isDark);
});
// ==========================
// Slide button
// ==========================

// slide button end











// ==========================
// Navbar Login/Logout Button
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  const authLink = document.getElementById("authLink");
  const deleteAccountBtn = document.getElementById("deleteAccountBtn");

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

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

    // Show delete account button
    if (deleteAccountBtn) {
      deleteAccountBtn.classList.remove("d-none");
    }
  } else {
    authLink.textContent = "Login";
    authLink.href = "Login.html";
  }
});

// ==========================
// Login Function
// ==========================
function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem('regStorage') || '[]');
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Save login
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    // Update navbar instantly
    const authLink = document.getElementById("authLink");
    authLink.textContent = "Logout";
    authLink.href = "#";
    authLink.onclick = function (e) {
      e.preventDefault();
      if (confirm("Do you want to logout?")) {
        localStorage.removeItem("loggedInUser");
        alert("You have been logged out.");
        window.location.reload(); // Reload to reset page state
      }
    };

    // Show delete account button instantly
    const deleteAccountBtn = document.getElementById("deleteAccountBtn");
    if (deleteAccountBtn) {
      deleteAccountBtn.classList.remove("d-none");
    }

    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
}


// ==========================
// Delete Account Function
// ==========================
function deleteAccount() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!loggedInUser) return alert("You're not logged in.");

  if (confirm("Are you sure you want to delete your account? This cannot be undone.")) {
    let users = JSON.parse(localStorage.getItem('regStorage') || '[]');
    users = users.filter(u => u.username !== loggedInUser.username);
    localStorage.setItem('regStorage', JSON.stringify(users)); // ✅ fixed key
    localStorage.removeItem('loggedInUser');
    alert("Your account has been deleted.");
    window.location.href = "Register.html";
  }
}
