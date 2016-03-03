(function() {
    'use strict';

    angular
        .module('app.ecommerce')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Ecommerce', 'ecommerce', 'dropdown', null, true, null, 10, 'icon-basket-loaded');
        Menus.addSubMenuItem('sidebar', 'ecommerce', 'Orders',       'ecommerce/orders');
        Menus.addSubMenuItem('sidebar', 'ecommerce', 'Order View',   'ecommerce/order-view');
        Menus.addSubMenuItem('sidebar', 'ecommerce', 'Products',     'ecommerce/products');
        Menus.addSubMenuItem('sidebar', 'ecommerce', 'Product View', 'ecommerce/product/1');

    }

})();