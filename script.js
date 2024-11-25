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
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    if(name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
    } else {
      alert("Please fill out all fields.");
    }
  });
  
  // Dynamic Header Background Change on Scroll
  window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      header.style.boxShadow = "none";
    }
  });
  
  // Fade-In Effect on Section Visibility (for smooth animations)
  const sections = document.querySelectorAll("section");
  const observerOptions = {
    root: null,
    threshold: 0.1
  };
  
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    section.classList.add("hidden");
    sectionObserver.observe(section);
  });
  
  // Scroll to Top Button (appears when user scrolls down)
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.textContent = "↑";
  scrollToTopButton.style.position = "fixed";
  scrollToTopButton.style.bottom = "20px";
  scrollToTopButton.style.right = "20px";
  scrollToTopButton.style.padding = "10px 20px";
  scrollToTopButton.style.fontSize = "18px";
  scrollToTopButton.style.borderRadius = "50%";
  scrollToTopButton.style.backgroundColor = "#0071e3";
  scrollToTopButton.style.color = "#fff";
  scrollToTopButton.style.border = "none";
  scrollToTopButton.style.cursor = "pointer";
  scrollToTopButton.style.display = "none";
  document.body.appendChild(scrollToTopButton);
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
