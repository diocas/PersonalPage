
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
  scrollOverflow: true,
  touchSensitivity: 30,
  normalScrollElementTouchThreshold: 10,

  //Accessibility
  keyboardScrolling: true,
  //animateAnchor: true,
  //recordHistory: true,

  ////Design
  controlArrows: true,
  verticalCentered: false,
  resize : true,
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

    if(nextIndex === 1) {
      $('.navbar-brand').removeClass('brand-activate');
    } else {
      $('.navbar-brand').addClass('brand-activate');
    }
  },
  afterLoad: function(anchorLink, index){

  },
  afterRender: function(){

  },
  afterResize: function(){

  },
  afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){

  },
  onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){

  }
});

$(".section").bind("DOMSubtreeModified",function(){
  //$.fn.fullpage.reBuild();
});
