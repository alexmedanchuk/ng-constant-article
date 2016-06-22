'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
 	.controller('MainCtrl', ['ENV', function (ENV) {
    	// Do something with ENV here ...
    	console.log(ENV);
  	}]);
