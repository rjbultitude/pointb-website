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
        musicListNew: $('#new [role="list"]'),
        musicListRemixes: $('#remixes [role="list"]'),
        musicListArchives: $('#archives [role="list"]'),

        /* ---------- Init -------------------------------------------------- */
        init: function loadData() {
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
            //new music
            music.musicListNew.empty();
            for (var newKey in music.musicData) {
                var dataNew = music.musicData[newKey];
                if (newKey === 'new') {
                    for (var i = 0; i < dataNew.length; i++) {
                        music.musicListNew.append(musicTmpl(dataNew[i]));
                    }
                }
            }
            //remixes music
            music.musicListRemixes.empty();
            for (var remixesKey in music.musicData) {
                var dataRemixes = music.musicData[remixesKey];
                if (remixesKey === 'remixes') {
                    for (var i = 0; i < dataRemixes.length; i++) {
                        music.musicListRemixes.append(musicTmpl(dataRemixes[i]));
                    }
                }
            }
            //archive music
            music.musicListArchives.empty();
            for (var archivesKey in music.musicData) {
                var dataArchives = music.musicData[archivesKey];
                if (archivesKey === 'archives') {
                    for (var i = 0; i < dataArchives.length; i++) {
                        music.musicListArchives.append(musicTmpl(dataArchives[i]));
                    }
                }
            }
        }

    };

    return music;

});