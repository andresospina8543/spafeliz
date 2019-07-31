'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp')
  .controller('BookCtrl', bookCtrl);

  detailCtrl.$inject = ['spaServicesHttp', 'reservaServiceHttp'];

  function bookCtrl(spaServicesHttp, reservaServiceHttp){
    var vm = this;
    vm. form = {};
    vm.$onInit = onInit;
    vm.submitBook = submitBook;
    vm.loadSpaServicesHttp = loadSpaServicesHttp;
    vm.resetForm = resetForm;
    
    //1. crear tabla en bd (remotemysql.com) (api)
    //2. crear el servicio web (ruta, controlador, y el esquema de la tabla) (api)
    //3. creal service en angular para la reserva (otro archivo diferente al actual) (front)
    //4. Recibir la respuesta y mostrar la confirmacion al usuario
    //5. Conectar la vista reserva desde la navegacion
    //6. Subir a git ambos repositorios (fecha limite: miercoles 31 2019)

    function submitBook(){

      if(!validateForm()){
        return;
      }
      
      vm.form.fecha = getFormatDate(vm.form.date);
      vm.form.hora = getFormatHour(vm.form.time);
      reservaServiceHttp.registrar(vm.form)
      .then(function(data){
        console.log(data);
        document.getElementById("modalButton").click();
      })
      .catch(function(err){
        console.log(err);
      });
    }

    function validateForm(){
      console.log(vm.form.date);
      if(vm.form.date == null){
        alert("Debe ingresar la fecha de la reserva");
        return false;
      }

      if(vm.form.time == null){
        alert("Debe ingresar la hora de la reserva");
        return false;
      }
      return true;
    }

    function getFormatDate(date){
      return appendLeadingZeroes(date.getDate()) + "/" + appendLeadingZeroes(date.getMonth() +1) + "/" + date.getFullYear();
    }


    function appendLeadingZeroes(n){
      if(n <= 9){
        return "0" + n;
      }
      return n
    }
    

    function getFormatHour(date){
      return appendLeadingZeroes(date.getHours()) + ":" + appendLeadingZeroes(date.getMinutes());
    }

    function resetForm(){
      console.log("reset form");
      document.getElementById("reservaForm").reset();
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

    function onInit(){
      console.log("booking...");
      vm.loadSpaServicesHttp();
    }
  }