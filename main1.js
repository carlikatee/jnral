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
  
  
  
  
  // blogs container
  ScrollReveal().reveal(".blogs__card", {
    duration: 1000,
    interval: 400,
  });
  
  // journals container
  ScrollReveal().reveal(".journals__card", {
    ...scrollRevealOption,
    interval: 400,
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
  
  
  // Slide Picture About Us //
  let onSlide = false;
  
  window.addEventListener("load", () => {
      // Uncomment to enable auto slide
      autoslide();
  
      const dots = document.querySelectorAll(".carousel_dot");
      dots.forEach((dot, i) => {
          dot.addEventListener("click", () => slide(i));
      });
  
      const buttonPrev = document.querySelector(".carousel_button_prev");
      const buttonNext = document.querySelector(".carousel_button_next");
      buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
      buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
  });
  
  function autoslide() {
      setInterval(() => {
          slide(getItemActiveIndex() + 1);
      }, 3000); // slide speed = 3s
  }
  
  function slide(toIndex) {
      if (onSlide) return;
      onSlide = true;
  
      const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
      const itemActive = document.querySelector(".carousel_item_active");
      const itemActiveIndex = itemsArray.indexOf(itemActive);
  
      if (toIndex >= itemsArray.length) {
          toIndex = 0;
      } else if (toIndex < 0) {
          toIndex = itemsArray.length - 1;
      }
  
      const newItemActive = itemsArray[toIndex];
  
      // Start transition
      if (toIndex > itemActiveIndex) {
          newItemActive.classList.add("carousel_item_pos_next");
          setTimeout(() => {
              newItemActive.classList.add("carousel_item_next");
              itemActive.classList.add("carousel_item_next");
          }, 20);
      } else {
          newItemActive.classList.add("carousel_item_pos_prev");
          setTimeout(() => {
              newItemActive.classList.add("carousel_item_prev");
              itemActive.classList.add("carousel_item_prev");
          }, 20);
      }
  
      slideIndicator(toIndex);
  
      // Remove the transition class after the transition ends
      newItemActive.addEventListener("transitionend", () => {
          itemActive.className = "carousel_item";
          newItemActive.className = "carousel_item carousel_item_active";
          onSlide = false;
      }, {
          once: true
      });
  
      slideIndicator(toIndex);
  }
  
  function getItemActiveIndex() {
      const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
      const itemActive = document.querySelector(".carousel_item_active");
      return itemsArray.indexOf(itemActive);
  }
  
  function slideIndicator(toIndex) {
      const dots = document.querySelectorAll(".carousel_dot");
      const dotActive = document.querySelector(".carousel_dot_active");
      dotActive.classList.remove("carousel_dot_active");
      dots[toIndex].classList.add("carousel_dot_active");
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

// Function to show the video popup
function showVideoPopup() {
  document.getElementById("container_video").style.display = "flex";
}

// Function to hide the video popup
function hideVideoPopup() {
  document.getElementById("container_video").style.display = "none";
}

// Add event listener to the close button
document.querySelector(".close-btn").addEventListener("click", hideVideoPopup);

// Example: Show video popup on page load for demo purposes
window.onload = function () {
  showVideoPopup(); // Remove this if you don't want it to pop up on load
};


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

