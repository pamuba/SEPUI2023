// var a  =  10
// var b = 20;
// [a,b] = [b,a]

// console.log(a)
// console.log(b)

var funcs = [];

for (var i=0; i<3; i++) {
    funcs[i] = function(){
        console.log("Val : "+i)
    };    
}

for (var j=0; j<3; j++) {
    funcs[j]();
}

