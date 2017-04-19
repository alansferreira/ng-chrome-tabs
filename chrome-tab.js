var angular = require('./node_modules/angular/angular');

angular.directive('chrome-tab', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            tabs: '='
        },

        templateUrl: path.join(__dirname, 'chrome-tabs.tmpl.html'),

        link: function (scope, element) {

        },

    };
});

// var ChromeTabs = require('./js/chrome-tabs');
// var angular = require('./node_modules/angular/angular');

// angular.directive('chrome-tab', function () {
//     return {
//         restrict: 'E',
//         replace: true,
//         scope: {
//             tabs: '='
//         },

//         templateUrl: path.join(__dirname, 'chrome-tabs.tmpl.html'),

//         link: function (scope, element) {
//             var chromeTabs = new ChromeTabs();
//             chromeTabs.init(el, {
//               tabOverlapDistance: 14,
//               minWidth: 45,
//               maxWidth: 243
//             });

//             for (var t = 0; t < scope.tabs.length; t++) {
//                 var tab = scope.tabs[t];
//                 chromeTabs.addTab(tab);
//             }

//         },

//     };
// });