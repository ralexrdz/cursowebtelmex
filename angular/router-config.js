app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./main.html"
    })
    .when("/red", {
        templateUrl : "./red.html"
    })
    .when("/green", {
        templateUrl : "./green.html"
    })
    .when("/blue", {
        templateUrl : "./blue.html"
    })
    .when("/prueba", {
        template: "<h1>PRueba</h1>"
    });
});
