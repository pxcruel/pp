/* ==========================================================================
   PRINCE PORTFOLIO — MAIN JAVASCRIPT
   --------------------------------------------------------------------------
   ⭐ EASY CUSTOMIZATION (EDIT HERE):
   Everything you normally want to change lives in the "EDIT HERE" blocks
   below (sections A–F). No need to touch the code further down.
   ========================================================================== */

"use strict";

/* ============================================================
   ⭐ SECTION A — YOUR PROJECTS (WEB DEVELOPMENT)
   How to edit:
   • title        → project name
   • description  → 1–2 line summary
   • tech         → list of technologies (shown as tags)
   • image        → path like "images/my-project.jpg" (optional —
                    leave "" to show a designed gradient placeholder)
   • demo         → live demo link (use "#" if you don't have one yet)
   • github       → GitHub repo link (use "#" if private)
   • alt          → accessibility description of the image
   ============================================================ */
const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "A fully responsive personal portfolio with smooth scrolling, scroll animations and a mobile-first layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "",
    demo: "#",
    github: "#",
    alt: "Screenshot of the portfolio website project",
  },
  {
    title: "Landing Page",
    description:
      "A modern product landing page with a sticky navbar, hero section, pricing cards and call-to-action buttons.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "",
    demo: "#",
    github: "#",
    alt: "Screenshot of the landing page project",
  },
  {
    title: "To-Do Web App",
    description:
      "A task manager that lets users add, complete and delete tasks, with data saved in the browser using localStorage.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "",
    demo: "#",
    github: "#",
    alt: "Screenshot of the to-do web app project",
  },
  {
    title: "Responsive Business Site",
    description:
      "A multi-section business website template with services, testimonials and a working contact layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "",
    demo: "#",
    github: "#",
    alt: "Screenshot of the business website project",
  },
  {
    title: "Simple PHP Form",
    description:
      "A basic PHP practice project — an HTML form that validates input on the client and server side.",
    tech: ["HTML", "CSS", "PHP"],
    image: "",
    demo: "#",
    github: "#",
    alt: "Screenshot of the PHP form project",
  },
  {
    title: "E-commerce UI Concept",
    description:
      "A shop interface concept designed in Figma first, then built with plain HTML, CSS and JavaScript.",
    tech: ["Figma", "HTML", "CSS"],
    image: "",
    demo: "#",
    github: "#",
    alt: "Screenshot of the e-commerce UI project",
  },
];

/* ============================================================
   ⭐ SECTION B — GRAPHIC DESIGN GALLERY
   How to edit:
   • title   → design name
   • image   → path like "images/poster1.jpg" (leave "" to show
               a colored placeholder you can replace later)
   • color   → placeholder gradient color pair ("#hex, #hex")
   • alt     → accessibility description
   ============================================================ */
const DESIGNS = [
  { title: "Event Poster",        image: "", color: "#6366f1, #8b5cf6", alt: "Poster design for an event" },
  { title: "Social Media Post",   image: "", color: "#0ea5e9, #6366f1", alt: "Social media post design" },
  { title: "YouTube Thumbnail",   image: "", color: "#f59e0b, #ef4444", alt: "YouTube thumbnail design" },
  { title: "Festive Banner",      image: "", color: "#10b981, #0ea5e9", alt: "Banner design for a festive sale" },
  { title: "Logo & Branding",     image: "", color: "#8b5cf6, #ec4899", alt: "Logo and branding work" },
  { title: "Marketing Flyer",     image: "", color: "#22d3ee, #6366f1", alt: "Marketing flyer design" },
  { title: "Wedding Card Design", image: "", color: "#f43f5e, #8b5cf6", alt: "Wedding invitation card design" },
  { title: "Ad Creative",         image: "", color: "#6366f1, #22d3ee", alt: "Advertisement creative design" },
  { title: "T-Shirt Print",       image: "", color: "#f97316, #f59e0b", alt: "T-shirt print design" },
];

/* ============================================================
   ⭐ SECTION C — VIDEO SHOWCASE
   How to edit (pick ONE of these per video):
   • youtube → a full YouTube link, e.g. "https://youtu.be/dQw4w9WgXcQ"
   • local   → a file you placed in the videos/ folder, e.g. "videos/reel1.mp4"
   Leave both as "" to show a placeholder message instead.
   ============================================================ */
