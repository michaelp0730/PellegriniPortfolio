$(document).ready(function(e) {
    $.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    	});
	}
	
	// Usage:

$(['img/nav_blue_outleft.png','img/nav_orange_outleft.png', 'img/nav_blue.png', 'img/nav_orange_middle', 'img/nav_blue_outright.png', 'img/nav_orange_outright.png', 'img/stamp_web_design.png', 'img/stamp_development.png', 'img/stamp_seo.png']).preload();

});