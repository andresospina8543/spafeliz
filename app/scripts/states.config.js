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

    var serviceDetail = {
        name: 'home.detail',
        url: '/detail/{id}',
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl as vm'
    };

    //crear un state detail con su html y su controlador

    $stateProvider.state(homeState);
    $stateProvider.state(mainState);
    $stateProvider.state(aboutState);
    $stateProvider.state(serviceDetail);
    
}