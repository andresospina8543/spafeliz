'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('MainCtrl', mainCtrl);
  
  mainCtrl.$inject = ['spaServices'];


  function mainCtrl(spaServices) {
    
    var vm = this;

    vm.$onInit = onInit;
    vm.suma = suma;
    vm.loadSpaServices = loadSpaServices;

    vm.myNombre = 'David Ospina';
  
    function onInit(){
      vm.loadSpaServices();
    }

    function suma(n1,n2){
      return n1+n2;
    }

    function loadSpaServices(){
      vm.serviceList = spaServices.getAllServices();
      console.log(vm.serviceList);
    }
  };
