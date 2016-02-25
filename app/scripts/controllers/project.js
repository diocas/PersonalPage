'use strict';

/**
 * @ngdoc function
 * @name personalPageApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the personalPageApp
 */
angular.module('personalPageApp')
  .controller('ProjectCtrl', ['$scope', '$routeParams', '$aside', '$location',
    function ($scope, $routeParams, $aside, $location) {


      $aside.open({
        templateUrl: 'views/project.html',
        placement: 'right',
        size: 'lg',
        backdrop: 'static',
        controller: function ($scope, $uibModalInstance) {

          $.fn.fullpage.setAllowScrolling(false);
          $scope.ok = function (e) {
            $uibModalInstance.close();
            e.stopPropagation();
            $location.path('/');
          };

          $scope.projectId = $routeParams.projectId;

          $scope.$on('$locationChangeStart', function (e) {
            $uibModalInstance.close();
          });
        }
      }).result.then(postClose, postClose);

      function postClose() {
      }


    }]);
