<?php include("includes/mode.php"); ?>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html class="" lang="eng"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta name="description" content="point B. Deep urban rhythms for club and home">
    <meta name="keywords" content="music, deep melodic, sound design, 2 step, dubstep, electro, urban, experimental">
    <meta property="og:title" content="point B">
    <meta property="og:type" content="musician">
    <meta property="og:image" content="http://www.point-b.co.uk/images/point-b-face.jpg">
    <meta property="og:url" content="http://www.point-b.co.uk">
    <meta property="fb:admins" content="richard.bultitude">
    <meta property="og:email" content="info@point-b.co.uk" />
    <meta property="og:description" content="point B. Deep urban rhythms for club and home">

    <title>Point B | deep urban rhythms</title>
    <meta name="google-site-verification" content="0zm1k2TOLDxHRYlEtOU84nj_ysoh_p4thF07qYnJRp4">
    <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <meta name="viewport" content="width=device-width" />
    <script src="/<?php echo $mode; ?>/scripts/modernizr.js"></script>
    <link href="/<?php echo $mode; ?>/styles/css/global.css" media="screen" rel="stylesheet">
</head>

<body id="music">
    <a href="#main" class="nav-skip">Skip to content</a>
    <?php include("includes/header-include.php"); ?>
    <!-- start main -->
    <div id="main" class="section" role="main">

        <!-- start main header -->
        <section class="section header">
            <div class="wrapper-inner">
                <div class="content">
                    <h1 class="page-heading">
                        Music
                    </h1>
                    <p class="standfirst">A range of tracks from the back catalogue, remixes and some SoundCloud exclusives</p>
                </div>
            </div>
        </section>
        <!-- end main header -->

        <!-- start tabs -->
        <section class="section section-tabs tabs" role="main">
            <div class="wrapper-inner">
                <div class="tabs-nav" role="navigation">
                    <ul class="tabs-nav-list" role="list">
                        <li class="list-item active">
                            <a href="#new">Recent</a>
                        </li>
                        <li class="list-item">
                            <a href="#remixes">Remixes</a>
                        </li>
                        <li class="list-item">
                            <a href="#archives">Archives</a>
                        </li>
                    </ul>
                </div>
                <div class="tabs-content active" id="new">
                    <ul class="item-list" role="list">
                        <p>No data</p>
                    </ul>
                </div>
                <div class="tabs-content" id="remixes">
                    <ul class="item-list" role="list">
                        <li class="list-item">
                            <h3 class="item-heading">Track4</h3>
                        </li>
                        <li class="list-item">
                            <h3 class="item-heading">Track5</h3>
                        </li>
                        <li class="list-item">
                            <h3 class="item-heading">Track6</h3>
                        </li>
                    </ul>
                </div>
                <div class="tabs-content" id="archives">
                    <ul class="item-list" role="list">
                        <li class="list-item">
                            <h3 class="item-heading">Track7</h3>
                        </li>
                        <li class="list-item">
                            <h3 class="item-heading">Track8</h3>
                        </li>
                        <li class="list-item">
                            <h3 class="item-heading">Track9</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- end tabs -->

    </div>
    <!-- end main -->
    <?php include("includes/footer-include.php"); ?>

    <script data-main="/<?php echo $mode; ?>/scripts/config" src="/<?php echo $mode; ?>/scripts/libs/require.js"></script>

    <script type="text/javascript">
        var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
        document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
    </script>
    <script type="text/javascript">
        try {
            var pageTracker = _gat._getTracker("UA-5628156-1");
            pageTracker._trackPageview();
        } catch(err) {}</script>

</body>
</html>