'use strict';

/**
 * @ngdoc function
 * @name webcvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webcvApp
 */

var MainCtrl = function($rootScope, $scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
};

angular.module('webcvApp').controller('MainCtrl', ['$rootScope', '$scope', MainCtrl]);
