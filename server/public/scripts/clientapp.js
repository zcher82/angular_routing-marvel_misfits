var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/arm', {
      templateUrl: '/views/arm.html',
      controller: "ArmController"
    })
    .when('/redbee', {
      templateUrl: '/views/redbee.html',
      controller: "RedBeeController"
    })
    .when('/vibe', {
      templateUrl: '/views/vibe.html',
      controller: "VibeController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
