var contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const message = (document.getElementById('message') as HTMLTextAreaElement).value;

        // Store values in an objectcdq
        const formData = {
            name: name,
            email: email,
            message: message
        };

        console.log(formData);

        // Simulate form submission
        setTimeout(() => {
            // Show success alert message
            alert('Form submitted successfully!');
            // Reload the page after showing alert
            window.location.reload();
        }, 1000); // Simulating delay to mimic form submission process
    });
} else {
    console.error('Contact form not found');
}
