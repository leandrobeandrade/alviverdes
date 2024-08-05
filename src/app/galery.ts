document.addEventListener("DOMContentLoaded", function () {
    // Add the 'js' class to the body
    document.body.classList.add("js");
  
    // Get references to the elements
    let hamburger = document.querySelector(".hamburger");
    let nav = document.getElementById("site-nav");
    let masthead = document.getElementById("masthead");
  
    // Add click event listener to the hamburger
    hamburger?.addEventListener("click", function () {
      // Toggle 'is-active' class on hamburger, nav, and masthead
      hamburger?.classList.toggle("is-active");
      nav?.classList.toggle("is-active");
      masthead?.classList.toggle("is-active");
    });
  });