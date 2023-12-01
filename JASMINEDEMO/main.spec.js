describe('main.js', function(){
    it('validate expression', function(){
       spyOn(window, 'updateResult').and.stub();

       calculate('3+3');
       calculate('1+3');

       expect(window.updateResult).toHaveBeenCalled();
       expect(window.updateResult).toHaveBeenCalledWith(4);
       expect(window.updateResult).toHaveBeenCalledWith(4);
       expect(window.updateResult).toHaveBeenCalledTimes(2);
    })
    it('call add', function(){
        const spy = spyOn(Calculator.prototype, 'add').and.stub();

       calculate('3+3');
       expect(spy).toHaveBeenCalled();
    })

    it('callThrough', function(){
        spyOn(window, 'updateResult');
        //spyOn(Calculator.prototype, 'add').and.callThrough();
        
        // spyOn(Calculator.prototype, 'add').and.callFake(function(number){
        //     return 100
        // });

        //spyOn(Calculator.prototype, 'add').and.returnValues(900, 333)


        spyOn(Calculator.prototype, 'add').and.throwError("Spy Error Thrown")


         
         
         expect(function(){ calculate('3+3')}).toThrowError('Spy Error Thrown');
        //  expect(window.updateResult).toHaveBeenCalled();
        //  expect(window.updateResult).toHaveBeenCalledWith(333);
    })
})