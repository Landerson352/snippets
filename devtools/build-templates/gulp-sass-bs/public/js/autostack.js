(function autostack() {
  function check() {
    var elements = document.querySelectorAll('.autostack');

    for(var i = 0; i < elements.length; i++) {
      var element = elements[i];

       // reset before overflow check
      if (element.style.flexDirection === 'column') {
        element.style.flexDirection = '';
      }
      // set fake width with left padding (see scrollWidth bug)
      var margin = parseInt(window.getComputedStyle(element.children[element.children.length-1])['margin-right']);
      element.style.width = (element.offsetWidth - margin) + 'px';

      // check for overflow
      if (element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth) {
        element.style.flexDirection = 'column';
      }
      // undo test width
      element.style.width = '';
    }

    // keep running, throttled to UI thread and max 10x per second
    // doing it this way accounts for resize, DOM mutations or anything else
    setTimeout(function() {
      window.requestAnimationFrame(check);
    }, 100);
  }

  check();
})();
