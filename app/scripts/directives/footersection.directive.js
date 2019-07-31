'use strict';

/**
 * @ngdoc directive
 * @name spafelizApp.directive:footerSection.directive
 * @description
 * # footerSection.directive
 */
angular.module('spafelizApp')
  .directive('footerSection', footerSection);

  function footerSection() {
    var directive = {
      templateUrl:'./views/partial.footer.html',
      //template: '<div></div>',
      restrict: 'EAC',
      link: link
      }

      return directive;

      function link(scope, element, attrs){
       // element.text('this the footer section');
       scope.team = attrs.autor;
      }
    }
  
