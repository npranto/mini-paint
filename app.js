$(document).ready( function (){
	var color = "white";
	var colors = "red green yellow blue white";

	$(".box").on("click", function(){
		$(this).addClass(color);
	});

	$(".box").on("dblclick", function(){
		$(this).removeClass(color);
	});

	$("#red").on("click", function(){
		color = "red";
	});

	$("#green").on("click", function(){
		color = "green";
	});

	$("#yellow").on("click", function(){
		color = "yellow";
	});

	$("#white").on("click", function(){
		color = "white";
	});

	$("#blue").on("click", function(){
		color = "blue";
	});

	$("#reset").on("dblclick", function(){
		$(".box").removeClass(colors);
	});
	
});