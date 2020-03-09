//output of the following

//iife

(function(x) {  
    return (function(y) {  
        console.log(x);
        console.log(y);//1 
    })(2)  
})(1);