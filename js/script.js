    // script.js

    document.addEventListener('DOMContentLoaded', () => {
        // Smooth scrolling for navigation links
        const links = document.querySelectorAll('nav ul li a');
        const navToggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('nav');

        navToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').split('.html')[0];
                const targetSection = document.querySelector(`#${targetId}`);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                } else {
                    // If the section doesn't exist, navigate to the page
                    window.location.href = this.getAttribute('href');
                }
            });
        });

        // Carousel Functionality
        const carouselContainer = document.querySelector('.carousel-container');
        const carouselSlides = document.querySelectorAll('.carousel-slide');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentIndex = 0;

        function updateCarousel() {
            const slideWidth = carouselSlides[0].clientWidth;
            carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? carouselSlides.length - 1 : currentIndex - 1;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex === carouselSlides.length - 1) ? 0 : currentIndex + 1;
            updateCarousel();
        });

        window.addEventListener('resize', updateCarousel);
        updateCarousel();
    });