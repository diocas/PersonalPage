'use strict';

/**
 * @ngdoc function
 * @name personalPageApp.controller:JobCtrl
 * @description
 * # JobCtrl
 * Controller of the personalPageApp
 */
angular.module('personalPageApp')
  .controller('JobCtrl', ['$scope', '$routeParams', '$aside', '$location',
    function ($scope, $routeParams, $aside, $location) {


      $aside.open({
        templateUrl: 'views/job.html',
        placement: 'bottom',
        size: 'sm',
        backdrop: 'static',
        keyboard: false,
        controller: ['$scope', '$uibModalInstance', '$location', '$http', '$window',
          function ($scope, $uibModalInstance, $location, $http, $window) {

            $.fn.fullpage.setAllowScrolling(false);
            $scope.jobId = $routeParams.jobId;

            $scope.ok = function (e) {
              $uibModalInstance.close();
               e.stopPropagation();
               $location.path('/');
            };

            $scope.$on('$locationChangeStart', function (e) {
              $uibModalInstance.close();
            });

            $http.get('data/companies/'+$routeParams.jobId+'.json').success(function (data) {

              $scope.job = data.job;
            });

          }]
      }).result.then(postClose, postClose);

      function postClose() {
      }


    }]);
