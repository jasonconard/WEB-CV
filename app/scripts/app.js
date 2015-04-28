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

app.directive('checkHeight', function($timeout) {
  return {
    restrict: 'A',
    transclude: true,
    template: "<div ng-transclude></div>",
    link: function(scope, element) {

      var computeHeight = function() {
        var children = angular.element(element.children()).toArray();

        var top = +element.css('padding-top').replace(/[^0-9]+/ig,"");
        var bot = +element.css('padding-bottom').replace(/[^0-9]+/ig,"");

        return top + bot + children.reduce( function(prev, now) {
          return prev + now.scrollHeight;
        }, 0);
      };

      var changeHeight = function() {
        $timeout (function(){
          var height = computeHeight();
          element.css('height', height+'px');
        }, 5);
      };

      scope.$watch(computeHeight, changeHeight);
    }
  }
});