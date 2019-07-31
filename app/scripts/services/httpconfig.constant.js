'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.httpConfig.constant
 * @description
 * # httpConfig.constant
 * Constant in the spafelizApp.
 */
angular.module('spafelizApp')
  .constant('httpConfig', {
    url: 'http://localhost:3001/',
    services:{
      all: 'services/'      
    },
    book:{
      registrar: 'book/registrar'
    }
  });
