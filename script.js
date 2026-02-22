// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Scroll Reveal Animation
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

// Counter Animation
const counters = document.querySelectorAll('.counter');
let counterStarted = false;

function runCounter() {
  const statsSection = document.querySelector('.stats');
  const sectionTop = statsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (!counterStarted && sectionTop < screenHeight - 100) {
    counters.forEach(counter => {
      counterStarted = true;
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / 100;

      const updateCounter = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }
}

window.addEventListener('scroll', runCounter);
