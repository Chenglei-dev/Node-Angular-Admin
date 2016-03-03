(function() {
    'use strict';

    angular
        .module('app.extras')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Extras', 'extras', 'dropdown', null, true, null, 8, 'icon-cup');
        Menus.addSubMenuItem('sidebar', 'extras', 'Forum',       'extras/forum');
        Menus.addSubMenuItem('sidebar', 'extras', 'Mailbox',     'extras/mailbox/folder/inbox');
        Menus.addSubMenuItem('sidebar', 'extras', 'Timeline',    'extras/timeline');
        Menus.addSubMenuItem('sidebar', 'extras', 'Calendar',    'extras/calendar');
        Menus.addSubMenuItem('sidebar', 'extras', 'Invoice',     'extras/invoice');
        Menus.addSubMenuItem('sidebar', 'extras', 'Search',      'extras/search');
        Menus.addSubMenuItem('sidebar', 'extras', 'Todo List',   'extras/todo');
        Menus.addSubMenuItem('sidebar', 'extras', 'Profile',     'extras/profile');
        Menus.addSubMenuItem('sidebar', 'extras', 'Code Editor', 'extras/code-editor');
    }

})();