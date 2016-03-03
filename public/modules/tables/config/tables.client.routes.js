(function() {
    'use strict';

    angular
        .module('app.tables')
        .config(appRoutes);
    appRoutes.$inject = ['$stateProvider', 'RouteHelpersProvider'];

    function appRoutes($stateProvider, helper) {

        $stateProvider
            .state('app.table-standard', {
                url: '/table/standard',
                title: 'Table Standard',
                templateUrl: 'modules/tables/views/table-standard.client.view.html'
            })
            .state('app.table-extended', {
                url: '/table/extended',
                title: 'Table Extended',
                templateUrl: 'modules/tables/views/table-extended.client.view.html'
            })
            .state('app.table-datatable', {
                url: '/table/datatable',
                title: 'Table Datatable',
                templateUrl: 'modules/tables/views/table-datatable.client.view.html',
                resolve: helper.resolveFor('datatables')
            })
            .state('app.table-xeditable', {
                url: '/table/xeditable',
                templateUrl: 'modules/tables/views/table-xeditable.client.view.html',
                resolve: helper.resolveFor('xeditable')
            })
            .state('app.table-ngtable', {
                url: '/table/ngtable',
                templateUrl: 'modules/tables/views/table-ngtable.client.view.html',
                resolve: helper.resolveFor('ngTable', 'ngTableExport')
            })
            .state('app.table-uigrid', {
                url: '/table/uigrid',
                templateUrl: 'modules/tables/views/table-uigrid.client.view.html',
                resolve: helper.resolveFor('ui.grid')
            })
            .state('app.table-angulargrid', {
                url: '/table/angulargrid',
                templateUrl: 'modules/tables/views/table-angulargrid.client.view.html',
                resolve: helper.resolveFor('angularGrid')
            });

    }
})();