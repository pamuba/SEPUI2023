const customMatcher = {
    toBeCalculator: function(){
        return {
            compare: function(actual, expected){
                const result = {
                    pass: actual instanceof Calculator, //TODO
                    message: ''                    
                }
                if(result.pass) 
                {
                    //message for negative test
                   result.message += 'Expected '+actual+"not to be an instance of Calculator"
                }
                else{
                    
                    result.message = 'Expected '+actual+" to be an instance of Calculator"
                }
                return result
            }
        }
    }
}