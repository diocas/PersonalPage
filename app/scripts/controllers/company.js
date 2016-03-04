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
        keyboard: false,
        controller: ['$scope', '$uibModalInstance', '$location', '$http', '$window',
          function ($scope, $uibModalInstance, $location, $http, $window) {

            $.fn.fullpage.setAllowScrolling(false);
            $scope.companyId = $routeParams.companyId;

            $scope.gotoPath = function (type, id) {
              $location.path('/' + type + "/" + id);
            };

            $scope.ok = function (e) {
              /*$uibModalInstance.close();
               e.stopPropagation();
               $location.path('/');*/
              $window.history.back();
            };

            $scope.$on('$locationChangeStart', function (e) {
              $uibModalInstance.close();
            });

            $http.get('data/data.json').success(function (data) {

              var company;

              for (var id in data.experience) {

                if (data.experience[id].prettyName == $routeParams.companyId) {
                  company = data.experience[id];
                  break;
                }
              }

              for (var id in company.projects) {

                for (var idProj in data.projects) {

                  if (data.projects[idProj].prettyName == company.projects[id]) {
                    company.projects[id] = data.projects[idProj];
                    break;
                  }
                }
              }

              $scope.company = company;
            });

          }]
      }).result.then(postClose, postClose);

      function postClose() {
      }


    }]);
