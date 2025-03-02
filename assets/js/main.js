/* --------------------------------------------
   1) Chargement asynchrone des partials
-------------------------------------------- */
fetch("/components/navbar.partial")
  .then(response => response.text())
  .then(html => {
    document.getElementById("navbar-container").innerHTML = html;
    initNavbarLinks();
    initNavbarMedias();
  })
  .catch(err => console.error("Erreur fetch navbar :", err));

fetch("/components/footer.partial")
  .then(response => response.text())
  .then(html => {
    document.getElementById("footer-container").innerHTML = html;
  })
  .catch(err => console.error("Erreur fetch footer :", err));

fetch("/components/back-main-page.partial")
  .then(response => response.text())
  .then(html => {
    document.getElementById("back-main-page-container").innerHTML = html;
  })
  .catch(err => console.error("Erreur fetch back-main-page :", err));

/* --------------------------------------------
   2) Navbar links + médias
-------------------------------------------- */
function initNavbarLinks() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/pages/about.html" },
    { name: "Working together", href: "/pages/working-together.html" },
    { name: "Contact", href: "/pages/contact.html" },
  ];

  const navLinksContainer = document.getElementById("nav-links");
  if (!navLinksContainer) return; 

  const currentPath = window.location.pathname;
  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.name;
    a.className = "px-3 py-2 transition-colors hover:bg-vibrant-orange text-white";
    if (currentPath === link.href) {
      a.classList.add("bg-vibrant-orange");
    }
    navLinksContainer.appendChild(a);
  });
}

function initNavbarMedias() {
  const medias = [
    { name: "Email", href: "mailto:eva.johnson@dev.com", src: "assets/icons/mail.svg" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/evajohnson", src: "assets/icons/linkedin.svg" },
    { name: "Phone", href: "tel:+33666666666", src: "assets/icons/phone.svg" },
  ];

  const mediaLinksContainer = document.getElementById("media-links");
  if (!mediaLinksContainer) return;

  medias.forEach(media => {
    const a = document.createElement("a");
    a.href = media.href;

    a.className = "rounded-full bg-vibrant-orange p-4 transition-colors hover:bg-vibrant-orange/70";

    const img = document.createElement("img");
    img.className = "w-6 h-6";
    img.src = media.src;
    img.alt = media.name;

    a.appendChild(img);
    mediaLinksContainer.appendChild(a);
  });
}


/**
 * Données communes pour les checks
 */
const checksData = [
  {
    name: 'Clarify your goals',
    content: 'What do you want to achieve? Sometimes the goal is clear and loud. Sometimes it is dissimulated.',
    src: 'assets/icons/target.svg'
  },
  {
    name: 'Explore the possibilities',
    content: 'What kind of possibilities are available to you? How can you reframe the problems to reveal new possibilities?',
    src: 'assets/icons/world.svg'
  },
  {
    name: 'Access the reality of your situation',
    content: 'How far is your goal from where you are now? What obstacles stand in your way?',
    src: 'assets/icons/planet.svg'
  },
  {
    name: 'Assess the possibilities and decide on the\nbest solution for you',
    content: 'What do you need to do to make it happen? How will you motivate yourself to stay on track?',
    src: 'assets/icons/notes.svg'
  }
];

/**
 * Fonctions de rendu
 */
function renderCheckView(check, compact = true) {
  const container = document.createElement("div");
  container.className = "flex flex-col gap-8 items-center lg:items-start" + (compact ? " max-w-lg" : "");

  // En-tête : image + titre
  const header = document.createElement("div");
  header.className = "flex flex-col items-center gap-8 lg:flex-row w-[50vw]";

  const img = document.createElement("img");
  img.src = check.src;
  img.alt = check.name;
  img.className = "w-12 h-12";
  header.appendChild(img);


  const title = document.createElement("p");
  title.className = "text-center text-3xl font-black text-papyrus lg:text-left italic";
  title.innerHTML = check.name.replace(/\n/g, "<br>");
  header.appendChild(title);

  container.appendChild(header);


  const content = document.createElement("p");
  content.className = "text-center text-mygray lg:text-left";
  content.textContent = check.content;
  container.appendChild(content);

  return container;
}

function renderArrow(src, alt, extraClasses = "") {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.className = extraClasses;
  return img;
}

const chainContainer = document.getElementById("check-chain-section");
if (chainContainer) {
  // => On suppose qu'on est sur la Home (index.html)

  // checksData[0]
  chainContainer.appendChild(renderCheckView(checksData[0], true));

  // Premier niveau
  const level1 = document.createElement("div");
  level1.className = "flex gap-16 lg:ml-16";
  level1.appendChild(
    renderArrow("assets/icons/arrow2.svg", "Just a arrow", "absolute size-28 lg:relative")
  );

  const level1Container = document.createElement("div");
  level1Container.className = "mt-16 flex flex-col gap-8";
  level1Container.appendChild(renderCheckView(checksData[1], true));

  // Niveau 2
  const level2 = document.createElement("div");
  level2.className = "flex gap-16 lg:ml-16";
  level2.appendChild(
    renderArrow("assets/icons/arrow2.svg", "Multiples hands united", "absolute size-28 lg:relative")
  );

  const level2Container = document.createElement("div");
  level2Container.className = "mt-16 flex flex-col gap-16 lg:gap-8";
  level2Container.appendChild(renderCheckView(checksData[2], true));

  // Niveau 3
  const level3 = document.createElement("div");
  level3.className = "lg:ml-28";
  level3.appendChild(
    renderArrow("assets/icons/arrow3.svg", "Gymnasium meet", "relative ml-12 size-28 lg:ml-48")
  );
  level3.appendChild(renderCheckView(checksData[3], true));

  // Emboîter le tout
  level2Container.appendChild(level3);
  level2.appendChild(level2Container);
  level1Container.appendChild(level2);
  level1.appendChild(level1Container);
  chainContainer.appendChild(level1);
}

/* --------------------------------------------
   5) Working Together page => #checks-container
-------------------------------------------- */
const checksContainer = document.getElementById("checks-container");
if (checksContainer) {
  checksData.forEach(check => {
    const checkView = renderCheckView(check, true);
    checksContainer.appendChild(checkView);
  });
}
