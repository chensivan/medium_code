var app = angular.module("myExperiment", ["ngRoute"])

app.config(function($routeProvider) {
   $routeProvider
   //remember to add app.get('*' in server.js, and use /#!/ before route
    .when("/", {
      templateUrl: "src/home.html"
    })
    .when("/condition1", {
      templateUrl: "src/view/index.html",
      controller: "condition1"
    })
    .when("/condition2", {
      templateUrl: "src/view/index.html",
      controller: "condition2"
    })
    .otherwise({
        template : "<h1>There is no such page!</h1>"
    });
});
