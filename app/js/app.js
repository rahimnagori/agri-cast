var app = angular.module('agriCast', []);
app.controller('appCtrl', function($scope, $http) {
    $scope.login = function(){
        alert('in');
        $http.get("/agri-cast/api/ajax/index")
          .then(function(response) {
              console.log(response);
          });
    }
});