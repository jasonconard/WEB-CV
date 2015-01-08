'use strict';

/**
 * @ngdoc function
 * @name webcvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webcvApp
 */

var MainCtrl = function($rootScope, $scope) {
console.log('Hello World');
};

angular.module('webcvApp').controller('MainCtrl', ['$rootScope', '$scope', MainCtrl]);
