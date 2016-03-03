(function() {
    'use strict';

    angular
        .module('app.maps')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Maps', 'maps', 'dropdown', null, true, null, 7, 'icon-speedometer');
        Menus.addSubMenuItem('sidebar', 'maps', 'Maps Google', 'maps/google');
        Menus.addSubMenuItem('sidebar', 'maps', 'Maps Vector', 'maps/vector');

    }

})();
