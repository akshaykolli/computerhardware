// Function to add smooth scrolling behavior to anchor links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Function to add a fade-in effect to elements when they come into view
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Function to highlight the navigation link corresponding to the current section
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === currentSection) {
            link.classList.add("active");
        }
    });
});

// Function to smoothly scroll back to the top of the page
const scrollToTopButton = document.getElementById("scroll-to-top");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});