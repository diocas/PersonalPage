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
        .otherwise({
          redirectTo: '/'
        });
    });
})();


  $('#fullpage').fullpage({
    //sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
    //Navigation
    menu: '#topMenu',
    lockAnchors: true,
    //anchors:['home', 'about', 'skills', 'projects', 'contacts'],
    //navigation: false,
    //navigationPosition: 'right',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    //loopBottom: false,
    //loopTop: false,
    //loopHorizontal: false,
    //continuousVertical: false,
    //normalScrollElements: '.ng-aside',
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    //animateAnchor: true,
    //recordHistory: true,

    ////Design
    controlArrows: true,
    verticalCentered: false,
    resize : false,
    //sectionsColor : ['#ccc', '#fff'],
    //paddingTop: '3em',
    //paddingBottom: '10px',
    //fixedElements: 'header, footer',
    //responsiveWidth: 0,
    //responsiveHeight: 0,
    //
    ////Custom selectors
    //sectionSelector: '.section',
    //slideSelector: '.slide',

    //events
    onLeave: function(index, nextIndex, direction){
    console.log('onLeave');
      //if(blockScroll !== null && blockScroll) {
      //  return false;
      //}
    },
    afterLoad: function(anchorLink, index){
      console.log('afterLoad');

    },
    afterRender: function(){
      console.log('afterRender');

    },
    afterResize: function(){
      console.log('afterResize');

    },
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
      console.log('afterSlideLoad');

    },
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
      console.log('onSlideLeave');

    }
  });
