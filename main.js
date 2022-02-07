(function(window,document) {
  'use strict';

  const toggles = document.querySelectorAll('.toggle');
  const togglebtn = document.querySelector('#toggle-btn')

  togglebtn.addEventListener('click', () => {
    toggleElements();
  });

  window.addEventListener('resize', () => {
    if(window.innerWidth > 1024) {
      offElements();
    }
  })

  function toggleElements() {
    [].forEach.call(toggles, function(toggle) {
      toggle.classList.toggle('on');
    });
  }

  function offElements() {
    [].forEach.call(toggles, function(toggle) {
      toggle.classList.remove('on');
    });
  }
})(window,document)