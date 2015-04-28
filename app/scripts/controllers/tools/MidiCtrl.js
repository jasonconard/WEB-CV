'use strict';

/**
 * @ngdoc function
 * @name webcvApp.controller:MidiCtrl
 * @description
 * # MidiCtrl
 * Controller of the webcvApp
 */

var MidiCtrl = function($rootScope, $scope) {
	$scope.midiCode = "";

	var mthd = "4D546864";
	var lngMthd = "00000006";
	var format = "0000";
	var nbPistes = "0001";
	var resolutionTempo = "0002";

	var mtrk = "4D54726B";
	var endMtrk = "00FF2F00";

	var tracks = [];



	$scope.myDec = 25;
	$scope.myBin = (+$scope.myDec).toString(2);
	$scope.myHex = (+$scope.myDec).toString(16);

	$scope.$watch('myDec', function(){
		$scope.myBin = (+$scope.myDec).toString(2);
		$scope.myHex = (+$scope.myDec).toString(16);
	})


	var binToDec = function(s) {
		var items = s.split('').reverse();
	    var dec = items.reduce(function(previous, current, index){
	    	if(index === 0){
	    		return +current;
	    	}
	    	return previous + Math.pow(2*+current,index);
	    },0);
	    return dec;
	}

	var hexToDec = function(s) {
		var items = s.split('').reverse();
	    var dec = items.reduce(function(previous, current, index){
	    	var lookupTable = {'a':10, 'b':11,'c':12,'d':13,'e':14,'f':15};
	    	if(isNaN(current)){
	    		current = lookupTable[current.toLowerCase()];
	    	}

	    	if(index === 0){
	    		return +current;
	    	}
	    	return previous + current*Math.pow(16,index);
	    },0);
	    return dec;
	}

	var hexToBin = function(s) {
		return hexToDec(s).toString(2);
	}


	var binToHex = function(s) {
	  return binaryToDec(s).toString(16);
	}
};

angular.module('webcvApp').controller('MidiCtrl', ['$rootScope', '$scope', MidiCtrl]);
