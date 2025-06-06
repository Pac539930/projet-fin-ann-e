
function openPopup(popupId) {
  document.getElementById('overlay').classList.add('active');
  document.querySelectorAll('.popup').forEach(p => p.classList.remove('visible'));
  document.getElementById(popupId).classList.add('visible');
}

function closeAllPopups() {
  document.getElementById('overlay').classList.remove('active');
  document.querySelectorAll('.popup').forEach(p => p.classList.remove('visible'));
}



document.getElementById('paymentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  if (form.checkValidity()) {
    document.getElementById('confirmation').style.display = 'block';
  } else {
    alert("Veuillez remplir correctement tous les champs.");
  }
});




