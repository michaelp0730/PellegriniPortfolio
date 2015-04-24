<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php echo $page_title; ?></title>
    <meta name="description" content="The personal website of Seattle Web Developer Michael Pellegrini">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/master.css" />
    <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif] -->
</head>

<body>
<!--[if lt IE 7]>
<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif]-->
<header>
    <div class="row1">
        <section class="small-8 small-offset-2 date">
            <?php
                date_default_timezone_set('America/Los_Angeles');
                echo date('F j, Y');
            ?>
        </section>
    </div>
    <div class="row2">
        <section class="small-8 small-offset-2 clearfix">
            <img src="img/tree.png" alt="" class="tree left" />
            <div class="social-icons-container right">
                <ul>
                    <li class="top-left">
                        <a target="_blank" href="https://twitter.com/#!/mpellegrini">
                            <img src="img/twitterLogo.png" alt="Twitter" class="left" />
                        </a>
                    </li>
                    <li class="top-right">
                        <a target="_blank" href="http://www.facebook.com/pellegrinimichael">
                            <img src="img/facebookLogo.png" alt="Facebook" class="right" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://plus.google.com/106113405189674421870/posts">
                            <img src="img/googlePlusLogo.png" alt="Google Plus" class="bottom-left" style="bottom: 4px;" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="http://www.linkedin.com/profile/view?id=9249752&trk=tab_pro">
                            <img src="img/linkedInLogo.png" alt="Linked In" class="bottom-right" />
                        </a>
                    </li>
                </ul>
            </div>
            <h1><?php echo $h1; ?></h1>
            <h2>Michael Pellegrini</h2>
        </section>
    </div>
    <div class="row3">
        <nav class="small-8 small-offset-2 nav-main clearfix">
            <ul>
                <li id="nav-portfolio">
                    <a href="index.php">portfolio <div class="nav-icon icon-screen"></div></a>
                </li>
                <li id="nav-resume">
                    <a href="resume.php">resume <div class="nav-icon icon-file"></div></a>
                </li>
                <li id="nav-about">
                    <a href="about.php">about <div class="nav-icon icon-user"></div></a>
                </li>
                <li id="nav-contact">
                    <a href="contact.php">contact <div class="nav-icon icon-pencil"></div></a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="row4">
        <nav class="small-8 small-offset-2 sub-nav invisible clearfix">
            <ul>
                <li>
                    <a id="nav-pellegrini-page" class="sub-nav-link sub-nav-active" href="#">pellegrini page</a>
                </li>
                <li>|</li>
                <li>
                    <a id="nav-pulpcore" class="sub-nav-link" href="#">pulpcore</a>
                </li>
                <li>|</li>
                <li>
                    <a id="nav-seo" class="sub-nav-link" href="#">seo</a>
                </li>
                <li>|</li>
                <li>
                    <a id="nav-arturos" class="sub-nav-link" href="#">arturo's</a>
                </li>
                <li>|</li>
                <li>
                    <a id="nav-hardy" class="sub-nav-link" href="#">hardy handyman</a>
                </li>
                <li>|</li>
                <li>
                    <a id="nav-sidecar" class="sub-nav-link" href="#">sidecar</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="row5"></div>
</header>