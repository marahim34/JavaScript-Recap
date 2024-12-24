const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("pastel-mode"); // Toggle the "pastel-mode" class on the <body> element
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  // Toggle the menu visibility on hamburger button click
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });

  // Close the menu when a menu item is clicked
  const menuItems = menu.querySelectorAll("a");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      menu.classList.add("hidden");
    });
  });
});
