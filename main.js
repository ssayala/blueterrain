var blue = (function($) {
	var my = { };
	my.init = function() {
		$("#logodiv").fadeIn('slow');
	};
	return my;
}(jQuery))

$(document).ready(function () {
	blue.init();
});
