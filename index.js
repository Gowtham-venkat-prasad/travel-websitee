// Dynamic Background with GSAP
gsap.to("header", {
    duration: 5,
    backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Explore+New+Worlds')",
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// conformation Page
// Dynamic Background Color
function setDynamicBackground() {
    const hours = new Date().getHours();
    const body = document.body;

    // Set different background colors based on time of day
    if (hours >= 6 && hours < 12) {
        body.classList.add("dynamic-bg");
    } else if (hours >= 12 && hours < 18) {
        body.style.backgroundColor = "#FFDF00"; // Afternoon color
    } else {
        body.style.backgroundColor = "#2C3E50"; // Evening color
    }
}

// Generate Seats
const seatsContainer = document.querySelector('.seats');
for (let i = 1; i <= 25; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.textContent = i;
    if (Math.random() < 0.2) seat.classList.add('occupied'); // Randomly mark some seats as occupied
    seatsContainer.appendChild(seat);
}

// Seat Selection
const seats = document.querySelectorAll('.seat:not(.occupied)');
let selectedSeats = [];

seats.forEach((seat) => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('selected')) {
            seat.classList.add('selected');
            selectedSeats.push(seat.textContent);
        } else {
            seat.classList.remove('selected');
            selectedSeats = selectedSeats.filter((s) => s !== seat.textContent);
        }
    });
});

// Pay Now Button
const payNowBtn = document.querySelector('.pay-now-btn');
payNowBtn.addEventListener('click', () => {
    if (selectedSeats.length > 0) {
        alert(
            `Thank you for booking! You selected seat(s): ${selectedSeats.join(
                ', '
            )}. Total price is ₹500/-.`
        );
    } else {
        alert('Please select at least one seat before proceeding.');
    }
});

// Set dynamic background when the page loads
setDynamicBackground();

// Reviews page 
// Optional JavaScript for additional effects or controls (such as pause or reset) for animation
document.addEventListener('DOMContentLoaded', function () {
    // You can add custom controls to stop or reset the scrolling here if needed.
});

// About-Us-Page
// Optional JavaScript for additional effects or functionality
document.addEventListener('DOMContentLoaded', function () {
    // Example of adding animations or controlling button clicks
});



// contact Page Starts
// Form validation and animations
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent page reload on form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert('Thank you for reaching out! We will get back to you shortly.');
        document.getElementById('contact-form').reset(); // Reset the form fields
    } else {
        alert('Please fill in all fields.');
    }
});

// Toll-Free Banner Animation (appears when user scrolls)
let tollFreeBanner = document.getElementById('toll-free-banner');
let isBannerVisible = false;

window.addEventListener('scroll', function() {
    if (window.scrollY > 200 && !isBannerVisible) {
        tollFreeBanner.style.display = 'block';
        setTimeout(function() {
            tollFreeBanner.style.opacity = '1';
            tollFreeBanner.style.transform = 'translateY(0)';
        }, 100);
        isBannerVisible = true;
    } else if (window.scrollY <= 200 && isBannerVisible) {
        tollFreeBanner.style.opacity = '0';
        tollFreeBanner.style.transform = 'translateY(20px)';
        setTimeout(function() {
            tollFreeBanner.style.display = 'none';
        }, 500);
        isBannerVisible = false;
    }
});





