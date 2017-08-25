(function monterailTestModule() {

'use strict'

$(document).ready(function() {

	moveQuery();
	$(window).on('resize', moveQuery);

});

function moveQuery() {
	if (window.matchMedia('(max-width: 630px)').matches) {
		let $query = $('.question-topic > .query');
		let $data = $('.answer-main > .answer-data');
		$query.parent().after($query);
		$data.each(function() {
			$(this).parent().parent().children('.answer-photo').append(this);
		});
	} else {
		let $query = $('.question-header > .query');
		let $data = $('.answer-photo > .answer-data');
		$('.is-asking').after($query);
		$data.each(function() {
			$(this).parent().parent().children('.answer-main').prepend(this);
		});
	}
}

})();