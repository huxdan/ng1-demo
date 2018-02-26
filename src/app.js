var myApp = angular.module('myApp',['ui.router'
]);

myApp.config(['$locationProvider', '$stateProvider',
    function ($locationProvider, $stateProvider) {
        $locationProvider.hashPrefix('');
        $stateProvider
        .state('home',{
            url:'/',
            views:{
                '':{
                    templateUrl:'home/dashboard/dashboard.html',
                    controller:'dashboardCtrl'
                },
                'status':{
                    template:'status pages'
                }
            }
        })
    }   
]);