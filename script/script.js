document.querySelectorAll('.day').forEach(function(button) {
    button.addEventListener('click', function() {
        var popup = document.getElementById('popup');
        popup.style.backgroundColor = this.style.backgroundColor;
        popup.style.display = 'flex'; // Show the popup
    });
});

document.getElementById('popup').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the popup when clicked
});
