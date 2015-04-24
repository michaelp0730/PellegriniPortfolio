<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- Use the .htaccess and remove these lines to avoid edge case issues.
       More info: h5bp.com/b/378 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>Thanks for contacting Sidecar!</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->

  <!-- CSS: implied media=all -->
  <!-- CSS concatenated and minified via ant build script-->
  <link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
  <link rel="stylesheet" href="css/fonts.css" type="text/css" media="screen">
  <link rel="stylesheet" href="css/custom-theme/jquery-ui-1.8.16.custom.css" type="text/css" />	
  <!-- end CSS-->

  <!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->

  <!-- All JavaScript at the bottom, except for Modernizr / Respond.
       Modernizr enables HTML5 elements & feature detects; Respond is a polyfill for min/max-width CSS3 Media Queries
       For optimal performance, use a custom Modernizr build: www.modernizr.com/download/ -->
  <script src="../js/libs/modernizr-2.0.6.min.js"></script>
</head>

<body>

  <div id="container">
    <header>
		<a href="home.html"><img src="img/sidecar.png" alt="Sidecar" width="289" height="82" /></a>
        <h6>Pizza, Classic Cocktails, Live Music</h6>
    </header>
    <div id="main" role="main">
		<div id="left_bar">
        	<div id="nav">
            	<ul id="navList">
                	<li><a href="home.html">Home</a></li>
                    <li><a href="food.html">Food</a>
                    	<ul class="listTab">
                        	<li><a href="food.html">Appetizers</a></li>
                            <li><a href="food.html#salads">Salads</a></li>
                            <li><a href="food.html#pizza">Pizza</a></li>
                            <li><a href="food.html#pasta">Pasta</a></li>
                            <li><a href="food.html#sides">Sides</a></li>
                            <li class="nav_bottom"><a href="food.html#dessert">Dessert</a></li>
                        </ul>
                    </li>
                    <li><a href="drinks.html">Drinks</a>
                    	<ul class="listTab">
                        	<li><a href="drinks.html">Classic Cocktails</a></li>
                			<li><a href="drinks.html#brandy">Brandy</a></li>
                			<li><a href="drinks.html#gin">Gin</a></li>
                			<li><a href="drinks.html#rum">Rum</a></li>
                			<li><a href="drinks.html#tequila">Tequila</a></li>
                			<li><a href="drinks.html#vodka">Vodka</a></li>
                			<li class="nav_bottom"><a href="drinks.html#whiskey">Whiskey</a></li>
                        </ul>
                    </li>
                    <li><a href="music.html">Music</a></li>
                    <li><a href="music.html#events">Special Events</a></li>
                    <li><a href="music.html#reviews">Reviews</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="contact.html#about">About</a></li>
                    <li><a href="contact.html#hours">Business Hours</a></li>
                    <li class="nav_bottom"><a href="contact.html#directions">Directions</a></li>
                </ul>
            </div>
        </div><!-- End left bar -->
        
        <div id="content">
        	<div id="accordion">
					<h2><a href="#contact">Contact Us</a></h2>
					<div>
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$body = 
"Name: $name
Email: $email
Message: $message";
mail("michael@pellegrinipage.com", "Message from Sidecar Website", "$body", "From: $email");
print "<h3>Thanks for contacting Sidecar $name.</h3><p>I'll get back to you as soon as possible.</p><p>-Michael</p>";
?>
                    </div>
					
                    <h2><a href="#about">About Us</a></h2>
					<div>
                    Sidecar is not a real restaurant, but rather a concept that has developed in my head over the years. Besides working in web design, the restaurant industry is the only other industry I know. It put me through college, carried me when the company I built websites for went out of business, and introduced me to many of my closest friends. The concept for Sidecar was to combine my love for pizza, mixology and live music into one venue, and give it a vintage motorcycle look and feel. Please note that although Sidecar is not a real business, all recipes are my own, took years to develop, and are copywritten. Please enjoy!<h3>&ndash; Michael Pellegrini</h3>
                    </div>
					
                    <h2><a href="#reviews">Business Hours</a></h2>
					<div>
                    <strong>Monday &ndash; Thursday:</strong> 5:00pm &ndash; Midnight
                    <p><strong>Friday:</strong> 5:00pm &ndash; 2:00am</p>
                    <p><strong>Saturday:</strong> 11:00am &ndash; 2:30pm, 5:00pm &ndash; 2:00am</p>
                    <p><strong>Sunday:</strong> 11:00am &ndash; 2:30pm, 5:00pm &ndash; 10:00pm</p>
                    </div> 
                    
                    <h2><a href="#directions">Directions</a></h2>
                    <div>
                    <img src="img/map.jpg" alt="Map of San Diego" width="250" height="238" style="float: right; margin-left: 10px;" />
                    <strong>From I&ndash;5 South:</strong><br />Take the Whatever Exit and turn right at the light. Go straight 3 blocks, then turn left at some street. We are located two blocks up on the right side.
                    <p><strong>From I&ndash;5 North:</strong><br />Take the Whatever Exit and turn left at the light. Go straight 3 blocks, then turn left at some street. We are located two blocks up on the right side.</p>
                    </div>
                   
            </div> <!-- End Accordion -->
        </div> <!-- End Content -->
    </div><!-- End Main -->
    <footer>
	Copyright &copy; Michael Pellegrini <script src="../js/mylibs/copyright.js"></script> | All Rights Reserved
    </footer>
  </div> <!--! end of #container -->


  <!-- JavaScript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.6.2.min.js"><\/script>')</script>
  <script src="../js/libs/jquery-1.6.2.min.js"></script>
  <script src="js/mylibs/nav_menu.js"></script>
  <script src="js/mylibs/jquery.cycle.all.latest.js" type="text/javascript"></script>
  <script type="text/javascript" src="js/mylibs/jquery-ui-1.8.16.custom.min.js"></script>
  <script>
  $(function(){

				// Accordion
				$("#accordion").accordion({ header: "h2", navigation: true });
	
				// Tabs
				$('#tabs').tabs();

				// Datepicker
				$('#datepicker').datepicker({
					inline: true
				});
				
				//hover states on the static widgets
				$('#dialog_link, ul#icons li').hover(
					function() { $(this).addClass('ui-state-hover'); }, 
					function() { $(this).removeClass('ui-state-hover'); }
				);
				
			});

  </script>

  <!-- scripts concatenated and minified via ant build script-->
  <script defer src="js/plugins.js"></script>
  <!-- end scripts-->

	
  <!-- Change UA-XXXXX-X to be your site's ID -->
  <script>
    window._gaq = [['_setAccount','UAXXXXXXXX1'],['_trackPageview'],['_trackPageLoadTime']];
    Modernizr.load({
      load: ('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js'
    });
  </script>


  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
  
</body>
</html>
