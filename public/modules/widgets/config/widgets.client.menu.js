(function() {
    'use strict';

    angular
        .module('app.widgets')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Widgets', 'widgets', null, '/widgets', true, null, 2, 'icon-grid');

    }

})();