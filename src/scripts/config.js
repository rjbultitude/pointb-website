require.config({
    paths: {
        jquery: '/src/scripts/libs/jquery',
        debug: '/src/scripts/modules/debug',
        requirejs: '/src/scripts/libs/require',
        mobileNav: '/src/scripts/modules/mobile-nav',
        filterPatches: '/src/scripts/modules/filter-patches',
        tabsPlugin: '/src/scripts/plugins/jquery.tabs.plugin',
        exampleJqueryPlugin: '/src/scripts/plugins/example-jquery-plugin',
        easing: '/src/scripts/libs/jquery.easing.1.3'
    }
});

// Start the main app logic.
require(['jquery', 'debug', 'base', 'mobileNav', 'filterPatches', 'tabsPlugin', 'easing'], function ($, debug, base, mobileNav, filterPatches) {
    'use strict';

    //App inits
    base.init();

    /* ---------- App modules ----------------------------------------------- */
    mobileNav.init();
    filterPatches.init();

    /* ---------- Plugins --------------------------------------------------- */
    if (base.isPatchesPage) {
        $('.tabs').JQueryTabsPlugin();
    }

    /* ---------- Utilities ------------------------------------------------- */
    if (!base.ltIe9) {
        //load something that is for IE9 or greater
    }
});