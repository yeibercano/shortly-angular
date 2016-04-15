angular.module('shortly.links', [])

.controller('LinksController', function($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    // $scope.data.links = Links.getLinks();
    // return $scope.data.links;
    Links.getLinks()
    .then(function(data) {
      return response.data
    })
  };
  $scope.getLinks();
});

//invoke links.getLinks() and passed the links stored
// links.getLinks($scope.data.links);

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };