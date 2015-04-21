'use strict';

/**
 * @ngdoc function
 * @name webcvApp.controller:AlbumCtrl
 * @description
 * # MainCtrl
 * Controller of the webcvApp
 */

var AlbumCtrl = function($rootScope, $scope) {
  $scope.overItem = 4;

  $scope.setOverItem = function(itemId) {
    $scope.overItem = itemId;
  }
};

angular.module('webcvApp').controller('AlbumCtrl', ['$rootScope', '$scope', AlbumCtrl]);
