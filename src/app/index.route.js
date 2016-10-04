(function() {
  'use strict';

  angular
    .module('hblab')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/services', {
        templateUrl: 'app/services/services.html',
        controller: 'ServicesController',
        controllerAs: 'service'
      })
      .when('/recruit', {
        templateUrl: 'app/recruit/recruit.html',
        controller: 'RecruitController',
        controllerAs: 'recruit'
      })
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .when('/customers', {
        templateUrl: 'app/customers/customers.html',
        controller: 'CustomersController',
        controllerAs: 'customer'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider
        .html5Mode(true);
  }

})();
