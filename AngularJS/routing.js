var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
   //Define Some Routes
   $routeProvider
   .when('/first-msg', {
    // template: '<b>This is the first Message</b>'
    templateUrl:'msg1.html',
    controller:'message1'
   })
   .when('/second-msg', {
    templateUrl:'msg2.html',
    controller:'message2'
   })
   .when('/third-msg', {
     //redirectTo:"/second-msg"
     redirectTo: function(){
        alert("404...redirecting to /second-msg");
        return "/second-msg";
     }
   })
   .when('/sumurl/:a/:b',{
     templateUrl:'sumurl.html',
     controller:'sumurl'
   })
   .when('/suminput',{
    templateUrl:'suminput.html',
    controller:'suminput'
  })
   .when('/', {
    template: '<b>This is the Root Route. Please Use the Links</b>'
   })
   .otherwise({
    template: '<b>This is the Otherwise Route. Please Use the Links</b>'
   })
}]);

app.controller('message1', ['$scope', function($scope){
    $scope.a = 10,
    $scope.b = 20
}])
app.controller('message2', ['$scope', function($scope){
    $scope.c = 10,
    $scope.d = 20
}])

app.controller('sumurl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
}])
app.controller('suminput', ['$scope','$location', '$interpolate', function($scope, $location,$interpolate){
    $scope.a = 0;
    $scope.b = 0;

    $scope.doSum = function(){
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope)
        $location.path(url)
    }
}])

