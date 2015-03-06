$(function() {

	var visited = Cookies.get('visited');
	if (visited !== "true") {
		$("#box").animate({
			opacity: 0.25
		});
		Cookies.set('visited', true);
	} else {

		console.log("already visited, no animate.")
	};


})