 require.config({
    paths: {
        //libs
        jquery: 'libs/jquery',
        d3: 'libs/d3',
        requirejs: 'libs/require',
        hbs: 'libs/require-handlebars-plugin/hbs',
        sketch: 'libs/sketch',
        easing: 'libs/jquery.easing.1.3',
        p5: 'libs/p5',

        //modules
        mobileNav: 'modules/mobile-nav',
        filterPatches: 'modules/filter-patches',
        scrollBackground: 'modules/scroll-background',
        loadData: 'modules/load-data',
        structureData: 'modules/structure-data',
        createDrawGraph: 'modules/draw-graph',
        music: 'modules/music',
        toys: 'modules/toys',
        canvasHeader: 'modules/canvas-header',
        
        //plugins
        tabsPlugin: 'plugins/jquery.tabs.plugin',
        modalPlugin: 'plugins/jquery.modal',
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
define(['jquery', 'base', 'mobileNav', 'scrollBackground', 'easing'], function ($, base, mobileNav, scrollBackground) {
    'use strict';

    //App inits
    base.init();

    /* ---------- App modules ----------------------------------------------- */
    mobileNav.init();
    scrollBackground.init();

    if (base.isHomePage()) {
        //require(['canvasHeader']);
    }

    if (base.isPatchesPage()) {
        require(['filterPatches'], function(filterPatches) {
            filterPatches.init();
        });
    }

    if (base.isDiscogPage()) {
        require(['loadData'], function(loadDataModule) {
            loadDataModule.init();
        });
    }

    if (base.isMusicPage()) {
        require(['music'], function(music) {
            music.init();
        });
    }

    if (base.isToysPage()) {
        require(['toys']);
    }

    /* ---------- Plugins --------------------------------------------------- */
    if (base.isTabs()) {
        require(['tabsPlugin'], function() {
            $('.tabs').JQueryTabsPlugin();
        });
    }
});