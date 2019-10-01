var app = angular.module('agriCast', ['ngMaterial']);
app.controller('appCtrl', function($scope, $http) {
    $scope.login = function(){
        alert('in the login');
        $http.get("http://localhost:8000/lucky/number")
          .then(function(response) {
              console.log(response);
          });
    }
});