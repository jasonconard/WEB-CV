'use strict';

/**
 * @ngdoc function
 * @name webcvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webcvApp
 */

var MainCtrl = function($rootScope, $scope, $timeout) {
  $scope.switchCanvas = true;

  $timeout(function() {

    var canvasObject = $('#header-canvas')[0];
    var canvasCurrentWidth = canvasObject.clientWidth;
    var ctx = canvasObject.getContext("2d");


    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,canvasCurrentWidth);
    ctx.lineTo(1000,canvasCurrentWidth);
    ctx.lineTo(1000,0);
    ctx.closePath();
    ctx.fillStyle = "lightblue";
    ctx.fill();

  },100);

};

angular.module('webcvApp').controller('MainCtrl', ['$rootScope', '$scope', '$timeout', MainCtrl]);
