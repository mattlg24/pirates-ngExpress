var app = angular.module('pirates', ['ngRoute']) //stuff that happens at the app level

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/pirates.html',
            controller: 'PiratesController'

        })
})
