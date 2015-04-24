<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if IE]><link rel="stylesheet" href="css/ie.css" type="text/css"><![endif]-->
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

  <title>Contact - Michael Pellegrini</title>
  <meta name="description" content="Contact San Diego web designer Michael Pellegrini.">
  <meta name="author" content="Michael Pellegrini">

  <!-- Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->

  <!-- CSS: implied media=all -->
  <!-- CSS concatenated and minified via ant build script-->
  <link rel="stylesheet" href="css/style.css" type="text/css" charset="utf-8">
  <link rel="stylesheet" href="css/fonts.css" type="text/css" charset="utf-8">
  <!-- end CSS-->

  <!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->

  <!-- All JavaScript at the bottom, except for Modernizr / Respond.
       Modernizr enables HTML5 elements & feature detects; Respond is a polyfill for min/max-width CSS3 Media Queries
       For optimal performance, use a custom Modernizr build: www.modernizr.com/download/ -->
  <script src="js/libs/modernizr-2.0.6.min.js"></script>
  <script>
  var RecaptchaOptions = {
    theme : 'blackglass'
 };
  </script>
</head>

<body>

  <div id="container">
    <header>
    	<div id="stamp">
        <img src="img/stamp_web_design.png" alt="Web Design" width="212" height="143" style="display: block;" />
        <img src="img/stamp_development.png" alt="Web Development" width="212" height="143" />
        <img src="img/stamp_seo.png" alt="SEO" width="212" height="143" />
        </div>
		<h1>Contact</h1>
        <h6>Michael Pellegrini</h6>
    </header>
    <div id="nav">
    	<ul>
    		<a href="index.html"><li id="portfolio">Portfolio</li></a>
        	<a href="resume.html"><li id="resume">Resume</li></a>
        	<a href="freelance.html"><li id="freelance">Freelance</li></a>
        	<a href="contact.html"><li id="contact">Contact</li></a>
    	</ul>
    </div>
    <div id="main" role="main">
    <h2>Contact Me</h2>
    <form name="myForm" id="myForm" action="process.php" onSubmit="return validateForm();" method="post">
    <div id="contact_form">
    <p><label for="name">Your Name:
    		<input id="name" type="text" name="name" />
       </label>
    </p>
    <p><label for="email">Your Email:
    		<input id="email" type="text" name="email" style="margin-left:5px;" />
    	</label>
    </p>
    <p><label for="message">Message:
    		<textarea id="message" name="message" style="margin-left:75px; margin-top:-13px;"></textarea>
        </label>
    </p>
    <div style="margin-left: 71px;">
<?php
require_once('../recaptchalib.php');
$publickey = "6LeRYcgSAAAAABnsPkIkeawpxxkk9emqRSh9AHpG"; // you got this from the signup page
echo recaptcha_get_html($publickey);
?>
	</div>
    <p>
    	<input type="submit" name="submit" value="Submit" style="margin-left:75px;" />
    </p>
    </div>
    </form>
        
    </div> <!--! end of #main -->
    <footer>
Copyright &copy; Michael Pellegrini <script src="js/mylibs/copyright.js"></script> | All Rights Reserved
    </footer>
  </div> <!--! end of #container -->


  <!-- JavaScript at the bottom for fast page loading -->
  
  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.6.2.min.js"><\/script>')</script>
  <script src="js/mylibs/preload.js"></script>
  <script src="sidecar/js/mylibs/jquery.cycle.all.latest.js"></script>
  <script src="js/mylibs/fade.js"></script>
  <script src="js/mylibs/validateForm.js"></script>

  <!-- scripts concatenated and minified via ant build script-->
  <script defer src="js/plugins.js"></script>
  <script defer src="js/script.js"></script>
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
