$(function() {

	// var user = Cookies.get("TestKey");
	// if (typeof user !== 'undefined') {
	// 	$("#banner").html("<h1>Welcome Back " + user + "!<h1>");
	// };

	// $("#myForm").submit(function(e) {
	// 	e.preventDefault();

	// })

	var name = Cookies.get('name');
	if (name) {
		$("#banner").html("<h1>Welcome back " + name +"</h1>");
	} else {
		$("#banner").html("<h1>Welcome.</h1>");
	};

	$("#myForm").submit(function(e) {
		e.preventDefault();
		var name = $("#nameField").val();
		Cookies.set("name", name);
	})

})






