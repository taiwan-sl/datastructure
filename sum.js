//for 1+2+3...+n
function sum(n){
    var result=0;
    for (let index = 1; index <= n; index++) {
        result += index;
    }   
    // do{
    // }while();
    return result;
}
//for 1-2+3-...+n
function sum2(n){
     var sign=1;
    result=0;
    for (let index = 1; index <=n; index++) {
        result = result+ index*sign;
        // result += i*sign
        sign *= -1;
        
    }
}
console.log("1+2+...+1000000="+sum(1000000));
//problem
//find O(1) algorithm?