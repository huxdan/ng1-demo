angular.module('myApp').controller('post-detailCtrl',['$scope','$stateParams','$http',
  function($scope,$stateParams,$http){
    var param = $stateParams.id;
    $scope.height = ($(window).height()-150) + 'px';

    $http.get('../../static/json/posts.json')
    .then(function(resp){

      angular.forEach(resp.data,function(data, index, array){
        if(data.id == param){
          $scope.items  = data.details;
          console.log($scope.items);
        }
      });

    })
    .catch(function(resp){

    });
  }
])