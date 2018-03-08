angular.module('myApp').controller('dashboardCtrl',['$scope','$location',
  function($scope, $location){

      $('#slip-container').sliphover();

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
        src: 'http://placehold.it/200x200'
      },{
        id: 2,
        src: 'http://placehold.it/200x200'
      },{
        id: 3,
        src: 'http://placehold.it/200x200'
      },{
        id: 4,
        src: 'http://placehold.it/200x200'
      },{
        id: 5,
        src: 'http://placehold.it/200x200'
      },{
        id: 6,
        src: 'http://placehold.it/200x200'
      },{
        id: 7,
        src: 'http://placehold.it/200x200'
      },{
        id: 8,
        src: 'http://placehold.it/200x200'
      },{
        id: 9,
        src: 'http://placehold.it/200x200'
      },{
        id: 10,
        src: 'http://placehold.it/200x200'
      }
    ]
  }
])