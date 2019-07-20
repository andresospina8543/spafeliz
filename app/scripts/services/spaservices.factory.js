'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaServices.factory
 * @description
 * # spaServices.factory
 * Factory in the spafelizApp.
 */
angular.module('spafelizApp').factory('spaServices', spaServices);

spaServices.$inject = [];

function spaServices() {
    // Service logic
    // ...
    var meaningOfLife = 42;

    var dataServices = [
      { id:1, name: 'Masaje sencillo', cost: '60,000', description: '30 minutos de un mensaje genial', 
      endHappy: false, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg' },
      { id:2, name: 'Masaje completo', cost: '60,500', description: '60 minutos de un mensaje genial', 
      endHappy: true, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg' },
      { id:2, name: 'Exfoliacion', cost: '60,500', description: '60 minutos de un mensaje genial', 
      endHappy: true, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg' }
    ];


    var services = {
      getAllServices:getAllServices,
      getServicesById: getServiceById
    };

    return services;

    function getAllServices(){
      return dataServices;
    };

    function getServiceById(id){
      for(var i=0; i<dataServices.length; i++){
        if(id== dataServices[i].id){
          return dataServices[i];
        }
      }
      return null;
    };

/*
    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
    */
  };
