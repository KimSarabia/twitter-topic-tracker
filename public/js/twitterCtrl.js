'use strict';

var app = angular.module('twitterApp');

app.controller('twitterCtrl', function($scope, $http){
  $http.get('/users/username')
  .then(function(res){
    $scope.users = res.data
  })
  $scope.send = function(){
  };
})
