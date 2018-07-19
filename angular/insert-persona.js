console.log('insert-persona')
app.controller('insertPersona', function($scope, $http, $interval, Data) {
    $scope.numPersonas = 0
    $scope
    $scope.insertaPersona = function () {
        let data = {}
        data.name = $scope.name
        data.lastname = $scope.lastname
        data.edad = $scope.edad
        console.log(data)
        $http.post(
            'http://localhost:3000/personas',
            data
        ).then(function (res) {
            console.log(res)
            Data.personas.push(res.data.ops[0])
            $scope.name = ''
            $scope.lastname = ''
            $scope.edad = ''
            // Meter este nuevo resultado en Data 
            // y que se vea reflejado en el controlador de get-personas
        })
    }
    $interval(function (){
        $scope.numPersonas = Data.personas.length
    }, 1000)
});