(function () {

  'use strict';

  /**
   * @ngdoc overview
   * @name personalPageApp
   * @description
   * # personalPageApp
   *
   * Main module of the application.
   */
  angular
    .module('personalPageApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui.bootstrap',
      'ngAside'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/company/:companyId', {
          template: '',
          controller: 'CompanyCtrl',
          controllerAs: 'company'
        })
        .when('/project/:projectId', {
          template: '',
          controller: 'ProjectCtrl',
          controllerAs: 'project'
        })
        .when('/job/:jobId', {
          templateUrl: 'views/job.html',
          controller: 'JobCtrl',
          controllerAs: 'job'
        })
        .when('/university/:universityId', {
          templateUrl: 'views/university.html',
          controller: 'UniversityCtrl',
          controllerAs: 'university'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();