const VIDEOS = [
  {
    title: "Promo Reel",
    description: "A short promotional edit with rhythm-based cuts, transitions and color grading.",
    youtube: "",
    local: "",
    thumb: "",
    alt: "Thumbnail of the promo reel video",
  },
  {
    title: "Wedding Highlights",
    description: "Emotional wedding highlight edit with slow motion, music sync and soft color tones.",
    youtube: "",
    local: "",
    thumb: "",
    alt: "Thumbnail of the wedding highlights video",
  },
  {
    title: "Product Ad",
    description: "A clean 30-second product advertisement made for social media platforms.",
    youtube: "",
    local: "",
    thumb: "",
    alt: "Thumbnail of the product ad video",
  },
];

/* ============================================================
   ⭐ SECTION D — CONTACT & SOCIAL LINKS
   Replace the placeholder links with your real profiles.
   These appear in the Contact section AND in the footer.
   ============================================================ */
const CONTACT_LINKS = [
  {
    name: "Email",
    icon: "✉️",
    label: "prince@example.com", // ← EDIT: your email address
    href: "mailto:prince@example.com",
  },
  {
    name: "GitHub",
    icon: "🐙",
    label: "github.com/prince", // ← EDIT: your GitHub username
    href: "https://github.com/prince",
  },
  {
    name: "LinkedIn",
    icon: "💼",
    label: "linkedin.com/in/prince", // ← EDIT: your LinkedIn username
    href: "https://linkedin.com/in/prince",
  },
  {
    name: "Instagram",
    icon: "📸",
    label: "@prince.designs", // ← EDIT: your Instagram handle
    href: "https://instagram.com/prince",
  },
];

/* ============================================================
   ⭐ SECTION E — RESUME FILE
   Put your PDF inside the project (e.g. prince-portfolio/resume.pdf)
   and set the file name below. Everything else updates automatically.
   ============================================================ */
const RESUME_FILE = "resume.pdf"; // ← EDIT: your resume file name

/* ============================================================
   ⭐ SECTION F — TYPING ROLES (hero section)
   Add or remove any roles you want the hero to rotate through.
   ============================================================ */
const TYPED_ROLES = [
  "Web Designer",
  "Frontend Developer",
  "Graphic Designer",
  "Video Editor",
];

/* ============================================================
   ⚠️ NOTHING BELOW NEEDS TO BE EDITED — it wires everything up.
   ============================================================ */


/* ------------------------------------------------------------
   HELPER: create an HTML element with a class + inner HTML
   ------------------------------------------------------------ */
function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

/* ============================================================
   1. WEB PROJECT CARDS
   ============================================================ */
function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  PROJECTS.forEach(function (project) {
    const card = el("article", "project-card reveal");

    /* Image area: real image if provided, styled fallback if not */
    let thumbHTML;
    if (project.image) {
      thumbHTML =
        '<img src="' + project.image + '" alt="' + project.alt + '" loading="lazy" ' +
        'onerror="this.style.display=\'none\'; this.parentElement.querySelector(\'.thumb-fallback\').style.display=\'grid\'">' +
        '<div class="thumb-fallback" style="display:none">' + project.title + "</div>";
    } else {
      thumbHTML = '<div class="thumb-fallback">' + project.title + "</div>";
    }

    /* GitHub button: hidden if no link is given */
    const githubBtn = project.github && project.github !== "#"
      ? '<a class="btn btn-sm btn-github" href="' + project.github + '" target="_blank" rel="noopener">GitHub</a>'
      : "";

    card.innerHTML =
      '<div class="project-thumb">' + thumbHTML + "</div>" +
      '<div class="project-body">' +
        "<h3>" + project.title + "</h3>" +
        "<p>" + project.description + "</p>" +
        '<div class="tech-tags">' +
          project.tech.map(function (t) { return "<span>" + t + "</span>"; }).join("") +
        "</div>" +
        '<div class="project-links">' +
          '<a class="btn btn-sm btn-primary btn-demo" href="' + project.demo + '" target="_blank" rel="noopener">Live Demo ↗</a>' +
          githubBtn +
        "</div>" +
      "</div>";

    grid.appendChild(card);
  });
}

/* ============================================================
   2. GRAPHIC DESIGN GALLERY + LIGHTBOX
   ============================================================ */
const designItems = []; // filled while rendering; used by the lightbox

