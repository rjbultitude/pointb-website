/**
 * Jquery Plugin: $myName 1.00
 *
 * $author       Richard Bultitude
 * $email        rbultitude@thisiszone.com
 * $url          http://www.thisiszone.com/
 * $copyright    Copyright (c) 2014, thisiszone.com. All rights reserved.
 * $version      1.0
 *
 * $notes        
 */


define(['jquery', 'debug'], function($, debug){
    'use strict';

    (function ($) {

        $.fn.JQueryTabsPlugin = function (options) {

            //Settings
            var settings = $.extend({
                optionOne   : null
            }, options);

            return this.each(function () {

                var wrapper = $(this);
                var navclass = 'tabs-nav';
                var navclassSelector = '.' + navclass;
                var nav = $(this).find(navclassSelector);
                var content = wrapper.find('.tabs-content');

                function makeFirstActive () {
                    // if(content.hasClass('active')) {
                    //     $(':first-child', content).
                    // }
                }

                function tabButtons() {
                    $('a', nav).on('click', function(e){
                        e.preventDefault();
                        //Get href of this link
                        //and remove the hash
                        var thisLink = $(this);
                        var thisParent = $(this).parent('li');
                        var thisHref = thisLink.attr('href');
                        var thisString = thisHref.replace('#', '');
                        var thisID = $('[id="' + thisString + '"]');
                        var thisContent = wrapper.find(thisID);

                        //active this list item
                        //and deactivate others
                        thisParent.addClass('active');
                        thisParent.siblings().removeClass('active');
                        //activate relevant content div
                        //and hide others
                        thisContent.addClass('active');
                        thisContent.siblings().removeClass('active');
                    });
                }

                function tabTrigger() {
                    $('.btn-tab-trigger').on('click', function(e){
                        e.preventDefault();
                        var thisLink = $(this);
                        var thisHref = thisLink.attr('href');
                        var thatLink = $(navclassSelector + ' [href="' + thisHref + '"]');
                        //debug.log('that link', thatLink);
                        thatLink.trigger('click');
                    });
                }

                function pageToTab() {
                    $(document).ready(function() {
                        var hash = window.location.hash;
                        var tabContent = $(hash + '');
                        var tabBtn = $('a[href="' + hash + '"]', nav);
                        var tabListItem = tabBtn.parent('li');
                        //debug.log(tabContent);
                        //active relevant tab content
                        tabContent.addClass('active');
                        tabContent.siblings().removeClass('active');
                        //active relevant tab anchor
                        tabListItem.addClass('active');
                        tabListItem.siblings().removeClass('active');
                    });
                }

                //Init functions
                tabButtons();
                tabTrigger();
                pageToTab();

            });
            //end each
        };
        //end jquery extend

    })(jQuery);


}); //end define