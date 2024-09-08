$(document).ready(function(){
    // Initialize the carousel
    $('.carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 700,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Toggle the navigation menu
function toggleNav() {
    const sideNav = document.getElementById("sideNav");
    if (sideNav.style.right === "0px") {
        sideNav.style.right = "-250px";
    } else {
        sideNav.style.right = "0";
    }
}

document.addEventListener('click', function(event) {
    const sideNav = document.getElementById("sideNav");
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    // Check if the clicked element is inside the side navigation or hamburger menu
    if (!sideNav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        sideNav.style.right = "-250px"; // Close the menu
    }
});