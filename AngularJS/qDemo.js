var app = angular.module('app', []);

app.controller('emp', ['$scope', '$timeout', '$q',function($scope, $timeout, $q){
    
    function add(x, y){
        var q = $q.defer();
        setTimeout(function(){   //Promise(result)
            var result = (x+y);
            if(result >=0 ){
                q.resolve(x+y)
            }
            else{
                q.reject('negative value: '+result)
            }
        }, 1000);
        return q.promise;
    }
    var startTime = Date.now();
    var promise = add(5,2);
    promise
    .then(function(result){
        return add(result, 3)
    })
    .then(function(result){
        return add(result, 1)
    })
    .then(function(result){
        $scope.result = result
        $scope.elapsedTime = Date.now() - startTime
    })
    // add(5,2, function(result){
    //     add(result, 3, function(result){
    //         add(result, 1, function(result){
    //             $scope.result = result
    //             $scope.elapsedTime = Date.now() - startTime
    //         }, function(error){  /* handle error */});
    //     }, function(error){  /* handle error */});
    // }, function(error){  /* handle error */});

}]);
