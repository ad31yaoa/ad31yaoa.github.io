    document.addEventListener("DOMContentLoaded", function() {
      const menuBtn = document.getElementById("menuBtn");
      const nav = document.getElementById("nav");
      
      menuBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        nav.classList.toggle("show");
      });
      
      // Close menu when clicking outside
      document.addEventListener("click", function(e) {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
          nav.classList.remove("show");
        }
      });
      
      // Close menu when clicking on a link
      const navLinks = nav.querySelectorAll("a");
      navLinks.forEach(link => {
        link.addEventListener("click", function() {
          nav.classList.remove("show");
        });
      });
    });
