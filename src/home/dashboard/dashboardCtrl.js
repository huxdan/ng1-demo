angular.module('myApp').controller('dashboardCtrl',['$scope','$location',
  function($scope, $location){

    $scope.title='Hello Dashboard...'
    $scope.onClick = function(){
      alert("sdf");      
    }

    $scope.imgClick = function(){
      $location.url('about');
    }

    $scope.items = [
      {
        id: 1,
        src: 'http://placehold.it/200x200',
        title:'this is title'        
      },{
        id: 2,
        src: 'http://placehold.it/200x200',
        title:'this is title'  
      },{
        id: 3,
        src: 'http://placehold.it/200x200',
        title:'this is title'  
      },{
        id: 4,
        src: 'http://placehold.it/200x200',
        title:'this is title'  
      },{
        id: 5,
        src: 'http://placehold.it/200x200',
        title:'this is title'  
      },{
        id: 6,
        src: 'http://placehold.it/200x200',
        title:'this is title'  
      },{
        id: 7,
        src: 'http://placehold.it/200x200',
        title:'this is title'  
      },{
        id: 8,
        src: 'http://placehold.it/200x200',
        title:'this is title'  
      },{
        id: 9,
        src: 'http://placehold.it/200x200',
        title:'this is title'  
      },{
        id: 10,
        src: 'http://placehold.it/200x200',
        title:'this is title'  
      }
    ]
  }
])