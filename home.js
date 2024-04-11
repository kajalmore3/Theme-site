    
    
 document.addEventListener("DOMContentLoaded", function() {
    document.documentElement.addEventListener("touchstart", function(event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    }, false);
  
    var header = document.querySelector('.lb_header');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY >= 100) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    });
  
    var menuBurger = document.querySelector('.menuburger');
    var nav = document.querySelector('nav');
  
    if (menuBurger && nav) {
      menuBurger.addEventListener('click', function() {
        nav.classList.toggle('open');
      });
  
      var navLinks = nav.querySelectorAll('a');
      navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          nav.classList.remove('open');
        });
      });
    }
  });   
    document.addEventListener('DOMContentLoaded', function() {
        var burgerIcon = document.querySelector('.menuburger');
        var navMenu = document.querySelector('.lb_header nav');
        var navLinks = document.querySelectorAll('.lb_header nav ul li a');

        burgerIcon.addEventListener('click', function() {
            toggleMenu();
        });

        // Function to toggle menu visibility
        function toggleMenu() {
            if (navMenu.style.display === 'none' || navMenu.style.display === '') {
                navMenu.style.display = 'block';
            } else {
                navMenu.style.display = 'none';
            }
        }

        // Close menu when a link is clicked
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.style.display = 'none';
            });
        });
    });
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.lb_header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

function copyToClipboard(sourceId, targetId, successIconId, copyIconId) {
    var sourceElement = document.getElementById(sourceId);

    if (!sourceElement) {
      console.error('Source element not found.');
      return;
    }
 var tempInput = document.createElement('input');
    tempInput.value = sourceElement.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    var successIcon = document.getElementById(successIconId);
    var copyIcon = document.getElementById(copyIconId);

    if (successIcon && copyIcon) {
      copyIcon.style.display = 'none'; // Hide the fa-copy icon

      successIcon.style.display = 'inline';
      setTimeout(function () {
        successIcon.style.display = 'none';
        copyIcon.style.display = 'inline'; // Show the fa-copy icon after 2 seconds
      }, 2000);
    }
  }

