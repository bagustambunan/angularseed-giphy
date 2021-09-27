'use strict';

angular.module('myApp.giphy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/giphy', {
    templateUrl: 'components/giphy/giphy.html',
    controller: 'GiphyCtrl'
  });
}])

.controller('GiphyCtrl', [function() {

}]);