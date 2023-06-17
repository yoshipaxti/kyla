function showNavbar(navbarId) {
  const navbars = document.querySelectorAll('.navbar');

  // Hide all navbars
  navbars.forEach(navbar => {
    navbar.style.display = 'none';
  });

  // Show the selected navbar
  const selectedNavbar = document.getElementById(navbarId);
  selectedNavbar.style.display = 'block';
}