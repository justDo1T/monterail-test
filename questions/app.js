(function monterailTestModule() {

'use strict'

$(document).ready(function() {

	// show/hide proper amount of divs on page load
	adjustDivs();
	// show/hide proper amount of divs on browser resize
	$(window).on('resize', adjustDivs);

});

function adjustDivs() {
	if (window.matchMedia('(max-width: 600px)').matches) {

		hideDivs(1);
	} else if (window.matchMedia('(max-width: 800px)').matches) {
		hideDivs(2);
	} else {
		showDivs();
	}
}

function hideDivs(leftDivs) {
	$('.question-article').each(function() {
		if ($(this).children('.activ-count').hasClass('hidden')) {
			if (leftDivs === 1) {
				$(this).children('.activ-count').removeClass('hidden');
			} else leftDivs++;
		}
		let $comment = $(this).children('.comment')
		let count = $comment.length;
		$comment.show();
		for (let i = 0; i < count-leftDivs; i++) {
			$comment.eq(i).hide();
		}
	});
}

function showDivs() {
	$('.question-article').each(function() {
		$(this).children('.comment').show();
	});
}

})();