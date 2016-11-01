var app = angular.module('pirates')

app.controller('PiratesController', ['$scope', '$http', 'PiratesService', function($scope, $http, PiratesService) {

    // $scope.greeting = 'i work'
    $scope.view = {}
    $scope.view.showPirateForm = false

    $scope.clickMe = function() {
        // console.log('i was clicked');
        $scope.view.showPirateForm = !$scope.view.showPirateForm
            // console.log('$scope.view', $scope.view.showPirateForm);
    }

    PiratesService.all()
        .then((allPirates) => {
            // console.log('allpirates', allPirates);
            $scope.view.pirates = allPirates.data

        })
}])
