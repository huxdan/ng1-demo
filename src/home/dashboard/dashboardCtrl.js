angular.module('myApp').controller('dashboardCtrl',['$scope',
  function($scope){

      $('#slip-container').sliphover();

    $scope.title='Hello Dashboard...'
    $scope.onClick = function(){
      alert("sdf");      
    }
  }
])