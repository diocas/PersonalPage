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
        keyboard: false,
        controller: ['$scope', '$uibModalInstance', '$location', '$http', '$window',
          function ($scope, $uibModalInstance, $location, $http, $window) {

          $.fn.fullpage.setAllowScrolling(false);
          $scope.projectId = $routeParams.projectId;

          $scope.gotoPath = function(type, id) {
            $location.path('/' + type+"/"+id);
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

            for (var id in data.projects) {

              if (data.projects[id].prettyName == $routeParams.projectId) {
                $scope.project = data.projects[id];
                break;
              }
            }
          });

        }]
      }).result.then(postClose, postClose);

      function postClose() {
      }


    }]);
