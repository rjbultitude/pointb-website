require.config({
    paths: {
        jquery: 'libs/jquery',
        d3: 'libs/d3',
        requirejs: 'libs/require',
        hbs: 'libs/require-handlebars-plugin/hbs',
        debug: 'modules/debug',
        mobileNav: 'modules/mobile-nav',
        filterPatches: 'modules/filter-patches',
        scrollBackground: 'modules/scroll-background',
        loadData: 'modules/load-data',
        structureData: 'modules/structure-data',
        createDrawGraph: 'modules/draw-graph',
        music: 'modules/music',
        tabsPlugin: 'plugins/jquery.tabs.plugin',
        easing: 'libs/jquery.easing.1.3'
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
define(['jquery', 'debug', 'base', 'mobileNav', 'scrollBackground', 'easing'], function ($, debug, base, mobileNav, scrollBackground) {
    'use strict';

    //App inits
    base.init();

    /* ---------- App modules ----------------------------------------------- */
    mobileNav.init();
    scrollBackground.init();

    if (base.isPatchesPage()) {
        debug.log('patches');
        require(['filterPatches'], function(filterPatches) {
            filterPatches.init();
        });
    }

    if (base.isDiscogPage()) {
        debug.log('discog');
        require(['loadData'], function(loadDataModule) {
            loadDataModule.init();
        });
    }

    if (base.isMusicPage()) {
        debug.log('music');
        require(['music'], function(music) {
            music.init();
        });
    }

    /* ---------- Plugins --------------------------------------------------- */
    if (base.isTabs()) {
        debug.log('tabs');
        $('.tabs').JQueryTabsPlugin();
    }
});