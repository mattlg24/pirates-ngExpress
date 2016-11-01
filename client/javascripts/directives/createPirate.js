var app = angular.module('pirates') //referring to orginal instance of pirates module

app.directive('createPirate', function() {
    return {
        restrict: "E",
        templateUrl: '../../views/createPirate.html',
        controller: 'CreatePirateController'
    }
})
