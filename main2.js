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
  
  

// blogs container
var cards = document.querySelectorAll('.card');
var btn = document.querySelector('.btn');
var currentImg = 2;

btn.addEventListener('click', function() {
    for (var i = currentImg; i < currentImg + 2; i++) {
        if (cards[i]) {
            cards[i].style.display = 'block';
        }
    }
    currentImg += 2;
    if (currentImg >= cards.length) {
        event.target.style.display = 'none';
    }
});



var readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var moreContent = this.previousElementSibling;
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            this.textContent = 'Read Less';
        } else {
            moreContent.style.display = 'none';
            this.textContent = 'Read More';
        }
    });
});

// Get all images within the card class
var images = document.querySelectorAll('.card img');

// Add a click event to each image
images.forEach(function(image) {
    image.addEventListener('click', function() {
        // Open the image in fullscreen
        if (this.requestFullscreen) {
            this.requestFullscreen();
        } else if (this.mozRequestFullScreen) { // For Firefox
            this.mozRequestFullScreen();
        } else if (this.webkitRequestFullscreen) { // For Chrome, Safari, and Opera
            this.webkitRequestFullscreen();
        } else if (this.msRequestFullscreen) { // For IE/Edge
            this.msRequestFullscreen();
        }
    });
});

// Exit fullscreen on click
document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) {
        document.exitFullscreen();
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.sub-nav a');
  const profileCards = document.querySelectorAll('.profile-card');
  let currentDepartment = 'all';  // Default department

  navLinks.forEach(link => {
      // Handle mouse enter event for hover
      link.addEventListener('mouseenter', () => {
          const department = link.getAttribute('data-department').trim().toLowerCase();

          if (department !== currentDepartment) {
              profileCards.forEach(card => {
                  if (department === 'all' || card.getAttribute('data-department').trim().toLowerCase() === department) {
                      card.style.display = 'block';
                  } else {
                      card.style.display = 'none';
                  }
              });
          }
      });

      // Handle click event to persist selection
      link.addEventListener('click', (event) => {
          event.preventDefault();  // Prevent default link behavior
          currentDepartment = link.getAttribute('data-department').trim().toLowerCase();
          profileCards.forEach(card => {
              if (currentDepartment === 'all' || card.getAttribute('data-department').trim().toLowerCase() === currentDepartment) {
                  card.style.display = 'block';
              } else {
                  card.style.display = 'none';
              }
          });
      });
  });

  // Optional: Reset to default on mouse leave if no click occurred
  const subNav = document.querySelector('.sub-nav');
  subNav.addEventListener('mouseleave', () => {
      profileCards.forEach(card => {
          if (card.getAttribute('data-department').trim().toLowerCase() === currentDepartment || currentDepartment === 'all') {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  });
});




