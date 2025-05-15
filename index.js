//add 2 numbers
function add(x,y){
     let result = x+y;
     return result;
}
let allResult = add(100, 200) + add(600, 500) + add(50, 80);
console.log(allResult);

//multiplication
function multiply(x,y){
     if(typeof(x)!=="number")
     {
        return "1st input is not a number";
     }
     else if(typeof(y)!=="number")
     {
         return "2nd input is not a number";
     }
     else
     {
        return x*y;
     }
}

console.log(multiply(10,5));

// odd or even checker
function isEven(num)
{
// if(num%2==0)
//      {return "Even"};
//     else{
//     return "Odd";
//     }
    return num%2==0 ? "Even":"Odd"
}
    console.log(isEven(4));

// celsius to fahrenheit
function CtoF(celsius)
{
    return (celsius*9/5)+32;
}
console.log(CtoF(0));

// SQUARE OF A NUMBER
function squareNum(num)
{
    return num*num;
}
console.log(squareNum(4));

// get first character of a string
function firstCharacter(str)
{
    return str.charAt(0);
}
console.log(firstCharacter("hellooo"));

//negative/positive
function checkNum(num)
{
    // if(num>=0)
    // {
    //     return "Positive";
    // }
    // else{
    //     return "Negative";
    // }
    return num>=0 ? "Positive": "Negative";
    
} 
console.log(checkNum(-4));

//minute to second
function minuteToSecond(minute)
{
    return minute*60;
}
console.log(minuteToSecond(20));

//concatenation of strings
function concatenate(x,y)
{
    return x+" "+y;
}
console.log(concatenate("hello","js"));

//check if string contains a word
function checkSTR(sentence,word)
{
    return sentence.includes(word);
}
console.log(checkSTR("i love js","js"));