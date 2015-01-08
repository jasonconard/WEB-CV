'use strict';

/**
 * @ngdoc overview
 * @name webcvApp
 * @description
 * # webcvApp
 *
 * Main module of the application.
 */

var app = angular.module('webcvApp', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/album', {
      templateUrl: 'views/album.html',
      controller: 'AlbumCtrl'
    })
    .when('/diplomas', {
      templateUrl: 'views/diplomas.html',
      controller: 'DiplomasCtrl'
    })
    .when('/hobbys', {
      templateUrl: 'views/hobbys.html',
      controller: 'HobbysCtrl'
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

app.run(['$rootScope', '$http', '$window', function($rootScope, $http, $window) {

}]);