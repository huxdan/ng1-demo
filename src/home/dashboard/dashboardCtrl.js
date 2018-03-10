angular.module('myApp').controller('dashboardCtrl',['$scope','$location','$http',
  function($scope, $location,$http){

    $scope.title='Hello Dashboard...'
    $scope.onClick = function(){
      alert("sdf");      
    }

    $scope.imgClick = function(){
      $location.url('about');
    }
    $http.get('../../static/json/posts.json')
      .then(function(resp){
        $scope.items  = resp.data;
      })
      .catch(function(resp){

      });
    
    $http.get('../../static/json/tools.json')
      .then(function(resp){
        $scope.tools = resp.data;
      })
      .catch(function(resp){

      });
    
  }
])