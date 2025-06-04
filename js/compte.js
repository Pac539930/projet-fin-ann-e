document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      document.getElementById('confirmation').style.display = 'block';
    } else {
      alert("Veuillez remplir correctement tous les champs.");
    }
  });