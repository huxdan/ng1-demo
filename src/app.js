var myApp = angular.module('myApp',['ui.router'
]);

myApp.config(['$locationProvider', '$stateProvider','$urlRouterProvider',
  function ($locationProvider, $stateProvider,$urlRouterProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'/home/dashboard/dashboard.html'
    })
    .state('about',{
      url:'/about',
      templateUrl:'/home/about/about.html'
    })
  }   
]);