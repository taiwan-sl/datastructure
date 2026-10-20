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
        newAry[row].push(row+col*M)
    }
}
// row*N+col
//[
//     [0,1,2,3,4,5,6],
//     [7,8,9,10,11,12,13],
//     [14,15,16,17,18,19,20],
//     [21,22,23,24,25,26,27],
//     [28,29,30,31,32,33,34]
// ]
//row+col*M
// [
// [0,5,10,15,20,25,30],
// [1,6,11,16,21,26,31],
// [2,7,12,17,22,27,32],
// [3,8,13,18,23,28,33],
// [4,9,14,19,24,29,34]]
console.log("newAry="+JSON.stringify(newAry));
