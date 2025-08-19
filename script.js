const portfolioApp = (function() {
    // Private variables and functions, not accessible from outside the module
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');
    const toggleButton = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Private function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
        console.log('Name:', document.getElementById('name').value);
        console.log('Email:', document.getElementById('email').value);
        console.log('Message:', document.getElementById('message').value);

        messageDiv.classList.remove('hidden');
        form.reset();

        setTimeout(() => {
            messageDiv.classList.add('hidden');
        }, 5000);
    };

    // Private function to handle theme toggling
    const handleThemeToggle = () => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    };

    // This is the public API of the module
    const init = () => {
        form.addEventListener('submit', handleFormSubmit);
        toggleButton.addEventListener('click', handleThemeToggle);
    };

    // Return the public API
    return {
        init: init
    };
})();

// Initialize the application on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    portfolioApp.init();
});
