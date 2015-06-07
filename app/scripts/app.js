"use strict";

var i18n = angular.module('i18n');

i18n.config(['i18nServiceProvider', function(i18nServiceProvider) {
  //Set Locales for service
  i18nServiceProvider.setLocales({
    'default': '/i18n/resources-locale_en.json',
    'en': '/i18n/resources-locale_en.json',
    'zh': '/i18n/resources-locale_zh.json',
    'fr': '/i18n/resources-locale_fr.json'
  }, true);
}]);

/**
 * @ngdoc overview
 * @name webcvApp
 * @description
 * # webcvApp
 *
 * Main module of the application.
 */

var app = angular.module('webcvApp', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch','i18n']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/album', {
      templateUrl: 'views/album.html',
      controller: 'AlbumCtrl'
    })
    .when('/diplomas', {
      templateUrl: 'views/diplomas.html',
      controller: 'DiplomasCtrl'
    })
    .when('/hobbies', {
      templateUrl: 'views/hobbies.html',
      controller: 'HobbiesCtrl'
    })
    .when('/profile', {
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/projects', {
      templateUrl: 'views/projects.html',
      controller: 'ProjectsCtrl'
    })
    .when('/skills', {
      templateUrl: 'views/skills.html',
      controller: 'SkillsCtrl'
    })
    .when('/work', {
      templateUrl: 'views/work-exp.html',
      controller: 'WorkCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.run(['$rootScope', '$http', '$window', 'i18nService', function($rootScope, $http, $window, i18nService) {
  i18nService.selectLanguage('en');

}]);

/*
 Copyright © 2015 by eBusiness Information
 All rights reserved. This source code or any portion thereof
 may not be reproduced or used in any manner whatsoever
 without the express written permission of eBusiness Information.
 */
/**
 * Created by Jason Conard on 27/04/15.
 * What is it?
 * A directive which permits to have a smooth animation with css height.
 * It computes the height thanks to his content.
 *
 * How to use?
 * you need a first div with :
 * <div class="check-height" check-height>...</div>
 *
 * A CSS class which contains :
 * .check-height { transition: height 200ms ease-out; overflow: hidden; }
 *
 * And then the content of the div can be variable, imagine an open/close.
 * <div class"check-height" check-height>
 *   <div ng-if="contentOpen"> Some content ... </div>
 * </div>
 */
app.directive('checkHeight', function($timeout) {
  return {
    restrict: 'A',
    transclude: true,
    template: "<div ng-transclude></div>",
    link: function(scope, element) {

      var computeHeight = function() {
        var children = angular.element(element.children()).toArray();

        return children.reduce( function(prev, now) {
          return prev + now.scrollHeight;
        }, 0);
      };

      var changeHeight = function() {
        $timeout (function(){
          var height = computeHeight();
          element.css('height', height+'px');
        }, 5);
      };

      var refresh = function(){
        $timeout(function() {
          refresh();
        },25);
      };
      refresh();



      scope.$watch(computeHeight, changeHeight);
    }
  }
});