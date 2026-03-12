// --- 1. Typewriter Effect ---
// REMEMBER TO CHANGE THIS TO YOUR ACTUAL NAME!
const nameToType = "Hi, Subhodip Here."; 
const typewriterElement = document.getElementById("typewriter");
let index = 0;

function type() {
    if (index < nameToType.length) {
        typewriterElement.textContent += nameToType.charAt(index);
        index++;
        setTimeout(type, 100); 
    } else {
        typewriterElement.style.borderRight = "4px solid #38bdf8";
        setInterval(() => {
            typewriterElement.style.borderColor = 
                typewriterElement.style.borderColor === "transparent" ? "#38bdf8" : "transparent";
        }, 500);
    }
}
type();

// --- 2. Scroll Reveal Animations ---
const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.15 });

hiddenElements.forEach((el) => observer.observe(el));

// --- 3. Active Navigator Highlight ---
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".liquid-nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
