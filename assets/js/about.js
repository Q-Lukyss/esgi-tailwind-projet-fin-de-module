/* ================================
Données de témoignages
================================ */
const testamonials = [
{
    name: "Brian H",
    job: "Artist",
    text: "Eva Johnson is a true gem in the world of coaching...",
    src: "assets/images/person.jpg"
},
{
    name: "Steven S",
    job: "Journalist",
    text: "Working with Eva Johnson has been a transformative experience...",
    src: "assets/images/person_2.png"
},
{
    name: "Sarah J",
    job: "Architect",
    text: "Eva's coaching style is not only motivating but also deeply insightful...",
    src: "assets/images/person_3.png"
},
{
    name: "Davis S",
    job: "Software Engineer",
    text: "I can't recommend Eva enough! Her expertise and empathy have been instrumental...",
    src: "assets/images/person_4.jpg"
}
];

let currentIndex = 0;
const container = document.getElementById("testimonial-container");
let autoSlideInterval = null;

/* ================================
    Création d'une diapositive
    ================================ */
function createSlide(testimonial, index) {
// Sur desktop (lg:), on affiche TOUTES les slides côte à côte.
// Sur mobile, on n’affiche QUE la slide active.
const isDesktop = window.innerWidth >= 1024; // lg = 1024px par défaut

// Conteneur principal
const slide = document.createElement("div");
slide.classList.add(
    "mx-auto",            // centre horizontalement en mobile
    "flex",               // en desktop, elles seront côte à côte
    "flex-col",
    "justify-between",
    "gap-2",
    "rounded",
    "bg-mygray",
    "px-10",
    "py-8",
    "transition-all",
    "duration-300",
    "shadow-lg"
);
// Largeur fixe (ou adaptative)
// On peut forcer w-80 ou w-96 selon design
slide.classList.add("w-80", "md:w-96");

// Si on est en mobile + la slide n’est pas l’active => on la masque
if (!isDesktop && index !== currentIndex) {
    slide.classList.add("hidden");
}

// Image du testimonial (en rond, en haut ?)
const imgEl = document.createElement("img");
imgEl.src = testimonial.src;
imgEl.alt = testimonial.name;
imgEl.className = "mx-auto w-20 h-20 rounded-full object-cover mb-2";
slide.appendChild(imgEl);

// Citation
const quote = document.createElement("p");
quote.className = "text-center text-sm italic leading-5 md:text-base";
quote.textContent = `"${testimonial.text}"`;
slide.appendChild(quote);

// Nom + Job
const nameEl = document.createElement("p");
nameEl.className = "text-center font-square-peg text-5xl mt-4";
nameEl.textContent = testimonial.name;
slide.appendChild(nameEl);

const jobEl = document.createElement("p");
jobEl.className = "text-center text-sm mt-1";
jobEl.textContent = testimonial.job;
slide.appendChild(jobEl);

return slide;
}

/* ================================
    Pastilles de navigation (mobile)
    ================================ */
function createNavDots() {
// Sur desktop, on masque les dots
const dotsWrapper = document.createElement("div");
dotsWrapper.className = "mx-auto mt-4 flex gap-3 lg:hidden";

testamonials.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.ariaLabel = "Testimonial dot";
    dot.className = "w-4 h-4 rounded-full bg-vibrant-orange transition-opacity hover:opacity-80";
    dot.style.opacity = i === currentIndex ? "1" : "0.35";

    dot.addEventListener("click", () => {
    currentIndex = i;
    renderSlides();
    });
    dotsWrapper.appendChild(dot);
});
return dotsWrapper;
}

/* ================================
    Rendu de toutes les slides
    ================================ */
function renderSlides() {
// On vide
container.innerHTML = "";

// Crée chaque slide
testamonials.forEach((testimonial, i) => {
    const slide = createSlide(testimonial, i);
    container.appendChild(slide);
});

// Ajout des pastilles (mobile seulement)
container.appendChild(createNavDots());
}

/* ================================
    Auto-slide (mobile) toutes les 5s
    ================================ */
function startAutoSlide() {
if (autoSlideInterval) clearInterval(autoSlideInterval);
autoSlideInterval = setInterval(() => {
    if (window.innerWidth < 1024) {
    // On ne fait l'auto-slide que sur mobile
    currentIndex = (currentIndex + 1) % testamonials.length;
    renderSlides();
    }
}, 5000);
}

/* ================================
    Gérer le redimensionnement
    ================================ */
window.addEventListener("resize", () => {
// On recalcule l'affichage pour repasser
// du mode "une slide" au mode "toutes les slides"
renderSlides();
});

// Premier rendu
renderSlides();
startAutoSlide();