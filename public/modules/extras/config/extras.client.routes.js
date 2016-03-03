(function() {
    'use strict';

    angular
        .module('app.extras')
        .config(appRoutes);
    appRoutes.$inject = ['$stateProvider', 'RouteHelpersProvider'];

    function appRoutes($stateProvider, helper) {

        $stateProvider
            .state('app.timeline', {
                url: '/extras/timeline',
                title: 'Timeline',
                templateUrl: 'modules/extras/views/timeline.client.view.html'
            })
            .state('app.calendar', {
                url: '/extras/calendar',
                title: 'Calendar',
                templateUrl: 'modules/extras/views/calendar.client.view.html',
                resolve: helper.resolveFor('jquery-ui', 'jquery-ui-widgets', 'moment', 'fullcalendar')
            })
            .state('app.invoice', {
                url: '/extras/invoice',
                title: 'Invoice',
                templateUrl: 'modules/extras/views/invoice.client.view.html'
            })
            .state('app.search', {
                url: '/extras/search',
                title: 'Search',
                templateUrl: 'modules/extras/views/search.client.view.html',
                resolve: helper.resolveFor('moment', 'localytics.directives', 'ui.bootstrap-slider')
            })
            .state('app.todo', {
                url: '/extras/todo',
                title: 'Todo List',
                templateUrl: 'modules/extras/views/todo.client.view.html',
                controller: 'TodoController',
                controllerAs: 'todo'
            })
            .state('app.userprofile', {
                url: '/extras/profile',
                title: 'Profile',
                templateUrl: 'modules/extras/views/profile.client.view.html',
                resolve: helper.resolveFor('loadGoogleMapsJS', function() {
                    return loadGoogleMaps();
                }, 'ui.map')
            })
            .state('app.code-editor', {
                url: '/extras/code-editor',
                templateUrl: 'modules/extras/views/code-editor.client.view.html',
                controller: 'CodeEditorController',
                controllerAs: 'coder',
                resolve: {
                    deps: helper.resolveFor('codemirror', 'ui.codemirror', 'codemirror-modes-web', 'angularBootstrapNavTree').deps,
                    filetree: ['LoadTreeService', function(LoadTreeService) {
                        return LoadTreeService.get().$promise.then(function(res) {
                            return res.data;
                        });
                    }]
                }
            })
            // Forum
            // -----------------------------------
            .state('app.forum', {
                url: '/extras/forum',
                title: 'Forum',
                templateUrl: 'modules/extras/views/forum.client.view.html'
            })
            .state('app.forum-topics', {
                url: '/extras/forum/topics/:catid',
                title: 'Forum Topics',
                templateUrl: 'modules/extras/views/forum-topics.client.view.html'
            })
            .state('app.forum-discussion', {
                url: '/extras/forum/discussion/:topid',
                title: 'Forum Discussion',
                templateUrl: 'modules/extras/views/forum-discussion.client.view.html'
            })
            // Mailbox
            // -----------------------------------
            .state('app.mailbox', {
                url: '/extras/mailbox',
                title: 'Mailbox',
                abstract: true,
                templateUrl: 'modules/extras/views/mailbox.client.view.html'
            })
            .state('app.mailbox.folder', {
                url: '/folder/:folder',
                title: 'Mailbox',
                templateUrl: 'modules/extras/views/mailbox-inbox.client.view.html'
            })
            .state('app.mailbox.view', {
                url: '/{mid:[0-9]{1,4}}',
                title: 'View mail',
                templateUrl: 'modules/extras/views/mailbox-view.client.view.html',
                resolve: helper.resolveFor('ngWig')
            })
            .state('app.mailbox.compose', {
                url: '/compose',
                title: 'Mailbox',
                templateUrl: 'modules/extras/views/mailbox-compose.client.view.html',
                resolve: helper.resolveFor('ngWig')
            });

    }
})();