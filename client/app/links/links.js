angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function($scope, Links) {
  console.log('in LinksController');
  $scope.data = {};
  $scope.getLinks = function() {
    // return $scope.data.links;
    console.log('yes');
  };
  $scope.getLinks();
});
