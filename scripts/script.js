document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links (optional enhancement)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default behavior if it's an internal link
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Testimonial Carousel Auto-Scroll (example of a simple JS feature)
    const testimonialCarousel = document.getElementById('testimonialCarousel');
    if (testimonialCarousel) {
        const testimonialItems = testimonialCarousel.querySelectorAll('.testimonial-item');
        let currentIndex = 0;

        const scrollCarousel = () => {
            if (testimonialItems.length === 0) return;

            currentIndex = (currentIndex + 1) % testimonialItems.length;
            const itemWidth = testimonialItems[0].offsetWidth + 30; // Item width + margin-right
            testimonialCarousel.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth'
            });
        };

        // Auto-scroll every 5 seconds (adjust as needed)
        // You might want to add pause-on-hover functionality for better UX
        setInterval(scrollCarousel, 5000);
    }

    // Add any other interactive JavaScript functionalities here.
    // Examples:
    // - Form validation
    // - Dynamic content loading
    // - Interactive elements (sliders, accordions, etc.)
    // - API calls (e.g., for exchange rates, branch locations)
});