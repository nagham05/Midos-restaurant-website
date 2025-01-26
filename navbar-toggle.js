document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('#navbar');
    const body = document.body;

    if (navbar.classList.contains('active') && !navbar.contains(event.target) && !toggleButton.contains(event.target)) {
        navbar.classList.remove('active');
        body.classList.remove('navbar-open');
        console.log("Navbar closed due to outside click.");
    }
    
    if (!toggleButton) {
        console.error("Toggle button (.menu-toggle) not found.");
        return;
    }
    if (!navbar) {
        console.error("Navbar (#navbar) not found.");
        return;
    }

    console.log("Toggle button and navbar successfully found.");

    toggleButton.addEventListener('click', () => {
        console.log("Toggle button clicked.");

        navbar.classList.toggle('active');

        if (navbar.classList.contains('active')) {
            console.log("Navbar is now visible (active class added).");
            body.classList.add('navbar-open');

        } else {
            console.log("Navbar is now hidden (active class removed).");
            body.classList.remove('navbar-open');
        }
    });
});