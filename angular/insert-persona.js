console.log('insert-persona')
app.controller('insertPersona', function($scope, $http) {
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
        })
    }
});