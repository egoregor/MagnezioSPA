(function() {
  'use strict';

  angular
    .module('magnezioSpa')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
