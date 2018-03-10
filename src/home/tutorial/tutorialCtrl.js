angular.module('myApp').controller('tutorialCtrl',['$scope','$http',
  function($scope,$http){
    $http.get('../../static/json/tutorial.json')
      .then(function(resp){
        $scope.videos = resp.data;
      })
      .catch(function(resp){

      })
  }
])