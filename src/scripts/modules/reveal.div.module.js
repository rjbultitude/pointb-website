/*
+------------------------------------------------------------------------------+
|                                              
|  Jquery Plugin: $reveal-div 1.00
|
|  File Written By:                                  
|  - Richard Bultitude
|  - http://www.thisiszone.com
|  
|  //Reveals contents of wrapper
|  //Text for the open button can be set on init
|  //Reveal attempts to use css for the transition
|  //& falls back to JS
|                                                
+------------------------------------------------------------------------------+
*/


define(['jquery', 'base', 'debug'], function($, base, debug){
    'use strict';

    (function ($) {

        $.fn.revealDiv = function (options) {

            //Settings
            var settings = $.extend({
                showButtonTxt       : null
            }, options);

            return this.each(function () {

                var $wrapper = $(this);
                var $inner = $wrapper.find('.reveal-inner'); //unused
                var $showButtonText = base.htmlSnippets.find('#show-more-text').text();
                var $hideButtonText = base.htmlSnippets.find('#hide-more-text').text();
                var $moreButton = $('<a href="#" class="more">' + $showButtonText + '</a>');
                var wrapperHeight = null;
                var wrapperHeightpx = null;

                setButtonText();
                hideItems();
                addButton();
                reveal();

                function setButtonText() {
                    //Show button
                    if (settings.showButtonTxt) {
                        $moreButton.text(settings.showButtonTxt);
                        $showButtonText = settings.showButtonTxt;
                    }
                    else {
                        $moreButton.text($showButtonText);
                    }
                }

                function hideItems() {
                    if (Modernizr.csstransitions) {
                        //set height of wrapper to height of content
                        wrapperHeightpx = $inner.height();
                        wrapperHeight = wrapperHeightpx/16 + 'em';
                        //close it
                        $wrapper.css('max-height','0').addClass('closed');
                    }
                    else {
                        $wrapper.hide().addClass('closed');
                    }
                }
                
                function addButton() {
                    $($moreButton).insertAfter($wrapper);
                }
                
                function reveal() {
                    $moreButton.on('click', function(e){
                        e.preventDefault();

                        //CSS version
                        if (Modernizr.csstransitions) {
                            if ($wrapper.hasClass('closed')) {
                                //now that we have the correct height in ems
                                //we can sawp the postion absolute for static
                                $inner.css('position','static');
                                //use height of content to animate wrapper
                                $wrapper.removeClass('closed').css('max-height', wrapperHeight).addClass('open');
                                $(this).text($hideButtonText);
                            }
                            else if ($wrapper.hasClass('open')) {
                                $wrapper.removeClass('open').css('max-height', '0').addClass('closed');
                                $(this).text($showButtonText);
                            }
                        }
                        //JS version
                        else {
                            if ($wrapper.hasClass('closed')) {
                                $wrapper.slideDown(base.animationSpeed, base.animationEasing, function(){
                                    $wrapper.removeClass('closed').addClass('open');
                                });
                                $(this).text($hideButtonText);
                            }

                            else if ($wrapper.hasClass('open')) {
                                $wrapper.slideUp(base.animationSpeed, base.animationEasing, function(){
                                    $wrapper.removeClass('open').addClass('closed');
                                });
                                $(this).text($showButtonText);
                            }
                        }

                    });//end on
                }//end reveal

                //return revealTableModule;

            })//end each
        }//end jquery extend

    })(jQuery);


}); //end define