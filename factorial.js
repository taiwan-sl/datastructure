var n=10;

function fact(n){
    var result=1;
    for (let i = 1; i <= n; i++) {
       result *= i;
    }
    return result;
}
function recfact(n){
    if(n==1)
        return 1;
    else
      return n * recfact(n-1);
}

console.log("10!="+fact(n));

console.log("10!="+recfact(n));
