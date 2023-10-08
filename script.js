// script.js
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        // Dark mode
        body.classList.add('dark-mode');
    } else {
        // Light mode
        body.classList.remove('dark-mode');
    }
});
