(function() {
  'use strict';

  angular
    .module('hblab')
    .directive('companyInfo', companyInfo);

  /** @ngInject */
  function companyInfo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/companyInfo/companyInfo.html',
      scope: {
          
      },
      controller: CompanyInfoController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CompanyInfoController() {
      // var vm = this;
    }
  }

})();
