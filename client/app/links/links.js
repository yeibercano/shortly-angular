angular.module('shortly.links', [])

.controller('LinksController', function($scope, Links) {
  console.log('in LinksController');
  $scope.data = {};
  $scope.getLinks = function() {
    $scope.data.links = Links;
    return $scope.data.links;
  };
  $scope.getLinks();
});
