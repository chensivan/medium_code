var app = angular.module("myExperiment", ["ngRoute"])

app.config(function($routeProvider) {
   $routeProvider
   //remember to add app.get('*' in server.js, and use /#!/ before route
    .when("/", {
      templateUrl: "src/home.html"
    })
    .when("/condition_1", {
      templateUrl: "src/view/index.html",
      controller: "condition"
    })
    .when("/condition_2", {
      templateUrl: "src/view/index.html",
      controller: "condition"
    })
});
