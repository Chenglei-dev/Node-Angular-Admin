(function() {
    'use strict';

    angular
        .module('app.blog')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Blog', 'blog', 'dropdown', null, true, null, 9, 'icon-pencil');
        Menus.addSubMenuItem('sidebar', 'blog', 'List',         'blog/list');
        Menus.addSubMenuItem('sidebar', 'blog', 'Post',         'blog/post');
        Menus.addSubMenuItem('sidebar', 'blog', 'Articles',     'blog/articles');
        Menus.addSubMenuItem('sidebar', 'blog', 'Article View', 'blog/article/123');

    }

})();