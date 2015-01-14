'use strict';

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