angular.module('shortly.links', [])

.controller('LinksController', function($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(data) {
      console.log(data)
      $scope.data.links = data.data;
    })
    .catch(function (error) {
        console.error(error);
    });
  };
  $scope.getLinks();
});
