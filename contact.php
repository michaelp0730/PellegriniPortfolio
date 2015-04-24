<?php
	$page_title = "Contact :: Pellegrini Portfolio";
	$h1 = "Contact";
	require_once ('_header.php');
?>

<div class="main small-8 small-offset-2 clearfix">
	<div class="small-8 small-offset-2">
		<h4>Contact</h4>
		<form name="contact" id="contact-form" action="process.php" method="post" enctype="application/x-www-form-urlencoded">
			<label for="name">Your Name:
	    	<input id="name" type="text" name="name" />
	    </label>
	    <label for="email">Your Email:
  			<input id="email" type="text" name="email" />
  		</label>
  		<label for="message">Message:
				<textarea id="message" name="message"></textarea>
    	</label>
    	<input type="submit" id="submit" value="Submit" class="form-btn" />
		</form>
	</div>
</div>

<?php require_once ('_footer.php'); ?>