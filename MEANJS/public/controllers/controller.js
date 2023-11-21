function AppCtrl($scope, $http){
    console.log("Hello World from Controller")

    var refresh = function(){
        $http.get('/contactlist').success(function(response){
            $scope.contactlist = response;
            $scope.contact = ""
        });
    };
    
    refresh();


    $scope.addContacts = function(){
        $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response)
            refresh();
        })
    }

    $scope.remove = function(id){
        $http.delete('/contactlist/' + id).success(function(response){
            refresh();
        })
    }

    $scope.edit = function(id){
        $http.get('/contactlist/' + id).success(function(response){
            $scope.contact = response;
        })
    }

    $scope.update = function(){
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
            refresh();
        })
    }


}