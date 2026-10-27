function brackMatch(inputString){
    var stack=[];
    var isMatched = true;
    var i=0;
    var symbol = inputString.charAt(0);
    //var LBrackets = ['{','[','(']; //LBrackets="{[("
    //var RBrackets = ['}',']',')']; //RBrackets="}])"
    var Brackets = {//Use JSON object to store the mapping of opening and closing brackets
        '{': '}',
        '[': ']',
        '(': ')'
    };

    while(isMatched && symbol != ''){//??? \n
        //if(symbol == '{' || symbol=='[' || symbol=='('){
        if(Brackets.hasOwnProperty(symbol)){ //or Brackets[symbol] != undefined
            //push 
            stack.push(symbol);
        }
        else if(Object.values(Brackets).indexOf(symbol) != -1){ //Object.values(Brackets) => all closing brackets

            if(stack.length>0){
                var openBracket = stack.pop();
                if(Brackets[openBracket] == symbol)
                    isMatched=true;
                else 
                    isMatched=false;
            }
            else
                isMatched=false;
        }
        i++;
        symbol=inputString.charAt(i);
    }
    if(stack.length>0)
        isMatched=false;
    return isMatched;
}

var str="{a = (1 + v(b[3 + c[4]]))};"
//var str="{[";
console.log(str+" is matched: "+brackMatch(str));