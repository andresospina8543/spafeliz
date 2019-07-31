'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.reservas.service
 * @description
 * # reservas.service
 * Service in the spafelizApp.
 */
angular.module('spafelizApp')
  .service('reservaServiceHttp', reservaServiceHttp);

  reservaServiceHttp.$inject =  ['$http','$q', 'httpConfig'];

  function reservaServiceHttp($http,$q, httpConfig){

    let services = {
      registrar: registrar
    }

    return services;

    function registrar(data){
      const url = httpConfig.url + httpConfig.book.registrar;
      return $http.post(url, data);
    }

  }
