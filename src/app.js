var myApp = angular.module('myApp',['ui.router'
]);

myApp.config(['$locationProvider', '$stateProvider',
  function ($locationProvider, $stateProvider) {
    $locationProvider.hashPrefix('');
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