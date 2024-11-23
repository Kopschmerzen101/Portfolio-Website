// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50, // Adjust for header
      behavior: "smooth"
    });
  });
});

// Contact Form Submission (Example Only)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! Thank you for reaching out.");
});
