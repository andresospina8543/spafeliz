'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaServices.service
 * @description
 * # spaServices.service
 * Service in the spafelizApp.
 */
angular.module('spafelizApp')
  .service('spaServicesHttp',  spaServicesHttp);
    // AngularJS will instantiate a singleton by calling "new" on this function

    spaServicesHttp.$inject = ['$http','$q', 'httpConfig'];

    function spaServicesHttp($http, $q, httpConfig){

      let services = {
        getAll: getAll,
        getByPk: getByPk
      }
      return services;

      function getByPk(id){
        const url = httpConfig.url + httpConfig.services.all + id ; //'http://localhost:3001/services';
        return $http.get(url);
      }

      function getAll(){

        var defered = $q.defer();
        var promise = defered.promise;

        const url = httpConfig.url + httpConfig.services.all; //'http://localhost:3001/services';
        $http.get(url)
        .then(function(data){
          //console.log(data);
          defered.resolve(data);
        })
        .catch(function(error){
          //console.log(error);
          defered.reject(error);
        });
        return promise;
      }
    }
  