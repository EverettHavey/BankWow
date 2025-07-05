document.addEventListener('DOMContentLoaded', () => {
    // --- Common Functions for All Pages ---

    // Smooth scrolling for internal navigation links (optional enhancement)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Check if it's an internal hash link on the *same page*
            if (href.startsWith('#') && window.location.pathname.endsWith(href.split('#')[0] || 'index.html')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // For external links (e.g., to accounts.html), let default behavior happen
        });
    });

    // --- Home Page Specific Script (Testimonial Carousel) ---
    const testimonialCarousel = document.getElementById('testimonialCarousel');
    if (testimonialCarousel) { // Only run if the element exists on the page
        const testimonialItems = testimonialCarousel.querySelectorAll('.testimonial-item');
        let currentIndex = 0;

        const scrollCarousel = () => {
            if (testimonialItems.length === 0) return;

            currentIndex = (currentIndex + 1) % testimonialItems.length;
            // Ensure proper width calculation including margin
            const itemWidth = testimonialItems[0].offsetWidth +
                             parseFloat(getComputedStyle(testimonialItems[0]).marginRight) +
                             parseFloat(getComputedStyle(testimonialItems[0]).marginLeft);
            testimonialCarousel.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth'
            });
        };

        // Auto-scroll every 5 seconds
        setInterval(scrollCarousel, 5000);
    }

    // --- Services Page Specific Script (FAQ Accordion) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.icon');

            // Toggle active class on header
            header.classList.toggle('active');

            // Toggle display of content
            if (content.style.display === "block") {
                content.style.display = "none";
                icon.style.transform = 'rotate(0deg)'; // Close icon
            } else {
                // Close other open accordions
                document.querySelectorAll('.accordion-content').forEach(otherContent => {
                    if (otherContent !== content && otherContent.style.display === "block") {
                        otherContent.style.display = "none";
                        otherContent.previousElementSibling.classList.remove('active');
                        otherContent.previousElementSibling.querySelector('.icon').style.transform = 'rotate(0deg)';
                    }
                });
                content.style.display = "block";
                icon.style.transform = 'rotate(45deg)'; // Open icon
            }
        });
    });

    // --- Contact Page Specific Script (Form Submission - Client-side only) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Basic validation (you'd need more robust validation for a real site)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            // In a real application, you'd send this data to a server using fetch() or XMLHttpRequest
            console.log('Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset(); // Clear the form
        });
    }
});