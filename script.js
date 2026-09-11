/* Troca de idioma PT ⇄ EN.
   Cada elemento traduzível carrega data-i18n="chave"; o HTML já vem em PT,
   então o dicionário PT serve de fonte de verdade para restaurar o idioma. */

const translations = {
  pt: {
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.experience": "Formação",
    "nav.contact": "Contato",

    "hero.eyebrow": "portfólio pessoal",
    "hero.subtitle": "Estudante de tecnologia & desenvolvedor",
    "hero.lead":
      "Construo projetos com código limpo e atenção ao design — de algoritmos fundamentais a aplicações web. Este é o lugar onde eu documento essa jornada.",
    "hero.cta": "Ver projetos",
    "hero.commit": "sempre aprendendo",

    "about.title": "Sobre mim",
    "about.p1":
      "Sou o Caueh, estudante de tecnologia na Universidade de Fortaleza (Unifor). Gosto de entender as coisas pela base: comecei implementando os algoritmos fundamentais em Java e JavaScript antes de partir para projetos web.",
    "about.p2":
      "Me interesso pela interseção entre tecnologia e design — código que funciona bem e interfaces que fazem sentido para quem usa. Este portfólio é, ele mesmo, um dos meus projetos: feito à mão com HTML, CSS e JavaScript.",
    "about.f1k": "base",
    "about.f2k": "formação",
    "about.f3k": "foco atual",
    "about.f3v": "Java, JavaScript e desenvolvimento web",

    "projects.title": "Projetos",
    "projects.code": "código ↗",
    "projects.alg":
      "Implementação dos algoritmos fundamentais — ordenação, busca e estruturas de dados — escrita em duas linguagens para comparar as abordagens.",
    "projects.alg.tag": "algoritmos",
    "projects.skyn":
      "Aplicação web em JavaScript, atualmente em desenvolvimento. Em breve com mais detalhes por aqui.",
    "projects.thisname": "Este portfólio",
    "projects.this":
      "Site bilíngue (PT/EN) construído do zero, sem frameworks: HTML semântico, CSS puro e um pouco de JavaScript para a troca de idioma.",

    "skills.title": "Habilidades",
    "skills.langs": "linguagens",
    "skills.tools": "ferramentas",
    "skills.learning": "estudando agora",
    "skills.l1": "estruturas de dados",
    "skills.l2": "desenvolvimento web",

    "exp.title": "Formação & experiência",
    "exp.e1when": "em andamento",
    "exp.e1what": "Graduação em Tecnologia",
    "exp.e1desc": "Fundamentos de computação, lógica e desenvolvimento de software.",
    "exp.e2what": "Projetos pessoais",
    "exp.e2desc":
      "Estudo por meio de prática: algoritmos fundamentais em Java e JS, aplicações web e este portfólio.",

    "contact.title": "Contato",
    "contact.lead":
      "Aberto a conversas sobre projetos, estágios e colaborações. O jeito mais rápido de me encontrar:",

    "footer.made": "feito à mão com HTML, CSS e JS",
  },

  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.experience": "Education",
    "nav.contact": "Contact",

    "hero.eyebrow": "personal portfolio",
    "hero.subtitle": "Technology student & developer",
    "hero.lead":
      "I build projects with clean code and an eye for design — from fundamental algorithms to web applications. This is where I document that journey.",
    "hero.cta": "View projects",
    "hero.commit": "always learning",

    "about.title": "About me",
    "about.p1":
      "I'm Caueh, a technology student at the University of Fortaleza (Unifor). I like to understand things from the ground up: I started by implementing the fundamental algorithms in Java and JavaScript before moving on to web projects.",
    "about.p2":
      "I'm interested in the intersection of technology and design — code that works well and interfaces that make sense to the people using them. This portfolio is itself one of my projects: handcrafted with HTML, CSS and JavaScript.",
    "about.f1k": "based in",
    "about.f2k": "education",
    "about.f3k": "current focus",
    "about.f3v": "Java, JavaScript and web development",

    "projects.title": "Projects",
    "projects.code": "code ↗",
    "projects.alg":
      "Implementation of the fundamental algorithms — sorting, searching and data structures — written in two languages to compare the approaches.",
    "projects.alg.tag": "algorithms",
    "projects.skyn":
      "A JavaScript web application, currently under development. More details coming soon.",
    "projects.thisname": "This portfolio",
    "projects.this":
      "Bilingual (PT/EN) site built from scratch, no frameworks: semantic HTML, plain CSS and a bit of JavaScript for the language switch.",

    "skills.title": "Skills",
    "skills.langs": "languages",
    "skills.tools": "tools",
    "skills.learning": "learning now",
    "skills.l1": "data structures",
    "skills.l2": "web development",

    "exp.title": "Education & experience",
    "exp.e1when": "in progress",
    "exp.e1what": "Technology degree",
    "exp.e1desc": "Computing fundamentals, logic and software development.",
    "exp.e2what": "Personal projects",
    "exp.e2desc":
      "Learning by doing: fundamental algorithms in Java and JS, web applications and this portfolio.",

    "contact.title": "Contact",
    "contact.lead":
      "Open to conversations about projects, internships and collaborations. The fastest way to reach me:",

    "footer.made": "handcrafted with HTML, CSS and JS",
  },
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.id === `lang-${lang}`;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem("lang", lang);
  } catch (_) {
    /* armazenamento indisponível (modo privado etc.) — segue sem persistir */
  }
}

document.getElementById("lang-pt").addEventListener("click", () => setLanguage("pt"));
document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));

let saved = null;
try {
  saved = localStorage.getItem("lang");
} catch (_) {}

if (saved === "en" || (!saved && !navigator.language.toLowerCase().startsWith("pt"))) {
  setLanguage("en");
}
