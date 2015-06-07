'use strict';

/**
 * @ngdoc function
 * @name webcvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webcvApp
 */

var MainCtrl = function($rootScope, $scope, $timeout, i18nService, $location) {
  //$scope.switchCanvas = true;
  //
  //$scope.currentLanguage = i18nService.i18n.language;
  //$scope.selectLanguage = function(lang){
  //  i18nService.selectLanguage(lang);
  //  $scope.currentLanguage = lang;
  //};
  //
  $scope.menus = [
    {
      icon : 'user',
      text : 'label.menu-profile',
      link : 'profile'
    },{
      icon : 'coffee',
      text : 'label.menu-professional',
      link : 'work'
    },{
      icon : 'graduation-cap',
      text : 'label.menu-diplomas',
      link : 'diplomas'
    },{
      icon : 'gears',
      text : 'label.menu-projects',
      link : 'projects'
    },{
      icon : 'wrench',
      text : 'label.menu-skills',
      link : 'skills'
    },{
      icon : 'gamepad',
      text : 'label.menu-hobbies',
      link : 'hobbies'
    },{
      icon : 'camera-retro',
      text : 'label.menu-album',
      link : 'album'
    }
  ];


  $scope.goToLocalLocation = function(location) {
    $location.path(location);
  }
};

angular.module('webcvApp').controller('MainCtrl', ['$rootScope', '$scope', '$timeout', 'i18nService', '$location', MainCtrl]);
