var app = angular.module('app', []);

app.controller('emp', ['$scope',function($scope){
    // $scope.o = {
    //     a:1,
    //     b:2,
    //     c:3
    // }
    // $scope.a = 1;
    // $scope.b = 2;
    // $scope.c = 3;

    // $scope.updateC = function(){
    //     $scope.c = $scope.a * 4;
    // }

    // $scope.$watch("a", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.b = $scope.a * 2
    //     }
    // })

    // $scope.$watch("c", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         console.log("Updated C to "+newValue)
    //     }
    // })

    // $scope.$watchGroup(["a","b"], function(newValue, oldValue){
    //         if(newValue != oldValue){
    //             $scope.c = $scope.a * $scope.b
    //         }
    //     })

    // $scope.$watch("o", function(newValue, oldValue){
    //         if(newValue != oldValue){
    //             $scope.o.c = $scope.o.a * $scope.o.b
    //         }
    //     }, true)

    $scope.emps = [
        {empno:"10001", ename:"Bill"},
        {empno:"10002", ename:"Mill"},
        {empno:"10003", ename:"Jill"},
        {empno:"10004", ename:"John"},
        {empno:"10005", ename:"Jeny"}
    ]

    $scope.addEmp = function(){
        var newEmpNo = 10000 + $scope.emps.length + 2;
        var newEmpName = "ename" + newEmpNo

        $scope.emps.push({empno:newEmpNo, ename:newEmpName});
    }

    $scope.modify3rdEmp = function(){
        $scope.emps[2].ename = 'New Name';
    };

    $scope.$watchCollection('emps', function(newValue, oldValue){
        console.log("No of Employees: "+  $scope.emps.length)
    })
    
}]);

//DI