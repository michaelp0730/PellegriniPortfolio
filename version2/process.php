<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>CONTACT - Michael Pellegrini</title>
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css" href="css/fonts.css" />
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
        	<a href="http://www.facebook.com/pellegrinimichael" target="_new">
            	<img src="img/facebookLogo.png" alt="Facebook" width="50" height="50" />
            </a>
            <a href="https://twitter.com/#!/mpellegrini" target="_new">
            	<img src="img/twitterLogo.png" alt="Twitter" width="52" height="52" />
            </a>
            <a href="http://www.linkedin.com/profile/view?id=9249752&trk=tab_pro" target="_new">
            	<img src="img/linkedInLogo.png" alt="LinkedIn" width="52" height="54" />
            </a>
            <a href="https://plus.google.com/106113405189674421870/posts" target="_new">
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
            <li><a href="contact.php">CONTACT</a></li>
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
	<div id="contact_form">
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$body = 
"Name: $name
Email: $email
Message: $message";
mail("pellegrinimichael@gmail.com", "Message from PellegriniPage.com/Portfolio", "$body", "From: $email");
print "<h4>Thanks for contacting me $name.</h4><p>I'll get back to you as soon as possible.</p><p>-Michael</p>";
?>
	</div>
</div>

<footer>Copyright &copy; Michael Pellegrini <script src="js/copyright.js"></script> | All Rights Reserved</footer>

</body>
</html>
