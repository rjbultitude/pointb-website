<?php include("includes/mode.php"); ?>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html class=""> <!--<![endif]-->
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

    <title>Point B | Discog</title>
    <link rel="manifest" href="/manifest.json">
    <meta name="google-site-verification" content="0zm1k2TOLDxHRYlEtOU84nj_ysoh_p4thF07qYnJRp4">
    <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <meta name="viewport" content="width=device-width" />
    <script src="/<?php echo $mode; ?>/scripts/modernizr.js"></script>
    <link href="/<?php echo $mode; ?>/styles/css/global.css" media="screen" rel="stylesheet">
</head>

<body id="discog">
    <a href="#main" class="nav-skip">Skip to content</a>
    <?php include("includes/header-include.php"); ?>
    <!-- start main -->
    <div id="main" class="section" role="main">

        <!-- start main header -->
        <section class="section header">
            <div class="wrapper-inner">
                <div class="content">
                    <h1 class="page-heading">
                        Discography
                    </h1>
                    <p class="standfirst">How times have changed.<br />
                    The graph below illustrates the evolution of formats across Point B's catalogue.<br />
                    Click the squares to view release details</p>
                </div>
            </div>
        </section>
        <!-- end main header -->

        <!-- start content -->
        <section class="section section-infographic">
            <div class="wrapper-inner">
                <h2 class="heading-section">Discography infographic</h2>
                <div id="data-output">
                    <p class="tooltip"></p>
                </div>
                <div class="sub-section sub-section-release-details">
                    <figure class="figure release-figure">
                        <img class="release-image" src="/images/discography/heart-of-matter" alt="Point B - Heart of matter" />
                    </figure>
                    <dl class="release-details-list">
                        <dt class="visuallyhidden">Title:</dt><dd class="release-title heading-dd"></dd>
                        <dt class="">Label:</dt><dd class="release-label"></dd>
                        <dt class="">Cat No.:</dt><dd class="release-cat"></dd>
                        <dt class="">Format:</dt><dd class="release-format"></dd>
                        <dt class="">Year:</dt><dd class="release-year"></dd>
                    </dl>
                </div>
            </div>
        </section>
        <!-- end content -->

    </div>
    <!-- end main -->
    <?php include("includes/section-sm-include.php"); ?>

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