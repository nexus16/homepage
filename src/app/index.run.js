(function() {
  'use strict';

  angular
    .module('hblab')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
