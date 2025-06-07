document.addEventListener("DOMContentLoaded", () => {
  const planets = document.querySelectorAll('.planet');

  // Function to highlight the selected departure and destination planets
  const updateHighlight = () => {
    const d = document.getElementById('depart')?.value.toLowerCase();
    const a = document.getElementById('destination')?.value.toLowerCase();
    planets.forEach(p => p.classList.remove('highlight'));
    if (d) document.querySelector(`.planet.${d}`)?.classList.add('highlight');
    if (a && a !== d) document.querySelector(`.planet.${a}`)?.classList.add('highlight');
  };

  // Handle the display of forms (Travel or Freight) based on the selected radio button
  document.getElementsByName("mode").forEach(r => {
    r.addEventListener("change", () => {
      document.getElementById("formVoyage").classList.toggle("hidden", r.value !== "voyage");
      document.getElementById("formFret").classList.toggle("hidden", r.value !== "fret");
    });
  });

  const passengerCount = document.getElementById('passengers');
  const nameContainer = document.getElementById('passenger-names');
  const bagageSelect = document.getElementById('bagage');
  const poidsContainer = document.getElementById('bagage-poids-container');
  const poidsInput = document.getElementById('poids');
  const allerRetour = document.getElementById('allerRetour');
  const priceDisplay = document.getElementById('price');
  const summary = document.getElementById('summary');

  function updateNames() {
    const count = parseInt(passengerCount.value) || 1;
    nameContainer.innerHTML = '';

    for (let i = 1; i <= count; i++) {
      nameContainer.innerHTML += `
        <div>
          <input type="text" placeholder="First Name ${i}" required>
          <input type="text" placeholder="Last Name ${i}" required>
        </div>`;
    }
    updatePrice();
  }

  function updatePrice() {
    const count = parseInt(passengerCount.value) || 1;
    let total = count * 500;
    if (allerRetour.checked) total *= 2;
    if (bagageSelect.value === 'oui') {
      const poids = parseInt(poidsInput.value) || 0;
      total += Math.ceil(poids / 5) * 10;
    }
    priceDisplay.textContent = `Prix total : ${total} €`;
  }

  // Function to validate the travel form before submission
  function validateForm() {
    let isValid = true;
    const requiredFields = document.querySelectorAll('#bookingForm input[required]');
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('error');
        isValid = false;
      } else {
        field.classList.remove('error');
      }
    });

    // You can also check dropdowns if needed:
    const depart = document.getElementById('depart');
    const destination = document.getElementById('destination');
    if (!depart.value || !destination.value) {
      isValid = false;
      alert("Veuillez sélectionner à la fois le départ et la destination.");
    }

    if (!isValid) {
      alert("Veuillez remplir tous les champs requis.");
    }

    return isValid;
  }

  passengerCount.addEventListener('input', updateNames);
  allerRetour.addEventListener('change', updatePrice);
  poidsInput.addEventListener('input', updatePrice);
  bagageSelect.addEventListener('change', () => {
    poidsContainer.classList.toggle('hidden', bagageSelect.value !== 'oui');
    updatePrice();
  });

  document.getElementById('depart').addEventListener('change', updateHighlight);
  document.getElementById('destination').addEventListener('change', updateHighlight);

  document.getElementById('bookingForm').addEventListener('submit', e => {
    e.preventDefault();
    if (validateForm()) {
      summary.textContent = "✅ Voyage réservé avec succès !";
    }
  });

  const fretWeight = document.getElementById('fret-weight');
  const fretPrice = document.getElementById('fret-price');
  const fretSummary = document.getElementById('fret-summary');

  fretWeight.addEventListener('input', () => {
    const w = parseInt(fretWeight.value) || 0;
    fretPrice.textContent = `Prix estimé : ${w * 20} €`;
  });

  document.getElementById('freightForm').addEventListener('submit', e => {
    e.preventDefault();
    fretSummary.textContent = "📦 Transport de fret réservé avec succès";
  });

  updateNames();
});
