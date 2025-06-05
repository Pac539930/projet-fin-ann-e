   // Principal nav
   document.querySelectorAll(".sub_titre-nav").forEach(link => {
    link.addEventListener("mouseover", () => {
        const parentNav = link.closest(".sub-nav");
        parentNav.style.backgroundImage = `url(${link.dataset.bg})`;
    });

    link.addEventListener("mouseout", () => {
        const parentNav = link.closest(".sub-nav");
        parentNav.style.backgroundImage = ""; // Reset background
    });
});

const nav = document.querySelector('.main-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('frosted');
    } else {
        nav.classList.remove('frosted');
    }
});

// Categorie
function filterArticles(category) {
    let articles = document.querySelectorAll('.produit');
    articles.forEach(article => {
        if (category === 'all' || article.classList.contains(category)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

// Popups
function openPopup(popupId) {
    try {
        // Affiche l’overlay
        document.getElementById('overlay').classList.add('active');

        // Affiche uniquement la popup ciblée
        const popups = document.querySelectorAll('.popup');
        popups.forEach(p => p.classList.remove('visible'));
        document.getElementById(popupId).classList.add('visible');
    } catch (error) {
        console.error("Error opening popup:", error);
    }
}

function closeAllPopups() {
    try {
        document.getElementById('overlay').classList.remove('active');
        const popups = document.querySelectorAll('.popup');
        popups.forEach(p => p.classList.remove('visible'));
    } catch (error) {
        console.error("Error closing popups:", error);
    }
}

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Retire si tu veux que ça ne joue qu'une fois
        }
    });
}, {
    threshold: 0.2 // 20% de l'élément visible pour déclencher
});

document.querySelectorAll('.articles').forEach(el => {
    observer.observe(el);
});

// Toggle Nav
const toggleBtn = document.querySelector(".menuburge");
const nava = document.querySelector(".main-nav");

toggleBtn.addEventListener("click", () => {
    try {
        nava.classList.toggle("show-nav");
    } catch (error) {
        console.error("Error toggling nav:", error);
    }
});
