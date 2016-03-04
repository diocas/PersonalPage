'use strict';

/**
 * @ngdoc function
 * @name personalPageApp.controller:CompanyCtrl
 * @description
 * # CompanyCtrl
 * Controller of the personalPageApp
 */
angular.module('personalPageApp')
  .controller('UniversityCtrl', ['$scope', '$routeParams', '$aside', '$location',
    function ($scope, $routeParams, $aside, $location) {


      $aside.open({
        templateUrl: 'views/university.html',
        placement: 'right',
        size: 'lg',
        backdrop: 'static',
        keyboard: false,
        controller: ['$scope', '$uibModalInstance', '$location', '$http', '$window',
          function ($scope, $uibModalInstance, $location, $http, $window) {

            $.fn.fullpage.setAllowScrolling(false);
            $scope.universityId = $routeParams.universityId;

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

              var university;

              for (var id in data.education) {

                if (data.education[id].prettyName == $routeParams.universityId) {
                  university = data.education[id];
                  break;
                }
              }

              for (var id in university.projects) {

                for (var idProj in data.projects) {

                  if (data.projects[idProj].prettyName == university.projects[id]) {
                    university.projects[id] = data.projects[idProj];
                    break;
                  }
                }
              }

              $scope.university = university;

            });

          }]
      }).result.then(postClose, postClose);

      function postClose() {
      }


    }]);
