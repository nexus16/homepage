(function() {
  'use strict';

  angular
    .module('hblab')
    .controller('CustomersController', CustomersController);

  /** @ngInject */
  function CustomersController(data) {
    var vm = this;

    vm.customers = data.getCustomers();
    vm.comments = data.getComments();
  }
})();
