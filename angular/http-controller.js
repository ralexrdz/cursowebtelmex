var app = angular.module('appHttp', []);
app.controller('contHttp', function($scope, $http) {
    $scope.personas = []
    $http.get('http://localhost:3000/personas')
    .then(function (res) {
        console.log('ya regresó personas', res)
        $scope.personas = res.data
    })
});