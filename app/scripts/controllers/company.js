'use strict';

/**
 * @ngdoc function
 * @name personalPageApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the personalPageApp
 */
angular.module('personalPageApp')
  .controller('CompanyCtrl', ['$scope', '$routeParams', '$aside', '$location',
    function ($scope, $routeParams, $aside, $location) {


      $aside.open({
        templateUrl: 'views/company.html',
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

          $scope.companyId = $routeParams.companyId;

          $scope.$on('$locationChangeStart', function (e) {
            $uibModalInstance.close();
          });
        }
      }).result.then(postClose, postClose);

      function postClose() {
      }


    }]);
