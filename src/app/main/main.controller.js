(function() {
  'use strict';

  angular
    .module('magnezioSpa')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $q) {
    var vm = this;

    var apiHost = 'http://coincap.io';

    vm.awesomeThings = [];
    vm.coinName = "";
    vm.coinInfo = {};
    vm.getCoinInfo = getCoinInfo;

    function getCoins() {
      var name = null;
      var deferred = $q.defer();
      if (name !== null) deferred.resolve(name);

      $http.get(apiHost + '/coins/')
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(deferred.reject);

      return deferred.promise;
    }

    getCoins().then(function(res) {
      vm.coinsList = res;
    });    

    function getCoinInfo(coinName) {
      var name = null;
      var deferred = $q.defer();
      if (name !== null) deferred.resolve(name);

      $http.get(apiHost + '/page/' + coinName)
      .success(function(data) {
        deferred.resolve(data);
      })
      .error(deferred.reject);

      return deferred.promise.then(function(res) {
        vm.coinName = coinName;
        vm.coinInfo = res;
      });
    }


  }
})();