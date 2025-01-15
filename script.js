var contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        // Store values in an objectcdq
        var formData = {
            name: name,
            email: email,
            message: message
        };
        console.log(formData);
        // Simulate form submission
        setTimeout(function () {
            // Show success alert message
            alert('Form submitted successfully!');
            // Reload the page after showing alert
            window.location.reload();
        }, 1000); // Simulating delay to mimic form submission process
    });
}
else {
    console.error('Contact form not found');
}
