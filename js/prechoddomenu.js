$(document).ready(function() {
	$(".prechodmenu").click(function() {
		$("body").css("overflow", "hidden");
		$(".menu1").animate({
			top: '0%'
		});

		$(".menu2").animate({
			bottom: '0%'
		});
		setTimeout(function() {
			window.location.href = "../index.html";
		}, 500);
	});
});
$(document).ready(function() {
	$(".prechodstranka1").click(function() {
		$("body").css("overflow", "hidden");
		$(".prechodstrankactverec").animate({
			top: '0%'
		});
		setTimeout(function() {
			window.location.href = "../a/index.html";
		}, 500);
	});
});
$(document).ready(function() {
	$(".prechodstranka2").click(function() {
		$("body").css("overflow", "hidden");
		$(".prechodstrankactverec").animate({
			top: '0%'
		});
		setTimeout(function() {
			window.location.href = "../b/index.html";
		}, 500);
	});
});
$(document).ready(function() {
	$(".prechodstranka3").click(function() {
		$("body").css("overflow", "hidden");
		$(".prechodstrankactverec").animate({
			top: '0%'
		});
		setTimeout(function() {
			window.location.href = "../c/index.html";
		}, 500);
	});
});
$(document).ready(function() {
	$(".prechodstranka4").click(function() {
		$("body").css("overflow", "hidden");
		$(".prechodstrankactverec").animate({
			top: '0%'
		});
		setTimeout(function() {
			window.location.href = "../d/index.html";
		}, 500);
	});
});
$(document).ready(function() {
	$(".prechodstranka5").click(function() {
		$("body").css("overflow", "hidden");
		$(".prechodstrankactverec").animate({
			top: '0%'
		});
		setTimeout(function() {
			window.location.href = "../e/index.html";
		}, 500);
	});
});