document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }

    // Mouse Follow Animation
    const mouseCircle = document.createElement('div');
    mouseCircle.className = 'mouse-follower';
    document.body.appendChild(mouseCircle);

    document.addEventListener('mousemove', (e) => {
        mouseCircle.style.transform = `translate(${e.pageX - 10}px, ${e.pageY - 10}px)`;
    });

    // Image URLs for each row
    const imageUrls = [
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSa5U7Ki2mPqZ3z7l4GbwP-eNIk_72hx5iisqrFpRcbBPP0YYZe5BxWiXJvvYFBjseJK5N4MYNm2zTTrXZA3et1nravuhvJHq6AjAZznmyOQOsLv0_nhd73yg&usqp=CAE', // Computer Case
        'https://i.ebayimg.com/images/g/IbcAAOSwmCZkdRvD/s-l1200.jpg', // Motherboard
        'https://media.rs-online.com/image/upload/v1482271782/F6258801-01.jpg', // Microprocessor (CPU)
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQ0PXK-2-zGWcCHqVcqrhWQfwNFdcVn3CTQ&s', // Power Supply Unit (SMPS)
        'https://i.ebayimg.com/images/g/XbkAAOxyfpJSVLrF/s-l1600.jpg', // RAM
        'https://m.media-amazon.com/images/I/61vp07ELQqL._AC_UF894,1000_QL80_.jpg', // Graphics Card
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Laptop-hard-drive-exposed.jpg/800px-Laptop-hard-drive-exposed.jpg' // Hard Disk
    ];

    // Image Popup on Table Button Click with Modal
    const tableRows = document.querySelectorAll('table tr:not(:first-child)');
    tableRows.forEach((row, index) => {
        const existingButton = row.querySelector('button');
        if (existingButton) {
            existingButton.remove();
        }

        const button = document.createElement('button');
        button.textContent = 'Show Image';
        button.style.marginLeft = '10px';
        row.cells[1].appendChild(button);

        button.addEventListener('click', () => {
            openModal(imageUrls[index]);
        });
    });

    // Create and handle modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    document.body.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);

    const closeModalButton = document.createElement('span');
    closeModalButton.className = 'close';
    closeModalButton.innerHTML = '&times;';
    modalContent.appendChild(closeModalButton);

    closeModalButton.addEventListener('click', closeModal);

    function openModal(imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        modalContent.appendChild(img);
        modal.style.display = 'flex';
    }

    function closeModal() {
        const img = modalContent.querySelector('img');
        if (img) {
            img.remove();
        }
        modal.style.display = 'none';
    }

    // Change subtitle color on hover
    const subtitles = document.querySelectorAll('main h2');
    subtitles.forEach((subtitle) => {
        subtitle.style.transition = 'color 0.3s ease';
        subtitle.addEventListener('mouseenter', () => {
            subtitle.style.color = '#ff5733'; // Change color to a different shade
        });
        subtitle.addEventListener('mouseleave', () => {
            subtitle.style.color = ''; // Reset to original color
        });
    });

    // Typewriter Effect
    const header = document.querySelector('header h1');
    header.classList.add('typewriter');

    // Section Reveal on Scroll
    const sections = document.querySelectorAll('main section');
    const revealSection = (entries, observer) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
