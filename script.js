document.addEventListener('DOMContentLoaded', function() {
    const departmentItems = document.querySelectorAll('.department-item');
    
    departmentItems.forEach(function(item) {
        item.addEventListener('click', function() {
            departmentItems.forEach(function(dept) {
                dept.classList.remove('active');
            });

            this.classList.add('active');
            
            const categoryContainers = document.querySelectorAll('.categories-container');
            categoryContainers.forEach(function(container) {
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
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});