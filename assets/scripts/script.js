jQuery("#backtotop").click(function(){
	jQuery("body,html").animate({
		scrollTop:0
	},600);
});

jQuery(window).scroll(function(){
	if(jQuery(window).scrollTop() > 1000)
	{
		jQuery("#backtotop").addClass("visible");
	}
	else
	{
		jQuery("#backtotop").removeClass("visible");
	}
});
        