var ary2d =[
    [1,2,3], //row 0 major by row
    [2,3,4], //row 1
    [3,4,5], 
    [4,5,6], 
    [5,6,7] ];
   //col1
       //col2
console.log("ary2d[0][1]=" + ary2d[0][1]);

//Problem 
//dynamic allocate 2d array M*N
var M=5, N=7;
//Create M*N 2d array
var newAry = new Array();//[]
//row
var idx=0;
for (let row = 0; row < M; row++) {
    newAry.push([])
    //col
    for (let col = 0; col < N; col++) {
        //push
        newAry[row].push(row*N+col)
    }
}

console.log("newAry="+JSON.stringify(newAry));
