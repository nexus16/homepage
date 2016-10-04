(function() {
  'use strict';

  angular
    .module('hblab')
    .directive('gmap', gmap);

  /** @ngInject */
  function gmap() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/gmap/gmap.html',
      scope: {
          
      },
      controller: GmapController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function GmapController(NgMap, $log) {
      // var vm = this;
      NgMap.getMap().then(function(map) {
        $log.log(map.getCenter());
        $log.log('markers', map.markers);
        $log.log('shapes', map.shapes);
      });
    }
  }

})();
