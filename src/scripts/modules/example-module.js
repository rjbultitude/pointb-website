/**
 * Example module module
 *
 * $author       Zone dev
 * $email        frontend@thisiszone.com
 * $url          http://www.thisiszone.com/
 * $copyright    Copyright (c) 2013, thisiszone.com. All rights reserved.
 * $version      1.0
 *
 * $notes        Notes
 */

var requireLocalized = requireLocalized || {};

define(['debug'], function(debug) {
    'use strict';

    var module = {

        /* ---------- Init -------------------------------------------------- */
        init: function moduleExampleInit() {
            var modulePrivateVariable = 'private variable string';
            debug.message('I am your first module', modulePrivateVariable);
        }

    };

    return module;

});