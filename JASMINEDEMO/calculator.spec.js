describe('Testing calculator.js', function(){

    let calculator = null;
    let calculator1 = null;
    let calculator2 = null;
    beforeEach(function(){
        calculator = new Calculator();
        calculator1 = new Calculator();
        calculator2 = new Calculator();
    });
    beforeAll(function(){

    })

    it('should add numbers to total', ()=>{
        calculator.add(5);
        expect(calculator.total).toBe(5);
    });

    it('should subtract numbers to total', ()=>{
        calculator.total = 50;
        calculator.subtract(10)
        expect(calculator.total).toBe(40);
    });

    it('should initialize total to 0', ()=>{
        expect(calculator.total).toBe(0);
    });

    it('has Constructor', ()=>{
        expect(calculator).toEqual(calculator2);
    });
    it('can be initialized', ()=>{
        jasmine.addMatchers(customMatcher);

        expect(calculator).not.toBeCalculator();

        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator).toEqual(calculator2);
    });

    it('instantiates unique objects', ()=>{
        expect(calculator1).not.toBe(calculator2);
    });

    it('has common operation', ()=>{
        expect(calculator.add).toBeDefined();
        expect(calculator.minus).toBeUndefined();
        expect(calculator.multiply).toBeDefined();
        expect(calculator.product).toBeUndefined();
    });

    it('can overwrite total', ()=>{
        calculator.total = null;
        expect(calculator.total).toBeNull();
        expect(calculator.constructor.name).toContain("Calculator");
    });

    it('doesnt handle Nan', ()=>{
        calculator.total = 20;
        calculator.multiply('a')
        expect(calculator.total).toBeNaN();
    });

    it('handles divide by zero', ()=>{
        expect(function(){calculator.divide(0)}).toThrow();
        expect(function(){calculator.divide(0)}).toThrowError(Error);
        expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero');
    });

    it('returns zero', ()=>{
        const calculator = new Calculator();
        calculator.total = 50;
        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch('number');
        expect(calculator.total).toEqual(jasmine.anything());
    });

    afterEach(function(){
        calculator = null;
        calculator1 = null;
        calculator = null;
    })
    afterAll(function(){

    })

})

//A live database or a database that changes
//Would the ability to adjust server load distribution according to traffic be a part of a 
//dymanic database capability? Yes
//Or can that be done with a static database as well..No