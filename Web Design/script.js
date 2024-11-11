  //JavaScript for mobile menu functionality
  const menuBtn = document.querySelector("#menu-btn");
  const closeMenuBtn = document.querySelector("#close-menu-btn");
  const navLinks = document.querySelector("#navLinks");

  if (menuBtn) {
      menuBtn.addEventListener("click", () => {
          navLinks.classList.toggle("show-mobile-menu");
          menuBtn.classList.toggle("active"); 
      });
  }

  if (closeMenuBtn) {
      closeMenuBtn.addEventListener("click", () => {
          navLinks.classList.remove("show-mobile-menu");
          menuBtn.classList.remove("active"); 
      });
  }