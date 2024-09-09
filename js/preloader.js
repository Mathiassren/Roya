document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.getElementById("preloader");

  if (preloader) {
    // Wait for 3 seconds to show the preloader, then hide it
    setTimeout(function () {
      // Add 'hide' class to fade out
      preloader.classList.add("hide");

      // Wait for the opacity transition to finish before removing the preloader
      setTimeout(function () {
        preloader.style.display = "none"; // Hide preloader completely
      }, 1500); // Wait for 1.5s (same as transition duration)
    }, 3000); // Keep the preloader for 3 seconds before starting the fade-out
  }
});
