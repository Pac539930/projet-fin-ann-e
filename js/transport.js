
document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll('.planet');
    
    // Fonction pour mettre en surbrillance la planète de départ et de destination choisie
    const updateHighlight = () => {
      // Récupère la valeur sélectionnée dans la liste déroulante "Départ" et la met en minuscule
      const d = document.getElementById('depart')?.value.toLowerCase();
      // Récupère la valeur sélectionnée dans la liste déroulante "Destination" et la met en minuscule
      const a = document.getElementById('destination')?.value.toLowerCase();
      
      // Retire la classe highlight de toutes les planètes pour réinitialiser la surbrillance
      planets.forEach(p => p.classList.remove('highlight'));
      
      // Si un départ est sélectionné, ajoute la classe highlight à la planète correspondante
      if (d) document.querySelector(`.planet.${d}`)?.classList.add('highlight');
      
      // Si une destination est sélectionnée ET qu'elle est différente du départ, ajoute la classe highlight à la planète correspondante
      if (a && a !== d) document.querySelector(`.planet.${a}`)?.classList.add('highlight');
    };
    
    // Gère l'affichage des formulaires (Voyage ou Fret) selon le bouton radio sélectionné
    document.getElementsByName("mode").forEach(r => {
      r.addEventListener("change", () => {
        // Affiche le formulaire de voyage si "voyage" est sélectionné
        document.getElementById("formVoyage").classList.toggle("hidden", r.value !== "voyage");
        // Affiche le formulaire de fret si "fret" est sélectionné
        document.getElementById("formFret").classList.toggle("hidden", r.value !== "fret");
      });
    });
    
    // Sélectionne les éléments du formulaire de voyage
    const passengerCount = document.getElementById('passengers'); // Champ pour le nombre de passagers
    const nameContainer = document.getElementById('passenger-names'); // Div qui contiendra les champs prénoms/noms
    const bagageSelect = document.getElementById('bagage'); // Menu déroulant pour les bagages
    const poidsContainer = document.getElementById('bagage-poids-container'); // Div pour afficher le champ poids
    const poidsInput = document.getElementById('poids'); // Champ pour le poids des bagages
    const allerRetour = document.getElementById('allerRetour'); // Case à cocher pour aller-retour
    const priceDisplay = document.getElementById('price'); // Paragraphe qui affiche le prix total
    const summary = document.getElementById('summary'); // Div qui affiche le message de confirmation
    
    // Fonction pour mettre à jour les champs prénom/nom selon le nombre de passagers
    function updateNames() {
      const count = parseInt(passengerCount.value) || 1; // Nombre de passagers (minimum 1)
      nameContainer.innerHTML = ''; // Vide le container avant de le remplir
      
      // Boucle pour ajouter un groupe de champs pour chaque passager
      for (let i = 1; i <= count; i++) {
        nameContainer.innerHTML += `
          <div>
            <input type="text" placeholder="Prénom ${i}" required>
            <input type="text" placeholder="Nom ${i}" required>
          </div>`;
      }
      
      updatePrice(); // Mets à jour le prix après chaque changement
    }
    
    // Fonction pour calculer et afficher le prix total du voyage
    function updatePrice() {
      const count = parseInt(passengerCount.value) || 1; // Nombre de passagers
      let total = count * 500; // Prix de base (500 € par passager)
      
      // Si la case aller-retour est cochée, double le prix
      if (allerRetour.checked) total *= 2;
      
      // Si des bagages en soute sont sélectionnés, ajoute un supplément
      if (bagageSelect.value === 'oui') {
        const poids = parseInt(poidsInput.value) || 0; // Récupère le poids
        total += Math.ceil(poids / 5) * 10; // Supplément de 10 € tous les 5 kg
      }
      
      // Affiche le prix total dans le paragraphe approprié
      priceDisplay.textContent = `Prix total : ${total} €`;
    }
    
    // Écouteur pour mettre à jour le formulaire lorsqu'on change le nombre de passagers
    passengerCount.addEventListener('input', updateNames);
    
    // Écouteur pour recalculer le prix lorsqu'on coche/décoche aller-retour
    allerRetour.addEventListener('change', updatePrice);
    
    // Écouteur pour recalculer le prix lorsqu'on change le poids des bagages
    poidsInput.addEventListener('input', updatePrice);
    
    // Écouteur pour afficher/masquer le champ poids selon que le bagage est sélectionné
    bagageSelect.addEventListener('change', () => {
      // Affiche ou masque le champ poids
      poidsContainer.classList.toggle('hidden', bagageSelect.value !== 'oui');
      updatePrice();
    });
    
    // Écouteur pour mettre en surbrillance les planètes sélectionnées
    document.getElementById('depart').addEventListener('change', updateHighlight);
    document.getElementById('destination').addEventListener('change', updateHighlight);
    
    // Gestionnaire de soumission du formulaire voyage
    document.getElementById('bookingForm').addEventListener('submit', e => {
      e.preventDefault(); // Empêche le rechargement de la page
      summary.textContent = "✅ Voyage réservé avec succès !"; // Affiche un message de confirmation
    });
    



    // FRET
    const fretWeight = document.getElementById('fret-weight');
    const fretPrice = document.getElementById('fret-price');
    const fretSummary = document.getElementById('fret-summary');

    fretWeight.addEventListener('input', () => {
      const w = parseInt(fretWeight.value) || 0;
      fretPrice.textContent = `Prix estimé : ${w * 20} €`;
    });

    document.getElementById('freightForm').addEventListener('submit', e => {
      e.preventDefault();
      fretSummary.textContent = "📦 Transport de fret réservé avec succès !";
    });

    updateNames();
  });