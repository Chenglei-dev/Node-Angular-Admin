(function() {
    'use strict';

    angular
        .module('app.forms')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', 'Forms', 'forms', 'dropdown', null, true, null, 4, 'icon-note');
        Menus.addSubMenuItem('sidebar', 'forms', 'Standard',    'form/standard');
        Menus.addSubMenuItem('sidebar', 'forms', 'Extended',    'form/extended');
        Menus.addSubMenuItem('sidebar', 'forms', 'Validation',  'form/validation');
        Menus.addSubMenuItem('sidebar', 'forms', 'Parsley',     'form/parsley');
        Menus.addSubMenuItem('sidebar', 'forms', 'Wizard',      'form/wizard');
        Menus.addSubMenuItem('sidebar', 'forms', 'Upload',      'form/upload');
        Menus.addSubMenuItem('sidebar', 'forms', 'xEditable',   'form/xeditable');
        Menus.addSubMenuItem('sidebar', 'forms', 'Image Crop',  'form/imagecrop');
        Menus.addSubMenuItem('sidebar', 'forms', 'uiSelect',    'form/uiselect');

    }

})();