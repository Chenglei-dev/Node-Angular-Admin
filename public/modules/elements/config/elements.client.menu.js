(function() {
    'use strict';

    angular
        .module('app.elements')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Elements', 'elements', 'dropdown', null, true, null, 3, 'icon-chemistry');
        Menus.addSubMenuItem('sidebar', 'elements', 'Buttons',           'elements/buttons');
        Menus.addSubMenuItem('sidebar', 'elements', 'Notifications',     'elements/notifications');
        Menus.addSubMenuItem('sidebar', 'elements', 'ngDialog',          'elements/ngdialog');
        Menus.addSubMenuItem('sidebar', 'elements', 'Sweet Alert',       'elements/sweetalert');
        Menus.addSubMenuItem('sidebar', 'elements', 'Tour',              'elements/tour');
        Menus.addSubMenuItem('sidebar', 'elements', 'Interaction',       'elements/interaction');
        Menus.addSubMenuItem('sidebar', 'elements', 'Carousel',          'elements/carousel');
        Menus.addSubMenuItem('sidebar', 'elements', 'Spinners',          'elements/spinners');
        Menus.addSubMenuItem('sidebar', 'elements', 'Dropdown',          'elements/dropdown-animations');
        Menus.addSubMenuItem('sidebar', 'elements', 'Nav Tree',          'elements/navtree');
        Menus.addSubMenuItem('sidebar', 'elements', 'Nestable',          'elements/nestable');
        Menus.addSubMenuItem('sidebar', 'elements', 'Sortable',          'elements/sortable');
        Menus.addSubMenuItem('sidebar', 'elements', 'Panels',            'elements/panels');
        Menus.addSubMenuItem('sidebar', 'elements', 'Portlets',          'elements/portlets');
        Menus.addSubMenuItem('sidebar', 'elements', 'Grid',              'elements/grid');
        Menus.addSubMenuItem('sidebar', 'elements', 'Grid Masonry',      'elements/grid-masonry');
        Menus.addSubMenuItem('sidebar', 'elements', 'Grid Masonry Deck', 'elements/grid-masonry-deck');
        Menus.addSubMenuItem('sidebar', 'elements', 'Typography',        'elements/typo');
        Menus.addSubMenuItem('sidebar', 'elements', 'Font Icons',        'elements/icons-font');
        Menus.addSubMenuItem('sidebar', 'elements', 'Weather Icons',     'elements/icons-weather');
        Menus.addSubMenuItem('sidebar', 'elements', 'Colors',            'elements/colors');
        Menus.addSubMenuItem('sidebar', 'elements', 'Localization',      'elements/localization');
        Menus.addSubMenuItem('sidebar', 'elements', 'Infinite scroll',   'elements/infinite-scroll');

    }

})();