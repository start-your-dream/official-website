function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// JavaScript to handle loader and show main content
window.addEventListener('load', function () {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  const mainContent = document.getElementById('main-content');

  // Hide loader and show main content after 3 seconds
  setTimeout(() => {
      loaderWrapper.style.display = 'none'; // Hide the loader
      mainContent.style.display = 'block'; // Show the main content
  }, 2000); // Adjust this time as needed
});


particlesJS('particles-js-1', {
    particles: {
      number: {
        value: 290,
      },
      color: {
        value: '#d450e3',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 20,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'auto',
        outMode: 'in',
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'push',
        },
      },
    },
  });
  
  particlesJS('particles-js-2', {
    particles: {
      number: {
        value: 310,
      },
      color: {
        value: '#4dbcd4',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 20,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        outMode: 'in',
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'push',
        },
      },
    },
  });
  
  particlesJS('particles-js-3', {
    particles: {
      number: {
        value: 330,
      },
      color: {
        value: '#cfcd45',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 20,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'auto',
        outMode: 'in',
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'push',
        },
      },
    },
  });