function renderDesigns() {
  const grid = document.getElementById("design-grid");
  if (!grid) return;

  DESIGNS.forEach(function (design, index) {
    const card = el("button", "design-card reveal");
    card.type = "button";
    card.setAttribute("aria-label", "View larger: " + design.title);

    const inner =
      design.image
        ? '<img src="' + design.image + '" alt="' + design.alt + '" loading="lazy" ' +
          'onerror="this.style.display=\'none\'; this.parentElement.querySelector(\'.design-fallback\').style.display=\'grid\'">'
        : "";
    const fallback =
      '<div class="design-fallback" style="background:linear-gradient(135deg,' +
      design.color + ');' + (design.image ? "display:none" : "") + '">' +
      design.title + "</div>";

    card.innerHTML =
      inner + fallback +
      '<div class="design-zoom" aria-hidden="true">🔍</div>' +
      '<div class="design-overlay">' +
        "<h3>" + design.title + "</h3>" +
        "<p>Click to view larger</p>" +
      "</div>";

    card.addEventListener("click", function () {
      openLightbox(index);
    });

    designItems.push(design);
    grid.appendChild(card);
  });
}

/* --- Lightbox logic --- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
let currentDesign = 0;

function openLightbox(index) {
  currentDesign = index;
  updateLightbox();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden"; // stop background scrolling
  document.getElementById("lightbox-close").focus();
}

function updateLightbox() {
  const item = designItems[currentDesign];
  if (item.image) {
    lightboxImg.src = item.image;
    lightboxImg.alt = item.alt;
    lightboxImg.style.display = "";
  } else {
    /* No image yet — show a simple gradient placeholder block */
    lightboxImg.removeAttribute("src");
    lightboxImg.alt = "";
    lightboxImg.style.display = "none";
  }
  lightboxCaption.textContent = item.title + "  (" + (currentDesign + 1) + " / " + designItems.length + ")";
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function lightboxNext() {
  currentDesign = (currentDesign + 1) % designItems.length;
  updateLightbox();
}
function lightboxPrev() {
  currentDesign = (currentDesign - 1 + designItems.length) % designItems.length;
  updateLightbox();
}

/* ============================================================
   3. VIDEO SHOWCASE + VIDEO MODAL
   ============================================================ */
function renderVideos() {
  const grid = document.getElementById("video-grid");
  if (!grid) return;

  VIDEOS.forEach(function (video) {
    const card = el("article", "video-card reveal");

    const thumbHTML = video.thumb
      ? '<img src="' + video.thumb + '" alt="' + video.alt + '" loading="lazy" ' +
        'onerror="this.style.display=\'none\'">'
      : "";
    const fallback = video.thumb ? "" : '<div class="video-fallback" aria-hidden="true">🎬</div>';

    card.innerHTML =
      '<button class="video-thumb" type="button" aria-label="Play video: ' + video.title + '">' +
        thumbHTML + fallback +
        '<span class="play-btn" aria-hidden="true">▶</span>' +
      "</button>" +
      '<div class="video-body">' +
        "<h3>" + video.title + "</h3>" +
        "<p>" + video.description + "</p>" +
      "</div>";

    card.querySelector(".video-thumb").addEventListener("click", function () {
      openVideoModal(video);
    });

    grid.appendChild(card);
  });
}

const videoModal = document.getElementById("video-modal");
const videoPlayer = document.getElementById("video-modal-player");
const videoNote = document.getElementById("video-modal-note");

function openVideoModal(video) {
  videoPlayer.innerHTML = "";
  videoNote.hidden = true;

  if (video.youtube) {
    /* Convert any normal YouTube link into an embed link */
    const id = getYouTubeId(video.youtube);
    if (id) {
      videoPlayer.innerHTML =
        '<iframe src="https://www.youtube.com/embed/' + id +
        '" title="' + video.title + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    } else {
      videoNote.hidden = false;
    }
  } else if (video.local) {
    videoPlayer.innerHTML =
      '<video src="' + video.local + '" controls autoplay playsinline></video>';
  } else {
    /* Nothing configured yet — show a friendly placeholder note */
    videoNote.hidden = false;
    videoPlayer.innerHTML = '<div class="video-fallback" style="position:static;height:100%">🎬</div>';
  }

  videoModal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("video-modal-close").focus();
}

function closeVideoModal() {
  videoPlayer.innerHTML = ""; // stops playback
  videoModal.hidden = true;
  document.body.style.overflow = "";
}

