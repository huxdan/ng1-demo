angular.module('myApp').controller('dashboardCtrl',['$scope',
  function($scope){
    $scope.title='Hello Dashboard...'
    $scope.onClick = function(){
      alert("sdf");      
    }
  }
])