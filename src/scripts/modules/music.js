/**
 * Music
 *
 * $author       Richard Bultitude
 * $email        richard.bultitude@google.com
 * $url          http://www.point-b.co.uk/
 * $copyright    Copyright (c) 2013, point-b.co.uk. All rights reserved.
 *
 * $notes        Notes
 */

var requireLocalized = requireLocalized || {};

define(['debug', 'jquery', 'hbs!/Templates/music-list-template'], function(debug, $, musicTmpl) {
    'use strict';

    var music = {

        musicData: null,

        /* ---------- Init -------------------------------------------------- */
        init: function loadData() {
            music.getData();
            music.outputData();
        },

        getData: function getDataFn() {
            $.ajax({
                type: 'GET',
                url: '/data/music-data.json',
                dataType: 'json',
                success: function(data) {
                    music.musicData = data;
                },
                error: function() {
                    debug.log('error');
                }
            });
        },

        outputData: function outputDataFn() {
            //document.body.innerHTML = musicTmpl({adjective: "favorite"});
        }

    };

    return music;

});