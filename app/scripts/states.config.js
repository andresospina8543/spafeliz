'use strict';

angular.module('spafelizApp').config(settings);

settings.$inject = ['$stateProvider'];

function settings($stateProvider){

    var homeState = {
        abstract: true,
        name:'home',
        templateUrl:'views/home.html'
    };

    var mainState = {
        name:'home.main',
        url: '/',
        templateUrl:'views/main.html',
        controller: 'MainCtrl as vm'
    };

    var aboutState = {
        name: 'home.about',
        url: '/about',
        templateUrl: 'views/about.html'
    };

    //crear un state detail con su html y su controlador

    $stateProvider.state(homeState);
    $stateProvider.state(mainState);
    $stateProvider.state(aboutState);
    
}