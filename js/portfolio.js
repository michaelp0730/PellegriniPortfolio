// portfolio.js
$(document).ready(function() {
	
	$('#pellegrini_link').css({'text-transform': 'uppercase'});
	$('#pellegrini_link').css({'color': '#20627C'});

	$('ul#portfolio_links li a').click(function(e) {
		e.preventDefault();
		$('ul#portfolio_links li a').css({'text-transform': 'none'});
		$('ul#portfolio_links li a').css({'color': '#26393D'});
		$(this).css({'text-transform': 'uppercase'});
		$(this).css({'color': '#20627C'});
	});

	$('#pellegrini_link').click(function(e) {
		e.preventDefault();
		$('#main section').fadeOut(0);
		$('#portfolio_pellegrini').fadeIn(1000);			
	});

	$('#pulpcore_link').click(function(e) {
		e.preventDefault();
		$('#main section').fadeOut(0);
		$('#portfolio_pulpcore').fadeIn(1000);
	});

	$('#seo_link').click(function(e) {
		e.preventDefault();
		$('#main section').fadeOut(0);
		$('#portfolio_seo').fadeIn(1000);			
	});

	$('#arturos_link').click(function(e) {
		e.preventDefault();
		$('#main section').fadeOut(0);
		$('#portfolio_arturos').fadeIn(1000);			
	});

	$('#hardy_link').click(function(e) {
		e.preventDefault();
		$('#main section').fadeOut(0);
		$('#portfolio_hardy').fadeIn(1000);			
	});

	$('#sidecar_link').click(function(e) {
		e.preventDefault();
		$('#main section').fadeOut(0);
		$('#portfolio_sidecar').fadeIn(1000);			
	});

});
