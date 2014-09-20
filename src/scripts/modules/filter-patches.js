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

define(['debug', 'jquery', 'base', 'hbs!/templates/patches-filter-template', 'hbs!/templates/patches-results-template'], function(debug, $, base, patchesTmpl, patchesResTmpl) {
    'use strict';

    var filterPatches = {

        dataPatches: null,
        results: $('.search-results'),
        formContainer: $('.form-container'),
        currentGroup: null,
        groups: null,
        noResults: $('.no-results'),
        checkboxes: [],
        numberCheckboxes: 0,


        /* ---------- Init -------------------------------------------------- */
        init: function initFn() {
            console.log('init');
            filterPatches.getData();
            filterPatches.formAction();
            base.removeLoad();
        },

        getData: function getDataFn() {
            $.ajax({
                type: 'GET',
                url: '/data/patches.json',
                dataType: 'json',
                success: function(data) {
                    filterPatches.dataPatches = data;
                    filterPatches.createLabels();
                },
                error: function() {
                    debug.log('error');
                }
            });
        },

        createLabels: function createLabelsFn() {
            console.log('filterPatches.dataPatches', filterPatches.dataPatches)
            for (var patchKey in filterPatches.dataPatches) {
                filterPatches.formContainer.append(patchesTmpl(patchKey));
            }
            //filterPatches.labelsActive();
        },

        labelsActive: function labelsActiveFn() {
            $('.form-item label').each(function() {
                $(this).on('click', function() {
                    $(this).toggleClass('active');
                });
            });
        },

        createGroup: function createGroupFn(patchesKey) {
            filterPatches.results.append('<div class="results-group results-group-' + patchesKey + ' load"></div>');
            base.removeLoad();
            filterPatches.currentGroup = $('.results-group-' + patchesKey + '', filterPatches.results);
        },

        sizeGroups: function sizeGroupsFn() {
            var mq = window.matchMedia('@media all and (max-width: 48.750em)');
            filterPatches.groups.each(function(){
                if (filterPatches.groups.length % 2 === 0 && mq.matches === false) {
                    $(this).removeClass('full').addClass('half');
                }
                else if (filterPatches.groups.length === 1) {
                    $(this).removeClass('half').addClass('full');
                }
            });
        },

        createHeading: function createHeadingFn(headingText) {
             $('<h3 class="group-heading">' + headingText + '</h3>').appendTo(filterPatches.currentGroup);
        },

        createList: function createListFn(thisID) {
            filterPatches.currentGroup.append('<ul class="results-list" id="list-' + thisID + '"></ul>');
            var currentGroupList = filterPatches.currentGroup.find('.results-list');
            return currentGroupList;
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
                    filterPatches.createGroup(patchesKey);
                    filterPatches.createHeading(patchesKey);
                    var currentList = filterPatches.createList(patchesKey);

                    filterPatches.groups = filterPatches.results.find('.results-group');
                    
                    var thisResultsList = filterPatches.currentGroup.find('ul');

                    //debug.log('patchesObjects.length',patchesObjects.length);
                    for (var j = 0; j < patchesObjects.length; j++) {
                        var thisPatch = patchesObjects[j];
                        currentList.append(patchesResTmpl(thisPatch));
                    }
                }
            }
            filterPatches.sizeGroups();
        }

    };

    return filterPatches;

});