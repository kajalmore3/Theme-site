    
    
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


  // // accepting cookies
  // window.onload = function () {
  //   var cookiePopup = document.getElementById("cookie-popup");
  //   var acceptButton = document.getElementById("cookie-accept");
  //   var declineButton = document.getElementById("cookie-decline");
  
  //   // Check if the user has previously accepted or declined cookies
  //   var cookieStatus = getCookie("cookieStatus");
  //   if (cookieStatus === "accepted" || cookieStatus === "declined") {
  //     cookiePopup.style.display = "none"; // Hide the popup if cookies are previously accepted or declined
  //   } else {
  //     cookiePopup.style.display = "block"; // Show the popup if cookies are not previously accepted or declined
  //   }
  
  //   acceptButton.onclick = function () {
  //     cookiePopup.style.display = "none"; // Hide the popup
  //     setCookie("cookieStatus", "accepted", 365); // Set cookie status as accepted for 1 year
  //     storeUserData(); // Store user data
  //   };
  
  //   declineButton.onclick = function () {
  //     cookiePopup.style.display = "none"; // Hide the popup
  //     setCookie("cookieStatus", "declined", 365); // Set cookie status as declined for 1 year
  //     storeIPAddress(); // Store IP address only
  //   };
  
  //   function storeUserData() {
  //     // Store user agent
  //     var userAgent = navigator.userAgent;
  //     var userAgentExpiration = new Date();
  //     userAgentExpiration.setTime(userAgentExpiration.getTime() + (365 * 24 * 60 * 60 * 1000)); // Set expiration time to 1 year from now
  //     document.cookie = "userAgent=" + encodeURIComponent(userAgent) + "; expires=" + userAgentExpiration.toUTCString() + "; path=/";
  
  //     // Fetch user's IP address and store in cookie
  //     fetch('https://api.ipify.org?format=json')
  //       .then(response => response.json())
  //       .then(data => {
  //         var ipAddressExpiration = new Date();
  //         ipAddressExpiration.setTime(ipAddressExpiration.getTime() + (365 * 24 * 60 * 60 * 1000)); // Set expiration time to 1 year from now
  //         document.cookie = "ipAddress=" + data.ip + "; expires=" + ipAddressExpiration.toUTCString() + "; path=/";
  //       })
  //       .catch(error => console.error(error));
  
  //     // Fetch user's geolocation and store in cookie
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(function (position) {
  //         var locationExpiration = new Date();
  //         locationExpiration.setTime(locationExpiration.getTime() + (365 * 24 * 60 * 60 * 1000)); // Set expiration time to 1 year from now
  //         document.cookie = "geolocation=" + position.coords.latitude + "," + position.coords.longitude + "; expires=" + locationExpiration.toUTCString() + "; path=/";
  //       });
  //     }
  //   }
  
  //   function storeIPAddress() {
  //     // Fetch user's IP address and store in cookie
  //     fetch('https://api.ipify.org?format=json')
  //       .then(response => response.json())
  //       .then(data => {
  //         var ipAddressExpiration = new Date();
  //         ipAddressExpiration.setTime(ipAddressExpiration.getTime() + (365 * 24 * 60 * 60 * 1000)); // Set expiration time to 1 year from now
  //         document.cookie = "ipAddress=" + data.ip + "; expires=" + ipAddressExpiration.toUTCString() + "; path=/";
  //       })
  //       .catch(error => console.error(error));
  //   }
  
  //   function setCookie(name, value, days) {
  //     var expires = "";
  //     if (days) {
  //       var date = new Date();
  //       date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  //       expires = "; expires=" + date.toUTCString();
  //     }
  //     document.cookie = name + "=" + encodeURIComponent(value || "") + expires + "; path=/";
  //   }
  
  //   function getCookie(name) {
  //     var nameEQ = name + "=";
  //     var ca = document.cookie.split(';');
  //     for (var i = 0; i < ca.length; i++) {
  //       var c = ca[i];
  //       while (c.charAt(0) == ' ') c = c.substring(1, c.length);
  //       if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  //     }
  //     return "";
  //   }
  // };


  // popup

  document.getElementById("popup-trigger").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
  });
  
  document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });
  

  