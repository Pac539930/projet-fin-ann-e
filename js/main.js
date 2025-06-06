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
  
    document.querySelectorAll('.service').forEach(el => {
      observer.observe(el);
    });






    

  const toggleBtn = document.querySelector(".menuburge");
  const nava = document.querySelector(".main-nav");

  toggleBtn.addEventListener("click", () => {
    nava.classList.toggle("show-nav");
  });
