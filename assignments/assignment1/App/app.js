(
    function () {

        'use strict'

        console.log("app.js is working, have a nice day!")
        angular.module(
            'LunchCheck',
            []
        )
        .controller(
            'LunchCheckController',
            function ($scope) {
                // Just For Binding Testing Code...
                $scope.TestMsg = "AngularJS is working, change this text to check it, have a nice day!"

                // Binding the input box "lunch-menu" to the $scope
                $scope.lunchMenu = ""
            }
        )
    }
)();