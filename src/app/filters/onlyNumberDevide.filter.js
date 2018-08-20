(function() {
  'use strict';

  angular
    .module('magnezioSpa')
    .filter('onlyNumberDevide', onlyNumberDevide);

  /** @ngInject */
  function onlyNumberDevide($filter) {
    return function(input, precision){
      if(!input) return input;
      if(angular.isNumber(input)){
        var numTemp = $filter('number')(input, precision)
        return numTemp.toString().replace(/,/gi, " ");
      }
      else{
        return input
      }
    }
  }
})();
