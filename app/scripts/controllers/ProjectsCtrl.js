'use strict';

/**
 * @ngdoc function
 * @name webcvApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the webcvApp
 */

var ProjectsCtrl = function($rootScope, $scope) {

    $scope.projects = [
        { title : 'OpenStreetMap.fr', year : 2015, company : 'EBusiness Information', details: 'Refonte du site d\'OpenStreetMap.fr.', pic: 'images/project/osmfr.png'},
        { title : 'Gatling', year : 2015, company : 'EBusiness Information', details: 'Refonte du design du site Gatling.io.', pic: 'images/project/gatling.png', css:'width-pic'},
        { title : 'TileMaker', year : 2015, company : 'EBusiness Information', details: 'Site permettant de générer un fichier MBTiles.', pic: 'images/project/tile-maker.png'},
        { title : 'EvenŦribe', year : 2014, company : 'EBusiness Information', details: 'Site présentant des applications pour les festivals.', pic: 'images/project/eventribe.png'},
        { title : 'DesignMyApp', year : 2014, company : 'EBusiness Information', details: 'Site permettant de générer et télécharger une app custom en quelques clics.', pic: 'images/project/dma.png'},
        { title : '3D Stéréoscopique', year : 2013, company : 'Université du Havre', details: 'Projet de réalité augmentée sous OpenGL.', pic: 'images/project/3dstereo.png'}
    ];

};

angular.module('webcvApp').controller('ProjectsCtrl', ['$rootScope', '$scope', ProjectsCtrl]);
