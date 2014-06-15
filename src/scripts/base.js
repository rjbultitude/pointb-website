/**
 * Base functions
 *
 * $author       Zone dev
 * $email        frontend@thisiszone.com
 * $url          http://www.thisiszone.com/
 * $copyright    Copyright (c) 2013, thisiszone.com. All rights reserved.
 * $version      1.0
 *
 * $notes        Notes
 */

define(['jquery'], function($) {
    'use strict';

    var base = {

        debug: false,
        ltIe9: $('html.lt-ie9').size(),
        animationSpeed: 1000,
        animationEasing: 'easeOutCirc',
        htmlSnippets: '',

        init: function() {
            this.defineConsoleLog();
            this.placeholderFallback();
            this.outerhtmlFallback();
            this.loadHtmlSnippets();
        },

        /* ---------- Define console log ------------------------------------ */
        defineConsoleLog: function defineConsoleLogFn() {
            if (typeof console === 'undefined' || typeof console.log === 'undefined') {
                /*bases console:true*/
                console.log = function() {};
            }
        },

        /* ---------- Placeholder fallback ---------------------------------- */
        placeholderFallback: function placeholderFallbackFn() {
            /*bases Modernizr:true*/
            if (!Modernizr.input.placeholder) {
                $('[placeholder]').focus(function() {
                    var input = $(this);
                    if (input.val() === input.attr('placeholder')) {
                        input.val('').removeClass('placeholder');
                    }
                }).blur(function() {
                    var input = $(this);
                    if (input.val() === '') {
                        input.val(input.attr('placeholder')).addClass('placeholder');
                    }
                }).blur();
                $('form').submit(function() {
                    $('[placeholder]', this).each(function() {
                        var input = $(this);
                        if (input.val() === input.attr('placeholder')) {
                            input.val('').removeClass('placeholder');
                        }
                    });
                });
            }
        },

        /* Load HTML snippets */
        loadHtmlSnippets: function loadHtmlSnippetsFn() {
            $.ajax({
                url: base.htmlSnippetsURL,
                datatype: 'text/html',
                async: false,
                success: function(data) {
                    base.htmlSnippets = $(data);
                }
            });
        },

        /* ---------- Outer HTML fallback ----------------------------------- */
        outerhtmlFallback: function outerhtmlFallbackFn() {
            $.fn.outerHTML = function() {
                return (!this.length) ? this : (this[0].outerHTML || (
                    function(el) {
                        var div = document.createElement('div');
                        div.appendChild(el.cloneNode(true));
                        var contents = div.innerHTML;
                        div = null;
                        return contents;
                    })(this[0]));
            };
        },

        /* ---------- Utility for converting hex to rgb --------------------- */
        colorLuminance: function(hex, lum) {

            // validate hex string
            hex = String(hex).replace(/[^0-9a-f]/gi, '');
            if (hex.length < 6) {
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            lum = lum || 0;

            // convert to decimal and change luminosity
            var rgb = '#',
                c, i;
            for (i = 0; i < 3; i++) {
                c = parseInt(hex.substr(i * 2, 2), 16);
                c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
                rgb += ('00' + c).substr(c.length);
            }

            return rgb;
        },

        /* ---------- Feature Identification -------------------------------- */
        isPatchesPage: function isPatchesPageFn() {
            if ($('#patches').length > 0) {
                return true;
            } else {
                return false;
            }
        },

        isDiscogPage: function isDiscogPageFn() {
            if ($('#discog').length > 0) {
                return true;
            } else {
                return false;
            }
        },

        isMusicPage: function isMusicFn() {
            if ($('#music').length > 0) {
                return true;
            } else {
                return false;
            }
        },

        isTabs: function isTabsFn() {
            if ($('.tabs').length > 0) {
                return true;
            } else {
                return false;
            }
        }


    }; //end base object

    //IE selectivizr polyfill
    $(function() {
        if (base.ltIe9) {
            require(['jquery']);
        }
    });

    return base;
});