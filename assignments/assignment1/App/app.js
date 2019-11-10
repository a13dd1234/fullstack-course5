(
    function () {

        'use strict'

        console.log("app.js is working, have a nice day!")
        angular.module(
            'my_Assignment1',
            []
        )
        .controller(
            'My_Assignment1_Controller',
            function ($scope) {
                $scope.TestMsg = "AngularJS is working, change this text to check it, have a nice day!"
            }
        )
    }
)();