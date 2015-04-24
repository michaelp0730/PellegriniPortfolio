$(document).ready(function(e) {
    
	$('#portfolio').hover(function(){
		$(this).css({'background':'url(img/nav_orange_outleft.png)', 'textDecoration':'underline'})
	}, function(){
		$(this).css({'background':'url(img/nav_blue_outleft.png)', 'textDecoration':'none'})
	});
	
	$('#resume').hover(function(){
		$(this).css({'background':'url(img/nav_orange_middle.png)', 'textDecoration':'underline'})
	}, function(){
		$(this).css({'background':'url(img/nav_blue.png)', 'textDecoration':'none'})
	});
	
	$('#freelance').hover(function(){
		$(this).css({'background':'url(img/nav_orange_middle.png)', 'textDecoration':'underline'})
	}, function(){
		$(this).css({'background':'url(img/nav_blue.png)', 'textDecoration':'none'})
	});
	
	$('#contact').hover(function(){
		$(this).css({'background':'url(img/nav_orange_outright.png)', 'textDecoration':'underline'})
	}, function(){
		$(this).css({'background':'url(img/nav_blue_outright.png)', 'textDecoration':'none'})
	});
});