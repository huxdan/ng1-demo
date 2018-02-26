var myApp = angular.module('myApp',[
    'ngRoute'
]);

myApp.config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/Home/dashboard',{
            templateUrl:'src/home/dashboard/dashboard.html',
            controller:'dashboardCtrl'
        })
    }   
]);