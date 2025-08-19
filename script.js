document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const html = document.documentElement;

    // Check for theme in local storage on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.classList.add(savedTheme);
    } else {
        // Default to dark mode if no preference is saved
        html.classList.add('dark');
    }

    // Function to update the icons based on the current theme
    function updateThemeIcons() {
        if (html.classList.contains('light')) {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        }
    }
    
    // Set initial state on load
    updateThemeIcons();

    // Handle theme toggle
    toggleButton.addEventListener('click', () => {
        if (html.classList.contains('light')) {
            html.classList.remove('light');
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
        updateThemeIcons();
    });
});
