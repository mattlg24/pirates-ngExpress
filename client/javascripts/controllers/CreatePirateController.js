var app = angular.module('pirates')

app.controller('CreatePirateController', ['$scope', '$http', 'PiratesService', function($scope, $http, PiratesService) {
    // $scope.view = {}
    // $scope.view.showPirateForm = false\
    $scope.newPirate = {}
    $scope.view.pirates = []

    $scope.submitPirate = function() {

        PiratesService.post($scope.newPirate)
            .then(() => {
                $scope.view.pirates.push($scope.newPirate)
                console.log('$scope.newPirate', $scope.newPirate);
                console.log('$scope.view.pirates', $scope.view.pirates);
                $scope.newPirate = ''
                $scope.pirateForm.$setPristine()
            })
    }
}])
