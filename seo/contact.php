<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Contact Us</title>
<style type="text/css" media="screen">
<!--
@import "style.css";
-->
</style>
</head>

<body>
<div>
	<h2 style="margin-left:10px;">Contact Me</h2>
	<form name="contact" method="post" action="process.php">
		<input name="name" class="contact_name" value="Your Name:" onFocus="this.value=''; this.onfocus=null;" />
        <input name="email" class="contact_name" value="Your Email:" onFocus="this.value=''; this.onfocus=null;" />
        <textarea name="message" class="contact_message" onFocus="this.value=''; this.onfocus=null;">Message:</textarea>
        <input type="submit" name="submit" value="Submit" class="submit" />
	</form>
</div> 
</body>
</html>