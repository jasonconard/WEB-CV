'use strict';

/**
 * @ngdoc function
 * @name webcvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webcvApp
 */

var MainCtrl = function($rootScope, $scope, $timeout, i18nService) {
  $scope.switchCanvas = true;

  $scope.currentLanguage = i18nService.i18n.language;
  $scope.selectLanguage = function(lang){
    i18nService.selectLanguage(lang);
    $scope.currentLanguage = lang;
  };

  $scope.menu = [
    {
      icon : 'user',
      text : 'label.menu-profile',
      link : '/profile'
    },{
      icon : 'coffee',
      text : 'label.menu-professional',
      link : '/work'
    },{
      icon : 'graduation-cap',
      text : 'label.menu-diplomas',
      link : '/diplomas'
    },{
      icon : 'gears',
      text : 'label.menu-projects',
      link : '/projects'
    },{
      icon : 'wrench',
      text : 'label.menu-skills',
      link : '/skills'
    },{
      icon : 'gamepad',
      text : 'label.menu-hobbies',
      link : '/hobbies'
    },{
      icon : 'camera-retro',
      text : 'label.menu-album',
      link : '/album'
    }
  ];

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

angular.module('webcvApp').controller('MainCtrl', ['$rootScope', '$scope', '$timeout', 'i18nService', MainCtrl]);
