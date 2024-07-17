/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


  const fadeInSections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  });
  
  fadeInSections.forEach(fadeInSection => {
    observer.observe(fadeInSection);
  });
  

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

document.getElementById("back-to-top").addEventListener("click", function(event) {
  event.preventDefault();
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});


document.getElementById('mode-toggle-unique').addEventListener('click', function () {
  document.body.classList.toggle('light-mode-unique');
  document.body.classList.toggle('dark-mode-unique');
  const icon = this.querySelector('i');
  if (document.body.classList.contains('light-mode-unique')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
  } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
  }
});
