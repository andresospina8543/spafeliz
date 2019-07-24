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
  
  mainCtrl.$inject = ['spaServices' ,'spaServicesHttp'];


  function mainCtrl(spaServices, spaServicesHttp) {
    
    var vm = this;

    vm.$onInit = onInit;
    vm.suma = suma;
    vm.loadSpaServices = loadSpaServices;
    vm.loadSpaServicesHttp = loadSpaServicesHttp;

    vm.myNombre = 'David Ospina';
  
    function onInit(){
      //vm.loadSpaServices();
      vm.loadSpaServicesHttp();
    }

    function suma(n1,n2){
      return n1+n2;
    }

    function loadSpaServices(){
      vm.serviceList = spaServices.getAllServices();
      console.log(vm.serviceList);
    }

    function loadSpaServicesHttp(){
      console.log('loadSpaServicesHttp started');
      spaServicesHttp.getAll()
      .then(function(result){
        vm.serviceList = result.data;
        console.log(vm.serviceList);
      })
      .catch(function(err){
        console.log(err);
      });
      console.log('loadSpaServicesHttp fin xxx');
    }
  };
