///**
// * Jquery Plugin: mini jquery modal
// *
// * $author       Richard Bultitude
// * $email        rbultitude@thisiszone.com
// * $url          http://www.thisiszone.com/
// * $copyright    Copyright (c) 2014, thisiszone.com. All rights reserved.
// * $version      1.2
// *
// * $notes       There are five modes:
//                video (which uses an iframe),
//                image,
//                default,
//                alert,       
//                custom
//
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
                contentType : 'default',
                position : 'scroll',
                resetPlay : true,
                triggerButton : null
            }, options);

            return this.each(function(index) {
                //init
                var thisModal = $(this);
                var thisModalNew = thisModal.clone();
                //new elements
                var thisModalWrap = null;
                var overlay = null;
                var btn = null;
                var btnClose = null;
                var contentClass = '';
                var contentInnerClass = '';
                //position
                var modalPos = 0;
                var scrollPos = 0;
                var modalHeight = 0;

                function createEls() {
                    //create & populate modal
                    $('<div class="modal"></div>').appendTo('body');
                    thisModalWrap = $('.modal');

                    //create close button
                    $('<a class="close"><span class="text">close</text><span class="icon"></span></a>').appendTo(thisModalWrap);
                    btnClose = $('.close', thisModalWrap);
                    
                    //create overlay
                    overlay = $('<div class="overlay"></div>');
                    overlay.appendTo('body');

                    //remove original html
                    thisModal.remove();

                    populate();
                }

                function populate() {
                    thisModalNew.appendTo(thisModalWrap);
                    thisModalWrap.addClass(contentClass);
                }

                function contentTypeSetting() {
                    //Conditions for modes
                    if (settings.contentType === 'video') {
                        modalContent = thisModal.find('iframe');
                        btn = $('.btn-video');
                        contentClass = 'modal-video';
                        contentInnerClass = 'video-content';
                    } else if (settings.contentType === 'custom') {
                        //modalContent is set to children or overridden;
                        btn = '.btn' || settings.triggerButton;
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
                    } else if (settings.contentType === 'default') {
                        btn = $('.btn-modal');
                        contentClass = 'modal-default';
                        contentInnerClass = '';
                    }

                    //populate();
                }

                function positionSetting() {
                    if (settings.postion === 'top') {
                        scrollPos = $(window).scrollTop();
                        modalPos = scrollPos;
                        thisModalWrap.css({'top': modalPos});
                    }
                    else if (settings.postion === 'center') {
                        modalHeight = thisModalWrap.height();
                        modalPos = scrollPos + modalHeight/2;
                        thisModalWrap.css({'top': modalPos});
                    }
                    else if (settings.postion === 'off') {
                        //do nothing
                    }
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
                    thisModalWrap.fadeOut('slow', function() {
                        overlay.fadeOut('slow', function() {
                            $(this).hide();
                        });
                    }).removeClass('active');
                    
                    setTabindex(false);
                            
                    stopVideo();
                }

                function showHideOnClick() {
                    var _triggerButton = null;
                    if (settings.triggerButton !== null) {
                        _triggerButton = settings.triggerButton;
                    }
                    else {
                        _triggerButton = btn;
                    }
                    $(_triggerButton).on('click.modal', function(e) {
                        if (settings.contentType !== 'alert') {
                            e.preventDefault();
                        }

                        if (thisModalWrap.hasClass('active')) {
                            hideModal();
                        } else {
                            overlay.fadeIn('slow', function() {
                                thisModalWrap.fadeIn().addClass('active');
                                positionSetting();

                                setTabindex(true);
                                
                            });
                        }
                    });
                }

                function closeModalButton() {
                    thisModalWrap.on('click', function(e) {
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
                    createEls();
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