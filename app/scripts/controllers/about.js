'use strict';

/**
 * @ngdoc function
 * @name webcvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webcvApp
 */

var AboutCtrl = function($rootScope, $scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
};

angular.module('webcvApp').controller('AboutCtrl', ['$rootScope', '$scope', AboutCtrl]);
