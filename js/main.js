// Navbar
function openNav() {
    document.getElementById("mySidenav").style.width = "230px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

jQuery(function () {
    // Add the 'active' class to the navbar element when the page loads
    jQuery('.navbar-list').addClass('active');

    // Loop through each anchor tag in the navbar
    jQuery('.navbar-list a').each(function () {
        // Check if the href attribute of the anchor tag matches the current page URL
        if (jQuery(this).prop('href') === window.location.href) {
            // If it matches, add the 'active' class to the anchor tag and its parent list item
            jQuery(this).addClass('active');
            jQuery(this).parents('li').addClass('active');
        }
    });
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


