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
        results: $('.search-results'),
        group: null,
        noResults: $('.no-results'),
        checkboxes: [],
        numberCheckboxes: 0,


        /* ---------- Init -------------------------------------------------- */
        init: function loadData() {
            filterPatches.getData();
            filterPatches.formAction();
        },

        getData: function getDataFn() {
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

        setGroup: function setGroupFn(patchesKey) {
            filterPatches.results.append('<div class="results-group results-group-' + patchesKey + '"></div>');
            filterPatches.group = $('.results-group-' + patchesKey + '', filterPatches.results);
        },

        createHeading: function createHeadingFn(headingText) {
             $('<h3 class="group-heading">' + headingText + '</h3>').appendTo(filterPatches.group);
        },

        createList: function createListFn() {
            filterPatches.group.append('<ul class="results-list"></ul>');
        },

        formAction: function formActionFn() {
            $('[role="search"] [role="button"]').on('click', function(e) {
                e.preventDefault();
                filterPatches.results.empty();
                filterPatches.getCheckboxValues();
            });
        },

        getCheckboxValues: function getCheckboxesFn() {
            //Checkbox solution
                filterPatches.checkboxes.length = 0;
                $('input:checked').each(function() {
                    filterPatches.checkboxes.push(this.id);
                });
                if (filterPatches.checkboxes.length === 0) {
                    filterPatches.results.empty().append(filterPatches.noResults);
                }
                else {
                    for (var i = 0; i < filterPatches.checkboxes.length; i++) {
                        filterPatches.submitQuery(filterPatches.checkboxes[i]);
                    };
                }
        },

        getSelectMenuValue: function getSelectMenuValueFn() {
            //Selectmenu solution
            var selectValue = $('#selectCategory option:selected').val();
            filterPatches.submitQuery(selectValue);
        },

        submitQuery: function submitQueryFn(selectValue) {
            for (var dataKey in filterPatches.dataPatches) {
                var patchesObjects = filterPatches.dataPatches[dataKey];
                var patchesKey = dataKey;
                
                if (selectValue === patchesKey) {
                    //Sort out basic html
                    filterPatches.setGroup(patchesKey);
                    filterPatches.createHeading(patchesKey);
                    filterPatches.createList();
                    debug.log('filterPatches.group ', filterPatches.group);
                    filterPatches.group.each(function(){
                        var thisGroup = $(this);
                        var thisResultsList = thisGroup.find('ul');
                        for (var j = 0; j < patchesObjects.length; j++) {
                            var newBlock = $('<li class="list-item"></li>').appendTo(thisResultsList);
                            var thisPatch = patchesObjects[j];
                            
                            for (var thisPatchKey in thisPatch) {
                                if (thisPatchKey === 'link') {
                                    $('<a href="' + thisPatch[thisPatchKey] + '">Click here</a>').appendTo(newBlock);
                                } 
                                else if (thisPatchKey === 'title') {
                                    $('<h4 class="heading">' + thisPatch[thisPatchKey] + '</h4>').appendTo(newBlock);
                                }
                                else {
                                    $('<p>' + thisPatch[thisPatchKey] + '</p>').appendTo(newBlock);
                                }
                                //$('<p>' + thisPatchKey + '</p>').appendTo(newBlock);
                            }
                        }
                    });
                }
            }
        }

    };

    return filterPatches;

});