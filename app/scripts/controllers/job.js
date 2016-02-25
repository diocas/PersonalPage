'use strict';

/**
 * @ngdoc function
 * @name personalPageApp.controller:JobCtrl
 * @description
 * # JobCtrl
 * Controller of the personalPageApp
 */
angular.module('personalPageApp')
  .controller('JobCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.jobId = $routeParams.jobId;
  }]);
