const app = angular.module('pirates', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/pirates.html',
            controller: 'PiratesController'
        })
})



// app.controller('PiratesController', function($scope) {
//     $scope.greeting = 'hello im working'
// })
