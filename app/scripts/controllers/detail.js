'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('DetailCtrl', detailCtrl);

  detailCtrl.$inject = ['$state', 'spaServicesHttp'];

  function detailCtrl( $state, spaServicesHttp){
    var vm = this;

    vm.$onInit = onInit;
    vm.loadServiceDetail = loadServiceDetail;

    function onInit(){
        vm.loadServiceDetail();

    }

    function loadServiceDetail(){
        spaServicesHttp.getByPk($state.params.id)
        .then(function(result){
          vm.detailService = result.data;
          console.log(vm.detailService);
        })
        .catch(function(err){
          console.log(err);
        });
    }

    console.log('state value', $state.params.id);

}
