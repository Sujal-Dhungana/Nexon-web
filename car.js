// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const toggleTheme = document.getElementById("toggletheme");
  const themeIcon = toggleTheme.querySelector('i');

  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }

  // Toggle theme when button is clicked
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Toggle icon between moon and sun
    if (document.body.classList.contains('dark-mode')) {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Accessibility
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for navbar
          behavior: 'smooth'
        });
      }
    });
  });

  // Add animation to product cards when they come into view
  const productCards = document.querySelectorAll('.product-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  productCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
});


  function handleSearch() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();

    if (!query) return; // do nothing if input is empty

    // You can redirect to your actual pages here
    if (query.includes("gpu") || query.includes("graphics")) {
      window.location.href = "https://yourstore.com/gpu";
    } else if (query.includes("cpu") || query.includes("intel")) {
      window.location.href = "https://yourstore.com/cpu";
    } else if (query.includes("ram") || query.includes("memory")) {
      window.location.href = "https://yourstore.com/ram";
    } else if (query.includes("ssd") || query.includes("storage")) {
      window.location.href = "https://yourstore.com/ssd";
    } else {
      // fallback to a general search page
      window.location.href = `https://yourstore.com/search?q=${encodeURIComponent(query)}`;
    }
  }


    document.addEventListener("DOMContentLoaded", () => {
    const currentUser = localStorage.getItem("currentUser");
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (currentUser && users[currentUser]) {
      const name = currentUser;
      document.getElementById("user-greeting").textContent = ` Welcome, ${name}`;
    } else {
      document.getElementById("user-greeting").textContent = ` Welcome, Guest`;
    }
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout-btn");

    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        alert("Logged out successfully!");
        window.location.href = "car.html"; // or "login.html"
      });
    }
  });

    document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout-btn");

    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        // This just ends the session, doesn't delete the account
        localStorage.removeItem("currentUser");
        alert("You've been logged out!");
        window.location.href = "car.html"; // or wherever you want to redirect
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("currentUser");
  const users = JSON.parse(localStorage.getItem("users")) || {};

  const loginBtn = document.querySelector(".login");
  const logoutBtn = document.getElementById("logout-btn");
  const userGreeting = document.getElementById("user-greeting");

  if (currentUser && users[currentUser]) {
    // Show greeting and logout
    userGreeting.textContent = `Welcome, ${currentUser}`;
    logoutBtn.style.display = "inline-block";
    loginBtn.style.display = "none";
  } else {
    // Not logged in
    userGreeting.textContent = `Welcome, Guest`;
    logoutBtn.style.display = "none";
    loginBtn.style.display = "inline-block";
  }

  // Logout functionality
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      alert("Logged out successfully!");
      window.location.reload(); // reload to update UI
    });
  }
});
