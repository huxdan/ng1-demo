angular.module('myApp').controller('post-detailCtrl',['$scope','$stateParams',
    function($scope,$stateParams){
        $scope.param = $stateParams.id;
        $scope.height = ($(window).height()-100) + 'px';
    }
])