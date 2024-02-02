document.querySelectorAll('.day').forEach(button => {
    button.addEventListener('click', () => {
        // Get the currently displayed popup
        const currentPopup = document.querySelector('.popup:not([style*="top: -100%"])');

        // Show the clicked day's popup
        const popup = document.querySelector(`#popup-${button.id}`);
        if (currentPopup !== popup) {
            popup.style.top = '50%';
            // Store the original color in a data attribute before changing it
            popup.dataset.originalColor = popup.style.backgroundColor;
            popup.style.backgroundColor = 'rgba(255, 255, 255, 1)'; /* Set background color opacity to 1 */
        }

        // Delay the hiding of the current popup
        setTimeout(() => {
            if (currentPopup) {
                currentPopup.style.top = '-100%';
                // Restore the original color when hiding the popup
                currentPopup.style.backgroundColor = currentPopup.dataset.originalColor;
            }
        }, 400); // Delay in milliseconds
    });
});
