/**
 * Example module module
 *
 * $author       Richard Bultitude
 * $email        richard.bultitude@google.com
 * $url          http://www.point-b.co.uk/
 * $copyright    Copyright (c) 2013, point-b.co.uk. All rights reserved.
 *
 * $notes        Notes
 */

var requireLocalized = requireLocalized || {};

define(['debug'], function(debug) {
    'use strict';

    var scrollBackground = {

        posValue: 0,
        posValuePercent: '',
        highNumber: 1000,

        /* ---------- Init -------------------------------------------------- */
        init: function initFn() {
            $(window).scroll(function(){
                scrollBackground.posValue = scrollBackground.posValue + 1;
                scrollBackground.posValuePercent = scrollBackground.posValue + '%';
                $('.header').css({'background-position': scrollBackground.posValuePercent});
            });
        }

    };

    return scrollBackground;

});