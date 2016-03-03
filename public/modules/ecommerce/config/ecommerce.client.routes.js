(function() {
    'use strict';

    angular
        .module('app.ecommerce')
        .config(appRoutes);
    appRoutes.$inject = ['$stateProvider', 'RouteHelpersProvider'];

    function appRoutes($stateProvider, helper) {

        $stateProvider
            .state('app.orders', {
                url: '/ecommerce/orders',
                title: 'Orders',
                templateUrl: 'modules/ecommerce/views/ecommerce-orders.client.view.html',
                resolve: helper.resolveFor('datatables')
            })
            .state('app.order-view', {
                url: '/ecommerce/order-view',
                title: 'Order View',
                templateUrl: 'modules/ecommerce/views/ecommerce-order-view.client.view.html'
            })
            .state('app.products', {
                url: '/ecommerce/products',
                title: 'Products',
                templateUrl: 'modules/ecommerce/views/ecommerce-products.client.view.html',
                resolve: helper.resolveFor('datatables')
            })
            .state('app.product-view', {
                url: '/ecommerce/product/:id',
                title: 'Product View',
                templateUrl: 'modules/ecommerce/views/ecommerce-product-view.client.view.html'
            });

    }
})();