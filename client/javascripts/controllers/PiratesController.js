var app = angular.module('pirates')

app.controller('PiratesController', ['$scope', '$http', function($scope, $http) {

    $scope.greeting = 'i work'
    $scope.view = {}
    $scope.view.showPirateForm = false

    $scope.clickMe = function() {
        console.log('i was clicked');
        $scope.view.showPirateForm = !$scope.view.showPirateForm
        console.log('$scope.view', $scope.view.showPirateForm);
    }

    $http.get('api/v1')
        .then(function(allPirates) {
            console.log('allpirates', allPirates);
            $scope.view.pirates = allPirates.data
        })

}])
