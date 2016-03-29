'use strict';

var app = angular.module('twitterApp');

app.controller('registerCtrl', function($scope, UserService) {
  $scope.register = function(user) {
    UserService.register(user)
      .then(function(res) {
        console.log('res:', res);
      }, function(err) {
        console.error(err);
      });
  };
});
