angular.module('myApp').controller('tutorial-detailCtrl',['$scope','$stateParams',
    function($scope,$stateParams){
        $scope.param = $stateParams.id;
    }
])