(function() {
  'use strict';

  angular
    .module('hblab')
    .directive('hbFooter', hbFooter);

  /** @ngInject */
  function hbFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
          
      },
      controller: HbFooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function HbFooterController() {
      var vm = this;
      vm.toTop = function() {
        angular.element("html, body").animate({ scrollTop: 0 }, "slow");
      };
    }
  }

})();
