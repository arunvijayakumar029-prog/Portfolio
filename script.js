// ============================================
// Typing effect for the role line in hero
// ============================================
const roles = [
  "Data Analytics Enthusiast",
  "Python Developer",
  "AI & Cybersecurity Learner",
  "Aspiring Software Developer"
];

const typedEl = document.getElementById("typedRole");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = roles[roleIndex];

  if (!deleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  const speed = deleting ? 45 : 90;
  setTimeout(typeLoop, speed);
}

typeLoop();

// ============================================
// Highlight active nav link based on scroll position
// ============================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  let current = "home";
  const scrollPos = window.scrollY + 140;

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === current);
  });
}

window.addEventListener("scroll", setActiveLink);
setActiveLink();

// ============================================
// Mobile menu toggle
// ============================================
const menuToggle = document.getElementById("menuToggle");
const navLinksWrap = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinksWrap.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinksWrap.classList.remove("open");
  });
});

// ============================================
// Footer year
// ============================================
document.getElementById("year").textContent = new Date().getFullYear();

// ============================================
// Full-size photo modal (click hero photo to open)
// ============================================
const heroPhoto = document.querySelector('.hero-photo');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

if (heroPhoto && imageModal && modalImage) {
  heroPhoto.style.cursor = 'pointer';

  heroPhoto.addEventListener('click', () => {
    modalImage.src = heroPhoto.src;
    imageModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  // Close when clicking outside the image
  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      imageModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Prevent closing when clicking the image itself
  modalImage.addEventListener('click', (e) => e.stopPropagation());

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.classList.contains('open')) {
      imageModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}
