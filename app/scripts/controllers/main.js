'use strict';

/**
 * @ngdoc function
 * @name personalPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalPageApp
 */
angular.module('personalPageApp')
  .controller('MainCtrl', ['$scope', '$anchorScroll', '$location',
    function ($scope, $anchorScroll, $location) {

      $.fn.fullpage.setAllowScrolling(true);

    $scope.gotoAnchor = function(anchorName) {
      $.fn.fullpage.moveTo(anchorName+'A');
        //if ($location.hash() !== anchorName) {
        //  $location.hash(anchorName);
        //} else {
        //  $anchorScroll();
        //}
      };

      $scope.gotoPath = function(type, id) {
        $location.path('/' + type+"/"+id);
      };


  }]);
