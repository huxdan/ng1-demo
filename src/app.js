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
    .state('tutorial',{
      url:'/tutorial/:id',
      templateUrl:'/home/tutorial-detail/tutorial-detail.html'
    })
    .state('tutorials',{
      url:'/tutorial',
      templateUrl:'/home/tutorial/tutorial.html'
    })
  }   
]);