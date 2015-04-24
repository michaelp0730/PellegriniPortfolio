<?php
	$page_title = "Contact :: Pellegrini Portfolio";
	$h1 = "Contact";
	require_once ('_header.php');
?>

<div class="main small-8 small-offset-2 clearfix">
	<div class="small-8 small-offset-2">
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$body =
"Name: $name
Email: $email
Message: $message";
mail("pellegrinimichael@gmail.com", "Message from PellegriniPortfolio.com", "$body", "From: $email");
print "<h4>Thanks for contacting me $name</h4><p>I'll get back to you as soon as possible.</p><p>-Michael</p>";
?>
	</div>
</div>

<?php require_once ('_footer.php'); ?>