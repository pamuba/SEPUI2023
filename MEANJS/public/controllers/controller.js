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


}