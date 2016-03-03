(function() {
    'use strict';

    angular
        .module('app.charts')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Charts', 'charts', 'dropdown', null, true, null, 5, 'icon-graph');
        Menus.addSubMenuItem('sidebar', 'charts', 'Flot',     'chart/flot');
        Menus.addSubMenuItem('sidebar', 'charts', 'Radial',   'chart/radial');
        Menus.addSubMenuItem('sidebar', 'charts', 'Chart JS', 'chart/chartjs');
        Menus.addSubMenuItem('sidebar', 'charts', 'Rickshaw', 'chart/rickshaw');
        Menus.addSubMenuItem('sidebar', 'charts', 'MorrisJS', 'chart/morris');
        Menus.addSubMenuItem('sidebar', 'charts', 'Chartist', 'chart/chartist');

    }

})();