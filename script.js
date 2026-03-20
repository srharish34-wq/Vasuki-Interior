// ===== PROJECT CARD SCROLL ANIMATION =====
const cards = document.querySelectorAll('.project-card');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            cardObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

cards.forEach((card) => {
    cardObserver.observe(card);
});


// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.counter');

const runCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 120;

    const update = () => {
        count += increment;

        if (count < target) {
            counter.innerText = Math.floor(count) + "+";
            requestAnimationFrame(update);
        } else {
            counter.innerText = target + "+";
        }
    };

    update();
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            runCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.6
});

counters.forEach((counter) => {
    counterObserver.observe(counter);
});
document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".service-row");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // once only
          }
        });
      },
      { threshold: 0.2 }
    );

    rows.forEach((row) => observer.observe(row));
  });

  /* ============ Menu Toggle ============ */
const menuToggle = document.getElementById("menuToggle");
if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    const navMenu = document.querySelector(".main-header .nav-menu");
    if (navMenu) navMenu.classList.toggle("active");
  });
}

/* ============ Mobile Dropdown ============ */
document.querySelectorAll(".main-header .dropdown > a").forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("active");
  });
});

const designRows = document.querySelectorAll('.design-row');

function revealDesign() {
  const trigger = window.innerHeight * 0.85;

  designRows.forEach(row => {
    const top = row.getBoundingClientRect().top;

    if (top < trigger) {
      row.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealDesign);
revealDesign();