/* Extract the video ID from the many YouTube link formats */
function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
}

/* ============================================================
   4. CONTACT CARDS + FOOTER SOCIAL LINKS
   ============================================================ */
function renderContacts() {
  const grid = document.getElementById("contact-grid");
  const footer = document.getElementById("footer-social");
  if (!grid || !footer) return;

  CONTACT_LINKS.forEach(function (contact) {
    grid.appendChild(
      el("a", "contact-card reveal",
        '<span class="contact-icon" aria-hidden="true">' + contact.icon + "</span>" +
        "<h3>" + contact.name + "</h3>" +
        "<span>" + contact.label + "</span>")
    );
    grid.lastChild.href = contact.href;
    grid.lastChild.target = "_blank";
    grid.lastChild.rel = "noopener";

    footer.appendChild(
      el("a", "", contact.name)
    );
    footer.lastChild.href = contact.href;
    footer.lastChild.target = "_blank";
    footer.lastChild.rel = "noopener";
  });
}

/* ============================================================
   5. RESUME BUTTON (uses the RESUME_FILE constant)
   ============================================================ */
function setupResume() {
  const btn = document.getElementById("resume-btn");
  if (!btn) return;
  btn.href = RESUME_FILE;
}

/* ============================================================
   6. TYPING EFFECT (hero role text)
   ============================================================ */
function setupTyping() {
  const target = document.getElementById("typed");
  if (!target) return;

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const word = TYPED_ROLES[roleIndex];
    target.textContent = word.slice(0, charIndex);

    let delay = deleting ? 45 : 90; // deleting is faster than typing

    if (!deleting && charIndex === word.length) {
      delay = 1600;              // pause when a word is complete
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % TYPED_ROLES.length;
      delay = 400;               // small pause before the next word
    } else {
      charIndex += deleting ? -1 : 1;
    }
    setTimeout(type, delay);
  }
  type();
}

/* ============================================================
   7. NAVBAR: hamburger, scrolled state, active link highlight
   ============================================================ */
function setupNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const links = document.querySelectorAll(".nav-link");

  /* --- hamburger open/close --- */
  hamburger.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  /* close the menu after tapping a link (mobile) */
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  /* --- add shadow/border once the page is scrolled --- */
  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- highlight the link of the section currently on screen --- */
  const sections = document.querySelectorAll("main section[id]");
  const spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        links.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("href") === "#" + id);
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" } // "active zone" is the middle of the screen
  );
  sections.forEach(function (section) { spy.observe(section); });
}

/* ============================================================
   8. SCROLL REVEAL ANIMATION
   ============================================================ */
function setupReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate once, then stop watching
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach(function (item) { observer.observe(item); });

  /* Groups of cards appear with a small stagger */
  ["project-grid", "design-grid", "video-grid", "skills-grid", "contact-grid"].forEach(function (id) {
    const grid = document.getElementById(id);
    if (grid) grid.classList.add("stagger");
  });
}

/* ============================================================
   9. BACK TO TOP BUTTON
   ============================================================ */
function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener(
    "scroll",
    function () {
      btn.classList.toggle("show", window.scrollY > 500);
    },
    { passive: true }
  );
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ============================================================
   10. GLOBAL KEYBOARD SUPPORT + FOOTER YEAR
   ============================================================ */
function setupGlobal() {
  /* Esc closes the lightbox / video modal; arrows move the lightbox */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (!lightbox.hidden) closeLightbox();
      if (!videoModal.hidden) closeVideoModal();
    }
    if (!lightbox.hidden) {
      if (event.key === "ArrowRight") lightboxNext();
      if (event.key === "ArrowLeft") lightboxPrev();
    }
  });

  /* Click on the dark background closes the lightbox / video modal */
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
  });
  videoModal.addEventListener("click", function (event) {
    if (event.target === videoModal) closeVideoModal();
  });

  /* Lightbox control buttons */
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", lightboxPrev);
  document.getElementById("lightbox-next").addEventListener("click", lightboxNext);
  document.getElementById("video-modal-close").addEventListener("click", closeVideoModal);

  /* Footer year updates itself (e.g. 2026) */
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* ============================================================
   START EVERYTHING once the page is ready
   ============================================================ */
document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  renderDesigns();
  renderVideos();
  renderContacts();
  setupResume();
  setupTyping();
  setupNavbar();
  setupReveal();
  setupBackToTop();
  setupGlobal();
});
