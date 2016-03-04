'use strict';

/**
 * @ngdoc function
 * @name personalPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalPageApp
 */
angular.module('personalPageApp')
  .controller('MainCtrl', ['$scope', '$anchorScroll', '$location', '$http',
    function ($scope, $anchorScroll, $location, $http) {

      $.fn.fullpage.setAllowScrolling(true);

      $scope.gotoAnchor = function (anchorName) {
        $.fn.fullpage.moveTo(anchorName);
        //if ($location.hash() !== anchorName) {
        //  $location.hash(anchorName);
        //} else {
        //  $anchorScroll();
        //}
      };

      $scope.gotoPath = function (type, id) {
        $location.path('/' + type + "/" + id);
      };

      $http.get('data/data.json').success(function (data) {
        $scope.data = data;
        $.fn.fullpage.reBuild();
      });

    }]);
