
//Object
var studend1 = {"Chinese":70, "English":80, "Math":90, "Soci":60, "PhCh":80,"habits":["tea","game"]}

//class
class Student{
    constructor(_name, _chinese, _english, _math, _soci, _phch){
        this.name=_name;
        this.Chinese=_chinese;
        this.English=_english;
        this.Math=_math;
        this.Soci=_soci;
        this.PhCh=_phch;
    }
    printName(){
        console.log(this.name);
    }
    avg(){
        var sum=(this.Chinese+this.English+this.Math+this.PhCh+this.Soci);
        console.log(this.name+" score avg:"+sum/5);
    }
}
var MD2=[];
// var s1 = new Student("Chen",70,80,90,60,80);
// var s2 = new Student("Chan",90,90,70,75,85);
MD2.push(new Student("Chen",70,80,90,60,80));
MD2.push(new Student("Chan",90,90,70,75,85));
MD2.push(new Student("Lin",85,85,80,90,80));

//Chinese average
var sum=0
for (let i = 0; i< MD2.length; i++){
   sum+=MD2[i].Chinese;
}
var avg=sum/MD2.length;

MD2[1].printName();
MD2[1].avg();
MD2.indexOf("Chan")//XXX
MD2.find((item,index,ary)=>{
    return item.name=="Chan";
})
console.log(JSON.stringify(MD2));

var ary=[3,7,2,1,9,8];
//ascendence
console.log(ary.sort())

//decendence
console.log(ary.sort( function(a,b){
   return b-a;
}));

//random sort
console.log(ary.sort( function(a,b){
    return 0.5-Math.random();
 }));


//Object sort
console.log(MD2.sort( function(a,b){
//   if( b.PhCh==a.PhCh){
//     return b.English-a.English;
//   }
//     else 
  return b.PhCh-a.PhCh;
 }));