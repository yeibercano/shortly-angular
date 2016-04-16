angular.module('shortly.links', [])

.controller('LinksController', function($scope, Links) {
  $scope.data = {};
  $scope.increment = function(item) {
    item.visits = items.visits + 1;
  };
  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(data) {
      console.log(data.data[0].visits)
      $scope.data.links = data.data;
    })
    .catch(function (error) {
        console.error(error);
    });
  };
  $scope.getLinks();
});
