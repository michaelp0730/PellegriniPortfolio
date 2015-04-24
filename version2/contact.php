<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>CONTACT - Michael Pellegrini</title>
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/fonts.css">
<script>
  var RecaptchaOptions = {
    theme : 'blackglass'
 };
</script>
<!--[if IE 6]>
	<link rel="stylesheet" type="text/css" href="css/ie6.css" />
<![endif]-->
<!--[if IE 7]>
	<link rel="stylesheet" type="text/css" href="css/ie8.css" />
<![endif]-->
<!--[if IE 8]>
	<link rel="stylesheet" type="text/css" href="css/ie8.css" />
<![endif]-->
<!--[if IE 9]>
	<link rel="stylesheet" type="text/css" href="css/ie9.css" />
<![endif]-->
<!--[if lte IE 8]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>

<body>
<div id="row1">
	<div id="row1_content">
    	<div id="date"><script src="js/date.js"></script></div>
    </div>
</div>

<div id="row2">
	<div id="row2_content">
    	<h1>Contact</h1>
    	<h2>Michael Pellegrini</h2>
        <div id="social_media_container">
        	<a href="http://www.facebook.com/pellegrinimichael" target="_blank">
            	<img src="img/facebookLogo.png" alt="Facebook" width="50" height="50" />
            </a>
            <a href="https://twitter.com/#!/mpellegrini" target="_blank">
            	<img src="img/twitterLogo.png" alt="Twitter" width="52" height="52" />
            </a>
            <a href="http://www.linkedin.com/profile/view?id=9249752&trk=tab_pro" target="_blank">
            	<img src="img/linkedInLogo.png" alt="LinkedIn" width="52" height="54" />
            </a>
            <a href="https://plus.google.com/106113405189674421870/posts" target="_blank">
            	<img src="img/googlePlusLogo.png" alt="Google+" width="51" height="49" />
            </a>
        </div>
    </div>
</div>

<div id="row3">
	<div id="row3_content">
    	<ul id="nav">
        	<li><a href="index.html">portfolio</a></li>
            <li>|</li>
            <li><a href="resume.html">resume</a></li>
            <li>|</li>
            <li><a href="about.html">about</a></li>
            <li>|</li>
            <li><a href="contact.html">CONTACT</a></li>
        </ul>
    </div>
</div>

<div id="row4">
	<div id="row4_content">
    	<a href="index.html"><img src="img/tree.png" alt="tree" width="250" height="247" id="tree" /></a>
    </div>
</div>

<div id="row5"></div>

<div id="main">
	<form name="contact" id="contact" action="process.php" onSubmit="return validateForm();" method="post" enctype="application/x-www-form-urlencoded">
		<div id="contact_form">
	    	<p>
	    		<label for="name">Your Name:
	    			<input id="name" type="text" name="name" />
	       		</label>
	    	</p>
	    	<p>
	    		<label for="email">Your Email:
	    			<input id="email" type="text" name="email" style="margin-left:3px;" />
	    		</label>
	    	</p>
	    	<p>
	    		<label for="message">Message:
	    			<textarea id="message" name="message" style="margin-left:75px; margin-top:-13px;"></textarea>
	        	</label>
	   	 	</p>
	   	 	<div id="captcha">
<?php
/*
require_once('../recaptchalib.php');
$publickey = "6LeRYcgSAAAAABnsPkIkeawpxxkk9emqRSh9AHpG"; // you got this from the signup page
echo recaptcha_get_html($publickey);
*/
?>
			</div>
	   	 	<p>
	    		<input type="submit" name="submit" value="Submit" />
	    		<input type="reset" name="reset" value="Reset" />
	   	 	</p>
	    </div>
    </form>
</div>

<footer>Copyright &copy; Michael Pellegrini <script src="js/copyright.js"></script> | All Rights Reserved</footer>

<!-- Get jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="js/jquery-1.7.1.min.js"></script>
<!-- Get Scripts -->
<script src="js/validateForm.js"></script>
</body>
</html>
