$(document).ready(function($) {
		//Menu animation						
		$('#navList ul').css({display: "none"}); //Fix Opera
  		
		$('#navList li').hover(function() {  
		$(this).find('a').stop().animate({'width' : "140"});
   		$(this).find('ul:first').css({visibility : "visible", display : "none"}).show(400);
    
  		}, function() {
    		$(this).find('ul:first').css({visibility : "hidden"}).hide(400);
   			$(this).find('a').stop().animate({'width' : "130"});
	});
});