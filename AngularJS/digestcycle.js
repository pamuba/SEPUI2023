var app = angular.module('app', []);

app.controller('emp', ['$scope', '$rootScope',function($scope, $rootScope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.s = 0;

    // $scope.$watch('a', function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         console.log("a modified to "+ newValue)
    //     }
    // })

    // $scope.$watch('b', function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         console.log("b modified to "+ newValue)
    //     }
    // })

    // $scope.$watch('c', function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         console.log("c modified to "+ newValue)
    //         if($scope.c > 50)
    //             $scope.a = 1000
    //     }
    // })

    // $rootScope.$watch(function(){
    //     console.log("-----Digest iterration Started----")
    // })

    $scope.calcSum = function(){
        $scope.s = Number($scope.a) + Number($scope.b);
    }

}]);

var btnClick = function(){
    var $scope = angular.element($("#div1")).scope();
    $scope.s = Number($scope.a) + Number($scope.b);
    $scope.$digest()
}

//$apply $digest
