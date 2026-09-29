function sum(n){
    var result=0;
    for (let index = 1; index <= n; index++) {
        result += index;
    }
    // do{

    // }while();

    return result;
}

console.log("1+2+...+1000000="+sum(1000000));
//problem
//find O(1) algorithm?