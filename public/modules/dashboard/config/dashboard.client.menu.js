(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Dashboard', 'dashboard', 'dropdown', null, true, null, 1, 'icon-speedometer');
        Menus.addSubMenuItem('sidebar', 'dashboard', 'Dashboard', 'dashboard');
        Menus.addSubMenuItem('sidebar', 'dashboard', 'Dashboard v2', 'dashboard/v2');
        Menus.addSubMenuItem('sidebar', 'dashboard', 'Dashboard v3', 'dashboard/v3');

    }

})();