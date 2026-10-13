var ary1=[0,5,8,1,7];
//var ary2=ary1;//[0,5,8,1,7];
var ary2=[0,5,8,1,7];
console.log("ary1==ary2?"+ (ary1 == ary2))//wrong method

//JSON String
console.log(JSON.stringify(ary1))
console.log(JSON.stringify(ary2))
var ary1Str = JSON.stringify(ary1);//to string

console.log("ary1==ary2?"+ (JSON.stringify(ary1)==JSON.stringify(ary2)))//wrong method without ()

//duplicate
var ary3 = ary1.slice()
ary3[0]=10;
var ary4 = JSON.parse(ary1Str);//to object
ary4[0]=10;
console.log("ary1[0]="+ary1[0])