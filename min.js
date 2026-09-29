function min(A) {
    //check A is array
    if (Array.isArray(A)) {
        var min = A[0];
        for (let index = 1; index < A.length; index++) {
            if (A[index] < min)
                min = A[index];
        }
        return min;
    }else{
        return "Error input!"
    }
}

var Ary = [5, 3, 9, 6, 7, 0, 2, 1];
console.log("Min(10)="+min(10));

console.log("Min=" + min(Ary))

//problems
//Please exercise by yourself
//1 return the position of the minimum value of the inputed Array
//2 return all the positions of the minimum value of the inputed Array

