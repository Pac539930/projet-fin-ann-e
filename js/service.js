
function openPopup(popupId) {
    document.getElementById('overlay').classList.add('active');
    document.querySelectorAll('.popup').forEach(p => p.classList.remove('visible'));
    document.getElementById(popupId).classList.add('visible');
}

function closeAllPopups() {
    document.getElementById('overlay').classList.remove('active');
    document.querySelectorAll('.popup').forEach(p => p.classList.remove('visible'));
}



const paymentForm = document.getElementById('paymentForm');
if (paymentForm) {
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (paymentForm.checkValidity()) {
            document.getElementById('confirmation').style.display = 'block';
        } else {
            alert("Veuillez remplir correctement tous les champs.");
        }
    });
}
