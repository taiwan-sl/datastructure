var weight = 60;
var height = 160;

var readline = require("readline-sync");
//user input

while (true) {
    weight = readline.questionFloat('Your weight (10~200 KG)? ');
    if (weight < 10 || weight > 200){
        console.log("Please 10~200!");
        continue;
    }else
        break;
}



var bmi = weight / ((height / 100) ** 2);
console.log("Your BMI:" + bmi);

function test(weight = 70) {
    var weight = 50;
    console.log("weight=" + weight)
    return weight;
}

var result = test(90);

console.log("weight=" + weight)