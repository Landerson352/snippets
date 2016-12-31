// issue: https://github.com/webpop/jquery.pin/pull/50
// resolve: Use jQuery 2.4 or patched branch

const PINNED_SELECTOR = '.pinned';
const CONTAINER_SELECTOR = '.pinned-parent';

const pin = () => {
	$(PINNED_SELECTOR).pin({containerSelector: CONTAINER_SELECTOR});
};

const unpin = () => {
	$(PINNED_SELECTOR)
		.attr('style', '')
		.removeData('pin');
};

const repin = () => {
	unpin();
	pin();
	$(window).trigger('scroll');
};

pin();
$(window).on('resize', repin);