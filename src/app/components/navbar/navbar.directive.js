(function() {
  'use strict';

  angular
    .module('hblab')
    .directive('hbnavbar', hbnavbar);

  /** @ngInject */
  function hbnavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;
      vm.closeMenu = true;
      vm.menuClass = "";
      vm.menu = function() {
        vm.closeMenu = !vm.closeMenu;
      }
    }
  }

})();
