require.config({
    paths: {
        jquery: '/src/scripts/libs/jquery',
        d3: '/src/scripts/libs/d3',
        requirejs: '/src/scripts/libs/require',
        hbs: 'libs/require-handlebars-plugin/hbs',
        debug: '/src/scripts/modules/debug',
        mobileNav: '/src/scripts/modules/mobile-nav',
        filterPatches: '/src/scripts/modules/filter-patches',
        scrollBackground: '/src/scripts/modules/scroll-background',
        loadData: '/src/scripts/modules/load-data',
        structureData: '/src/scripts/modules/structure-data',
        createDrawGraph: '/src/scripts/modules/draw-graph',
        music: '/src/scripts/modules/music',
        tabsPlugin: '/src/scripts/plugins/jquery.tabs.plugin',
        easing: '/src/scripts/libs/jquery.easing.1.3'
    },
    shim: {
        d3: {
            exports: 'd3'
        }
    },
    hbs: { // optional
        helpers: true,            // default: true
        i18n: false,              // default: false
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
    }
});

// Start the main app logic.
require(['jquery', 'debug', 'base', 'mobileNav', 'filterPatches', 'scrollBackground', 'loadData', 'music', 'tabsPlugin', 'easing'], function ($, debug, base, mobileNav, filterPatches, scrollBackground, loadDataModule, music) {
    'use strict';

    //App inits
    base.init();

    /* ---------- App modules ----------------------------------------------- */
    mobileNav.init();
    scrollBackground.init();
    if (base.isPatchesPage()) {
        filterPatches.init();
    }

    if (base.isDiscogPage()) {
        debug.log('discog');
        loadDataModule.init();
    }

    if (base.isMusicPage()) {
        debug.log('music');
        music.init();
    }

    /* ---------- Plugins --------------------------------------------------- */
    if (base.isTabs()) {
        debug.log('tabs');
        $('.tabs').JQueryTabsPlugin();
    }

    /* ---------- Utilities ------------------------------------------------- */
    if (!base.ltIe9) {
        //load something that is for IE9 or greater
    }
});