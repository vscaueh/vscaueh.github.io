/* i18n PT ⇄ EN + relógio local de Fortaleza.
   O HTML é a fonte do português; o dicionário PT é capturado do próprio
   markup na carga, então basta editar o texto no index.html. */

(function () {
  var I18N = {
    pt: {},
    en: {
      "nav.about": "About", "nav.projects": "Projects", "nav.skills": "Skills", "nav.path": "Path", "nav.contact": "Contact",
      "hero.eyebrow": "Developer · Fortaleza, Brazil",
      "hero.lede": "<strong>Systems Analysis &amp; Development</strong> student building web applications with a focus on clean interfaces, AI and data.",
      "hero.open": "Open to software development internships",
      "hero.class": "class of 2028",
      "hero.cta1": "See projects", "hero.cta2": "Get in touch",
      "about.label": "About", "about.title": "I learn by building, and I build for real people.",
      "about.f1k": "Based in", "about.f2k": "Education", "about.f2v": "ADS · UNIFOR (2028)", "about.f3k": "Interests", "about.f3v": "AI, data, product", "about.f4k": "Languages", "about.f4v": "Portuguese · English",
      "about.p1": "I'm an ADS student at Universidade de Fortaleza and I've been building web applications since before college — as a freelancer, <strong>creating systems for small businesses</strong> that needed to organize payments, customers and routines.",
      "about.p2": "My favorite part is where the problem becomes an interface: understanding what the person needs, designing the flow and shipping something that actually works. Right now I'm studying <strong>object-oriented Java</strong>, JavaScript and front/back-end architecture, and exploring how to put <strong>AI inside products</strong> in a way that's useful rather than decorative.",
      "about.p3": "Away from code, I've volunteered with <strong>financial monitoring</strong> and <strong>hardware support</strong> — which taught me to handle people, deadlines and machines that refuse to cooperate.",
      "proj.label": "Projects", "proj.title": "Things I've shipped or am sketching.",
      "proj.live": "live", "proj.concept": "concept", "proj.freelance": "freelance", "proj.study": "study", "proj.oss": "open source",
      "proj.repo": "Repository", "proj.demo": "Open live",
      "p1.name": "Skincare routine app", "p1.sub": "working title: skincicle",
      "p1.desc": "An app that organizes and visualizes the user's skincare routine — morning and night, products, order and frequency — with a built-in AI assistant that suggests adjustments. Published with a public repository; the AI module stays switched off for now to avoid API costs.",
      "pv.head": "routine · morning", "pv.s1": "Gentle cleanser", "pv.s2": "Vitamin C", "pv.s3": "Moisturizer", "pv.s4": "Sunscreen SPF 50", "pv.s4d": "every 3h", "pv.ai": "AI assistant · off",
      "p2.sub": "personal assistant with memory",
      "p2.desc": "A study project for a Jarvis-style assistant: front/back-end architecture, API integration and a memory system that keeps context across conversations. Still on paper, but it's where I'm learning the most about how AI fits into software.",
      "p2.stack": "Memory", "p2.stack2": "Architecture",
      "p3.name": "Systems for small businesses", "p3.sub": "on-demand projects",
      "p3.desc": "Web applications tailored to local clients: payment management, customer records and simple dashboards. A light stack (React + Firebase) with continuous deployment, built for people who need something that works without an IT team.",
      "p4.sub": "fundamental algorithms in two languages",
      "p4.desc": "Implementation of the fundamental algorithms — sorting, searching and data structures — written in both Java and JavaScript to compare the approaches and build a solid base before frameworks.",
      "p4.stack": "Algorithms",
      "p5.name": "This portfolio",
      "p5.desc": "The site you're looking at: bilingual (PT/EN), dark theme with CSS tokens and zero frameworks — semantic HTML, plain CSS and a single script for the language switch and the local clock.",
      "sk.label": "Skills", "sk.title": "What I use today and what I'm going deeper on.",
      "lv.daily": "daily use", "lv.study": "studying", "lv.projects": "in projects",
      "sk.ui": "Interface design <em>studying</em>", "sk.api": "REST APIs <em>in projects</em>", "sk.ai": "LLM integration <em>studying</em>",
      "sk.tools": "Tools & languages", "sk.lang": "English <em>advanced</em>",
      "tl.label": "Path", "tl.title": "Where I've been and where I'm heading.",
      "tl1.when": "2025 — 2028", "tl1.title": "Systems Analysis and Development",
      "tl1.desc": "Associate degree focused on object-oriented programming, data structures, algorithms and software development, plus entrepreneurship courses and hands-on project work.",
      "tl2.when": "2025 — now", "tl2.title": "Freelance web developer", "tl2.org": "Small businesses · Fortaleza",
      "tl2.desc": "Requirements gathering directly with the client, development in React and Firebase, deployment and post-delivery support.",
      "tl3.when": "Volunteering", "tl3.title": "Financial monitoring and hardware support", "tl3.org": "Volunteer work",
      "tl3.desc": "Tracking and monitoring finances, plus maintenance and technical support for computers and peripherals.",
      "ct.label": "Contact", "ct.title": "Let's talk.",
      "ct.p": "I'm looking for a software development internship where I can learn fast and contribute for real. If you have an opportunity, a project, or just want to trade ideas, write me.",
      "foot": "Handmade in Fortaleza · UTC−3"
    }
  };

  // Capture the Portuguese originals from the markup so the toggle can restore them.
  var textNodes = document.querySelectorAll("[data-i18n]");
  var htmlNodes = document.querySelectorAll("[data-i18n-html]");
  textNodes.forEach(function (el) { I18N.pt[el.getAttribute("data-i18n")] = el.textContent; });
  htmlNodes.forEach(function (el) { I18N.pt[el.getAttribute("data-i18n-html")] = el.innerHTML; });

  function setLang(lang) {
    var dict = I18N[lang] || I18N.pt;
    textNodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    htmlNodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem("caueh-lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  var saved = null;
  try { saved = localStorage.getItem("caueh-lang"); } catch (e) {}
  if (!saved) {
    var nav = (navigator.language || "pt").toLowerCase();
    saved = nav.indexOf("pt") === 0 ? "pt" : "en";
  }
  setLang(saved);

  // Local time in Fortaleza (America/Fortaleza, UTC-3, no DST).
  function tick() {
    var el = document.getElementById("clock");
    if (!el) return;
    try {
      el.textContent = new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Fortaleza", hour: "2-digit", minute: "2-digit" }).format(new Date());
    } catch (e) {
      var d = new Date(Date.now() - 3 * 3600 * 1000);
      el.textContent = String(d.getUTCHours()).padStart(2, "0") + ":" + String(d.getUTCMinutes()).padStart(2, "0");
    }
  }
  tick(); setInterval(tick, 30000);
})();
