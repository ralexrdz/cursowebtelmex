console.log('get-personas')
app.controller('getPersonas', function($scope, $http, $interval, Data) {
    $scope.personas = []
    $http.get('http://localhost:3000/personas')
    .then(function (res) {
        console.log('ya regresó personas', res)
        $scope.personas = res.data
    })
    $scope.$watch('personas', function(newValue, oldValue){
        console.log(newValue, oldValue)
        Data.personas = newValue
    })
    $interval(function (){
        if (Data.personas.length !== $scope.personas.length) {
            $scope.personas = Data.personas
        }
    },1000)
});