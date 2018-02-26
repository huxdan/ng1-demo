var myApp = angular.module('myApp',[
    'ngRoute'
]);

myApp.config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
        .when('/home',{
            templateUrl:'home/dashboard/dashboard.html',
            controller:'dashboardCtrl'
        }).otherwise({ redirectTo: '/home/dashoboard' });
    }   
]);