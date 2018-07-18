var app = angular.module('appIngredientes', []);
app.controller('contIngredientes', function($scope, $location) {
    $scope.pastel = {
        harina: 100,
        azucar: 20,
        huevo: 50,
        chocolate: 10,
        leche: 100
    };
    $scope.myUrl = $location.absUrl()
    $scope.persona = {cantidad : 1};
    $scope.calculaHarina = function () {
        return $scope.pastel.harina*$scope.persona.cantidad*$scope.cantidadRandom()
    }
    $scope.cantidadRandom = function(){
        return Math.random()
    }
});