var app = angular.module('pirates')

app.controller('CreatePirateController', ['$scope', '$http', function($scope, $http) {
    // $scope.view = {}
    // $scope.view.showPirateForm = false\
    $scope.newPirate = {}
    $scope.view.pirates = []

    $scope.submitPirate = function() {
        $scope.view.pirates.push($scope.newPirate)
        console.log('$scope.pirates', $scope.pirates);
        $scope.newPirate = ''
        $scope.pirateForm.$setPristine()
    }

    // $http.post('/api/v1')
    //     .then(function() {
    //         console.log('new pirate is', $scope.newPirate);
    //     })

}])
