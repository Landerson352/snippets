(function() {
	var body = $('body');
	var content = $('.js-content-wrap');
	var openButton = $( '.js-open-button' );
	var closeButton =$( '.js-close-button' );
	var isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openButton.on( 'click', toggleMenu );
		closeButton.on( 'click', toggleMenu );

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.on( 'click', function(e) {
			if( isOpen && e.target !== openButton ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		body.toggleClass('show-menu');
		isOpen = !isOpen;
	}

	init();
})();