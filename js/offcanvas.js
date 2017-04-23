// https://tympanus.net/codrops/2014/09/16/off-canvas-menu-effects/

(function($, document) {

  $(function() {
    var doc = $(document);
  	var body = $(document.body);
  	var content = '.js-content-wrap';
  	var openButton = '.js-open-button';
  	var closeButton = '.js-close-button';
  	var isOpen = false;

  	function init() {
  		initEvents();
  	}

  	function initEvents() {
      console.log(doc);
  		doc.on( 'click', openButton, toggleMenu );
  		doc.on( 'click', closeButton, toggleMenu );

  		// close the menu element if the target it´s not the menu element or one of its descendants..
  		doc.on( 'click', content, function(e) {
  			if( isOpen && !$(e.target).is(openButton) ) {
  				toggleMenu();
  			}
  		} );
  	}

  	function toggleMenu() {
  		body.toggleClass('show-menu');
  		isOpen = !isOpen;
  	}

  	init();
  });

})(window.jQuery, window.document);
