<?php
include ('includes/header.php');
?>
    <div id="main" role="main">
		<div id="banner">
        <img src="img/self_defense.gif" alt="Self Defense" width="570" height="97" />
        <img src="img/discipline.gif" alt="Discipline" width="570" height="97" />
        <img src="img/self_confidence.gif" alt="Self Confidence" width="570" height="97" />
        <img src="img/strength.gif" alt="Strength" width="570" height="97" />
        <img src="img/conditioning.gif" alt="Conditioning" width="570" height="97" />
        </div> <!-- End #banner -->
        
        <div id="content_top"></div>
        <div id="content">
        	<div id="nav">
				<ul>
    				<a href="index.php"><li id="home" style="background-image:url(img/button_on.gif); color: #000000;">Home</li></a>
        			<a href="schedule.php"><li id="schedule">Schedule</li></a>
        			<a href="instructors.php"><li id="instructors">Instructors</li></a>
        			<a href="blog.php"><li id="blog">Student Blog</li></a>
        			<a href="history.php"><li id="history">History</li></a>
        			<a href="enrollment.php"><li id="enrollment">Enrollment</li></a>
        			<a href="contact.php"><li id="contact">Contact</li></a>
    			</ul>
        			<a href="free_lesson.html"><img src="img/lessons_button.png" alt="Click Here for a FREE Private Lesson" width="145" height="290" id="free_lesson" /></a>
			</div><!-- End #nav -->
            <div id="text">
            <strong>Summary of Kempo</strong><br />In Japanese Martial Arts, the word Kempo, is used to designate Chinese Martial Arts, much as the term “Kung Fu” is used in English speaking countries. Kempo places equal 	emphasis on the use of hands and feet, and also practises Kata or forms like other martial arts.

			<p><strong>Benefits of Kempo</strong><br />The benefits of Kempo training include, but are not limited to: self defense, self confidence, exercise, strength and self discipline.</p>

			<p><strong>Is it applicable?</strong><br />Kempo is an outstanding self defense system that is equally applicable on the streets or in the ring. Our system is meant for men, women and children of all ages and athletic abilities.</p>

			<p><strong>Why train Kempo?</strong><br />Kempo employs a philosophy of &quot;Training For Life.&quot; Your training is never completed, regardless of rank or belt level. Your Kempo training is meant to positively influence your life, in addition to teaching you to defend yourself. The benefits of Kempo compared to simply working out are extensive.</p>

			<p><strong>What you need</strong><br />The only thing you need to get started with Kempo is a desire to learn. No gear is required, neither are special gii’s or uniforms. In addition, your first lesson is free so there is no financial committment to trying Kempo out.</p>

			<p><strong>Where we train</strong><br />Our classes are held outdoors at Robb Field in Ocean Beach, San Diego. Forget about a stinky sweaty gym surrounded with mirrors and get ready to enjoy the beautiful outdoor scenery and fresh ocean breeze as you train.</p>

			<p><strong>How to get started</strong><br />Ready for your first lesson? To get started, please click here to contact one of our instructors and schedule your first lesson. For more information on our class schedule, please visit our schedule page.</p>
            </div> <!-- End Text -->
            
            <div id="slideshow">
            <img src="img/kempo1.jpg" alt="" width="639" height="150" style="display: block;" />
            <img src="img/kempo2.jpg" alt="" width="639" height="150" />
            </div> <!-- end #slideshow -->
        </div> <!-- End #content -->
        <div id="content_bottom"></div>
    </div> <!-- End #main -->
    <script>
	$(document).ready(function(e) {
    $.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    	});
	}
	
	// Usage:

$(['img/conditioning.gif','img/discipline.gif', 'img/self_confidence.gif', 'img/self_discipline.gif', 'img/strength.gif', 'img/kempo1.jpg', 'img/kempo2.jpg', 'img/button_off.gif', 'img/button_on.gif']).preload();
});
	</script>
    <script src="js/mylibs/banner.js"></script>
    <script src="js/mylibs/slideshow.js"></script>
    <?php
	include ('includes/footer.php');
	?>