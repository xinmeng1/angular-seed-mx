'use strict';

angular.module('myApp.signIn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signIn', {
    templateUrl: 'signIn/signIn.html',
    controller: 'signInCtrl'
  });
}])

.controller('signInCtrl', [function() {

}]);