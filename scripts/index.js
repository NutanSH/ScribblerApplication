// Get the SignUp modal
var modal = document.getElementById('signUpWindow');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('form').on('submit', function () {
    if ($('form').first().valid()) {
        stopNavigate();
    }
});
