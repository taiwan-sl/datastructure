var b = [];
var c = [10,15,20,25];
//JSON
var obj = {"name":"MD", "grade":2, "course":"DataStructure", "option":["dance","playgame"]}
b[0]=0;
b[1]=0;
b.push(0);
b.push("abc");
b[0]=15;
b[1]=c[2];

console.log("b[3]="+b[3])

function average(s){
    //check data
    var sum=0;
    var avg;
    for (let i = 0; i < s.length; i++) {
        sum += s[i];
    }
    avg = sum/s.length;
    return avg;
}

var ary=[];
var num=5;
var readline = require("readline-sync");
for (let i =0;  i < num; i++){
   ary[i]=readline.questionFloat("Input grade:"+ i);
}
console.log("Average="+average(ary));


