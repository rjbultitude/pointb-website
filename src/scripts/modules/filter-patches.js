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

    var filterPatches = {

        /* ---------- Init -------------------------------------------------- */
        init: function loadData() {
            $.get('/data/patches.json', function(data) {
  				// do something with your data
			});
        }

    };

    return filterPatches;

});