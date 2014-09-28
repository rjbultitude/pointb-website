///**
// * Jquery Plugin: mini jquery modal
// *
// * $author       Richard Bultitude
// * $email        rbultitude@thisiszone.com
// * $url          http://www.thisiszone.com/
// * $copyright    Copyright (c) 2014, thisiszone.com. All rights reserved.
// * $version      1.2
// *
// * $notes       There are three modes:
//                video (which uses an iframe),
//                image &
//                custom
//                Three positions are available:
//                top, center and off
//                resetPlay is on by default,
//                set to false the video continues from where it left off
// */


define(['jquery'], function() {
    'use strict';

    (function($) {

        $.fn.JQueryModalPlugin = function(options) {

            //Settings
            var settings = $.extend({
                contentType: 'custom',
                position: 'scroll',
                resetPlay: true,
            }, options);

            return this.each(function() {
                var thisModal = $(this);
                var modalContent = null || thisModal.children();
                var wrapper = $('div').addClass('modal').appendTo('body');
                console.log('wrapper', wrapper);
                //var content = wrapper.find('.modal-content', thisModal);
                var overlay = $('div').addClass('overlay').appendTo('body');
                var btn = null;
                var btnClose = wrapper.find('.close');
                var contentClass = '';
                var contentInnerClass = '';
                var modalPos = 0;
                var scrollPos = 0;
                var modalHeight = 0;

                function contentTypeSetting() {
                    //Conditions for modes
                    if (settings.contentType === 'video') {
                        modalContent = thisModal.find('iframe');
                        btn = $('.btn-video');
                        contentClass = 'modal-video';
                        contentInnerClass = 'video-content';
                    } else if (settings.contentType === 'custom') {
                        //modalContent is set to children or overridden;
                        btn = $('.btn-custom');
                        contentClass = 'modal-custom';
                        contentInnerClass = 'custom-content';
                    } else if (settings.contentType === 'image') {
                        modalContent = thisModal.find('img');
                        btn = $('.btn-image');
                        contentClass = 'modal-image';
                        contentInnerClass = 'image-content';
                    } else if (settings.contentType === 'alert') {
                        btn = $('.btn-alert');
                        contentClass = 'modal-alert';
                        contentInnerClass = 'alert-content';
                    }

                    console.log('settings.contentType', settings.contentType);

                    populate();
                }

                function positionSetting() {
                    if (settings.postion === 'top') {
                        scrollPos = $(window).scrollTop();
                        modalPos = scrollPos;
                        wrapper.css({'top': modalPos});
                    }
                    else if (settings.postion === 'center') {
                        modalHeight = wrapper.height();
                        modalPos = scrollPos + modalHeight/2;
                        wrapper.css({'top': modalPos});
                    }
                    else if (settings.postion === 'off') {
                        //do nothing
                    }
                }

                function populate() {
                    thisModal.empty();
                    modalContent.appendTo(wrapper);
                    wrapper.addClass(contentClass);
                    //content.addClass(contentInnerClass);
                }

                function setTabindex(tabindex) {
                    if (tabindex === true) {
                        $('a, button, input').attr('tabindex','-1');
                        btnClose.attr('tabindex','1');
                    }
                    else {
                        $('a, button, input').removeAttr('tabindex');
                        btnClose.attr('tabindex','-1');
                    }
                }

                function hideModal() {
                    wrapper.fadeOut('slow', function() {
                        overlay.fadeOut('slow', function() {
                            $(this).hide();
                        });
                    }).removeClass('active');
                    
                    setTabindex(false);
                            
                    stopVideo();
                }

                function showHideOnClick() {
                    $(btn).on('click', function(e) {
                        if (settings.contentType !== 'alert') {
                            e.preventDefault();
                        }

                        if (wrapper.hasClass('active')) {
                            hideModal();
                        } else {
                            overlay.fadeIn('slow', function() {
                                wrapper.fadeIn().addClass('active');
                                positionSetting();

                                setTabindex(true);
                                
                            });
                        }
                    });
                }

                function closeModalButton() {
                    wrapper.on('click', function(e) {
                        e.preventDefault();
                        hideModal();
                    });
                }

                function closeModalOverlay() {
                    overlay.on('click', function(e) {
                        e.preventDefault();
                        hideModal();
                    });
                }

                function closeModalEscape() {
                    document.onkeydown = function(e) {
                        e = e || window.event;
                        if (e.keyCode === 27) {
                            hideModal();
                        }
                    };
                }

                function stopVideo() {
                    if (settings.contentType === 'video' && settings.resetPlay) {
                        modalContent.attr('src', modalContent.attr('src'));
                    }
                }

                $('document').ready(function() {
                    //Init functions
                    contentTypeSetting();
                    showHideOnClick();
                    closeModalButton();
                    closeModalOverlay();
                    closeModalEscape();
                });
            });
                //end each
        };
        //end jquery extend

    })(jQuery);


}); //end define