document.addEventListener('DOMContentLoaded', function () {
    const departmentItems = document.querySelectorAll('.department-item');

    departmentItems.forEach(function (item) {
        item.addEventListener('click', function () {
            departmentItems.forEach(function (dept) {
                dept.classList.remove('active');
            });

            this.classList.add('active');

            const categoryContainers = document.querySelectorAll('.categories-container');
            categoryContainers.forEach(function (container) {
                container.classList.remove('active');
            });

            const departmentId = this.getAttribute('data-department');
            const relatedContainer = document.getElementById(departmentId);
            if (relatedContainer) {
                relatedContainer.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById("mobileMenuToggle");
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("menuOverlay");
    const icon = document.getElementById("menuIcon");

    new MetisMenu("#metisMenu");

    toggle.addEventListener("click", () => {
        const isActive = menu.classList.toggle("active");
        overlay.classList.toggle("active");

        icon.classList.toggle("fa-bars", !isActive);
        icon.classList.toggle("fa-times", isActive);
    });

    overlay.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    });
});

const lancamentosSwiper = new Swiper('.lancamentos-swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            navigation: {
                enabled: false,
            },
        },
        768: {
            slidesPerView: 2,
            navigation: {
                enabled: false,
            },
        },
        769: {
            slidesPerView: 3,
            navigation: {
                enabled: true,
            },
        },
        1024: {
            slidesPerView: 4,
            navigation: {
                enabled: true,
            },
        },
    },
});

document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');

            header.classList.toggle('active');
            content.classList.toggle('active');
        });
    });
});