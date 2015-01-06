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
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
