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

  window.addEventListener('DOMContentLoaded', function() {
    // Ajoute la classe 'visible' pour afficher les articles
    document.querySelector('.articles').classList.add('visible');
  });
  
  
  function openPopup(popupId) {
      try {
          // Active l’overlay unique
          document.getElementById('overlay').classList.add('active');
  
          // Cache toutes les popups avant d’afficher la bonne
          document.querySelectorAll('.popup').forEach(p => p.classList.remove('visible'));
  
          // Affiche la popup demandée
          document.getElementById(popupId).classList.add('visible');
      } catch (error) {
          console.error("Error opening popup:", error);
      }
  }
  
  function closeAllPopups() {
      try {
          document.getElementById('overlay').classList.remove('active');
          document.querySelectorAll('.popup').forEach(p => p.classList.remove('visible'));
      } catch (error) {
          console.error("Error closing popups:", error);
      }
  }
  