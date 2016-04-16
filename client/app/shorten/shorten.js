angular.module('shortly.shorten', ['shortly.links'])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function() {
    Links.addLink($scope.link)
    .then(function(resp){
      $scope.link.url = resp.data.url;
    })
  }
});
