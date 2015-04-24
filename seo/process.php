<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Thanks for contacting us!</title>
<style type="text/css" media="screen">
<!--
@import "style.css";
-->
p{
	text-indent:inherit;
	padding:10px;
}
</style>
</head>

<body>
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$body = 
"Name: $name
Email: $email
Message: $message";
mail("michael@pellegrinipage.com", "Message from PellegriniPage.com", "$body", "From: $email");
print "<p>Thanks for contacting me $name. I'll get back to you as soon as possible.</p><p>-Michael</p>";
?>
<p><a href="javascript:window.close();">Close Window</a></p>
</body>
</html>