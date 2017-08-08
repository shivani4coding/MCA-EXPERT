var app=angular.module("myapp",['ngRoute']);



app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'index.html'//,
        //controller:'homecontroller'
    }) .when('tutorial.html',{
       templateUrl:'pages/tutorial.html',
       // controller:'aboutcontroller'
    }) /*.when('/login',{
        templateUrl:'pages/login.html',
        controller:'logincontroller'
    })*/
});




app.controller("tutorialcontroller",function($scope){
    $scope.homedata=["hiinmmkmkzmc"];
});

/*
app.controller("logincontroller",function($scope){
    $scope.logindata=["Welcome Login"];
});
app.controller("aboutcontroller",function($scope){
    $scope.aboutdata=["Welcome About Page"];
});*/