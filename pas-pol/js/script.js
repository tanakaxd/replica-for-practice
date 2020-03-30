$(function(){
	var $win = $( window );
	var $toggle = $("#nav-item-open");
	var $header = $(".header-nav-md");

	$toggle.click(function(){
		if($header.hasClass("open")){
			$header.removeClass("open");
		}else{
			$header.addClass("open");

		}
	})
});