'use strict'

onLoad(function nav() {
	
	// nav variables used to check the url
	var url = window.location.href,
	resume = url.indexOf('resume'),
	about = url.indexOf('about'),
	contact = url.indexOf('contact'),
	process = url.indexOf('process');


	if (resume !== -1) {
		$('#nav_resume a').css({'text-transform': 'uppercase'});
	} else if (about !== -1) {
		$('#nav_about a').css({'text-transform': 'uppercase'});
	} else if (contact !== -1) {
		$('#nav_contact a').css({'text-transform': 'uppercase'});
	} else if (process !== -1) {
		$('#nav_contact a').css({'text-transform': 'uppercase'});
	} else {
		$('#nav_index a').css({'text-transform': 'uppercase'});
	}

});