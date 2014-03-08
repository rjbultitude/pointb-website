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

define(['debug', 'jquery'], function(debug, $) {
    'use strict';

    var filterPatches = {

        dataPatches: null,
        results: $('.filter-results'),
        checkboxes: [],
        numberCheckboxes: 0,


        /* ---------- Init -------------------------------------------------- */
        init: function loadData() {
            filterPatches.getData();
            //filterPatches.getCheckboxes();
            filterPatches.formAction();
        },

        getData: function getDataFn() {
            // $.get('data/patches.json', function(data) {
            //     debug.log(data);
            //     filterPatches.dataPatches = data;
            // });
            $.ajax({
                type: 'GET',
                url: '/data/patches.json',
                dataType: 'json',
                success: function(data) {
                    filterPatches.dataPatches = data;
                },
                error: function() {
                    debug.log('error');
                }
            });
        },

        formAction: function formActionFn() {
            $('[role="search"] [role="button"]').on('click', function(e) {
                e.preventDefault();
                filterPatches.results.empty();
                var selectValue = $('#selectCategory option:selected').val();
                debug.log('selectValue', selectValue);

                filterPatches.submitQuery(selectValue);
            });
        },

        //not needed?
        // getCheckboxes: function getCheckboxesFn() {
        //     filterPatches.numberCheckboxes = $('[role="search"] input[type="checkbox"]').length;
        //     $('input[type="checkbox"]').each(function() {
        //         filterPatches.checkboxes.push($(this).attr('id'));
        //     });
        //     debug.log('filterPatches.checkboxes', filterPatches.checkboxes);
        // },

        submitQuery: function submitQueryFn(selectValue) {
            for (var dataKey in filterPatches.dataPatches) {
                var newBlock = $('<div class="newBlock"></div>').appendTo(filterPatches.results);
                var patchesObjects = filterPatches.dataPatches[dataKey];
                var patchesKey = dataKey;
                if (selectValue === patchesKey) {
                    for (var j = 0; j < patchesObjects.length; j++) {
                        var thisPatch = patchesObjects[j];
                        for (var thisPatchKey in thisPatch) {
                            if (thisPatchKey === 'link') {
                                $('<a href="' + thisPatch[thisPatchKey] + '">Click here</a>').appendTo(newBlock);    
                            }
                            else {
                                $('<p>' + thisPatch[thisPatchKey] + '</p>').appendTo(newBlock);
                            }
                            //$('<p>' + thisPatchKey + '</p>').appendTo(newBlock);
                        }
                    }
                }
            }
        }

    };

    return filterPatches;

});