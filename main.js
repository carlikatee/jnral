const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__container .about__flex", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// about us .show-more show-less
function toggleText() {
  const textElement = document.querySelector('.profile__text');
  const toggleButton = document.querySelector('.profile__toggle-btn');
  
  if (textElement.classList.contains('expanded')) {
    textElement.classList.remove('expanded');
    toggleButton.textContent = 'Read More';
  } else {
    textElement.classList.add('expanded');
    toggleButton.textContent = 'Show Less';
  }
}



// discover container
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card__content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});




// navToggle
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

function showSidebar() {
  document.querySelector('.sidebar').style.display = 'flex';
}
function hideSidebar() {
  document.querySelector('.sidebar').style.display = 'none';
}

// Swiper

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Autoplay configuration
  autoplay: {
    delay: 5000, // Time in milliseconds between slides (5 seconds here)
    disableOnInteraction: false, // Continue autoplay after user interactions
  },

  // Pagination configuration
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
      0: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      }
  }
});



// Popup 

document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("close-btn");

  // Automatically show the popup when the page loads
  popup.style.display = "block";
  document.body.classList.add("popup-open");

  // Close the popup when the close button is clicked
  closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
      document.body.classList.remove("popup-open");
  });

  // Close the popup when clicking outside of it
  window.addEventListener("click", function(event) {
      if (event.target === popup) {
          popup.style.display = "none";
          document.body.classList.remove("popup-open");
      }
  });
});

// Doctors 

