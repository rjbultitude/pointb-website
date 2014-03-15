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
        musicList: $('#music-list'),

        /* ---------- Init -------------------------------------------------- */
        init: function loadData() {
            debug.log('music init');
            music.getData();
        },

        getData: function getDataFn() {
            $.ajax({
                type: 'GET',
                url: '/data/music-data.json',
                dataType: 'json',
                success: function(data) {
                    music.musicData = data;
                    music.outputData();
                },
                error: function() {
                    debug.log('error');
                }
            });
        },

        outputData: function outputDataFn() {
            music.musicList.empty();
            // debug.log('music.musicData', music.musicData);
            for (var i = 0; i < music.musicData.length; i++) {
                music.musicList.html(musicTmpl(music.musicData[i]));
            }
        }

    };

    return music;

});