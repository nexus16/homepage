(function() {
  'use strict';

  angular
    .module('hblab')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(data) {
    var vm = this;
    vm.customers = data.getCustomers();
    vm.comments = data.getComments();
    vm.products = data.getProducts();
    vm.services = data.getServices();
  }
})();
