(function() {
    'use strict';

    angular
        .module('app.tables')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Tables', 'tables', 'dropdown', null, true, null, 6, 'icon-grid');
        Menus.addSubMenuItem('sidebar', 'tables', 'Standard',     'table/standard');
        Menus.addSubMenuItem('sidebar', 'tables', 'Extended',     'table/extended');
        Menus.addSubMenuItem('sidebar', 'tables', 'DataTables',   'table/datatable');
        Menus.addSubMenuItem('sidebar', 'tables', 'ngTables',     'table/ngtable');
        Menus.addSubMenuItem('sidebar', 'tables', 'uiGrid',       'table/uigrid');
        Menus.addSubMenuItem('sidebar', 'tables', 'xEditable',    'table/xeditable');
        Menus.addSubMenuItem('sidebar', 'tables', 'Angular Grid', 'table/angulargrid');

    }

})();