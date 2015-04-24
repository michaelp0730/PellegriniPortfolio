$(document).ready(function() {
    'use strict';

	// Show the Pellegrini Portfolio project by default
	$('#portfolio-pellegrini').show(0);

	// Add the 'sub-nav-active' class to the clicked sub-nav link
	$('.sub-nav-link').click(function(e) {
        e.preventDefault();
		$('.sub-nav-link').removeClass('sub-nav-active');
        $(this).addClass('sub-nav-active');
	});

    // Sub-nav click handlers
    function portfolioLink(link, container) {
        $(link).click(function(e) {
            e.preventDefault();
            $('.portfolio-item').hide(0);
            $(container).fadeIn(1000);
        });
    }
    portfolioLink('#nav-pellegrini-page', '#portfolio-pellegrini');
    portfolioLink('#nav-pulpcore', '#portfolio-pulpcore');
    portfolioLink('#nav-seo', '#portfolio-seo');
    portfolioLink('#nav-arturos', '#portfolio-arturos');
    portfolioLink('#nav-hardy', '#portfolio-hardy');
    portfolioLink('#nav-sidecar', '#portfolio-sidecar');


    // Check URL and display sub-nav on home page
    function checkURL() {
        var url     = window.location.href,
            resume  = url.indexOf('resume'),
            about   = url.indexOf('about'),
            contact = url.indexOf('contact'),
            process = url.indexOf('process');

        // Home Page
        if (resume === -1 && about === -1 && contact === -1 && process === -1) {

            // Make the portfolio link uppercase
            $('#nav-portfolio').addClass('uppercase');

            // show the subnav
            $('div.row4 nav').removeClass('invisible');

        }

        // Capitalize the correct page link
        function navCap(pg, el) {
            if (pg !== -1) {
                $(el).addClass('uppercase');
            }
        }
        navCap(resume, '#nav-resume');
        navCap(about, '#nav-about');
        navCap(contact, '#nav-contact');
        navCap(process, '#nav-contact');
    }
    checkURL();


    // Form Validation
    $('#contact-form').submit(function() {
        var name    = $('#name').val(),
            email   = $('#email').val(),
            atPos   = email.indexOf('@'),
            dotPos  = email.lastIndexOf('.'),
            message = $('#message').val();


        if (name === '' || name === null) {
            $('#name').val('Please enter your name').addClass('error');
            return false;
        }

        if (email === '' || email === null || atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.length) {
            $('#email').val('Please enter a valid email address').addClass('error');
            return false;
        }

        if (message === '' || message === null) {
            $('#message').val('Please enter a message').addClass('error');
            return false;
        }

        return true;
    });

});