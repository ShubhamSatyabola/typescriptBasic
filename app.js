"use strict";
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const button = document.querySelector('button');
const textResult = [];
const stringResult = [];
function printResult(resultObj) {
    console.log(resultObj.val);
}
function add(value1, value2) {
    if (typeof value1 === 'number' && typeof value2 === 'number') {
        return value1 + value2;
    }
    else if (typeof value1 === "string" && typeof value2 === 'string') {
        return value1 + " " + value2;
    }
    return +value1 + +value2;
}
button.addEventListener('click', () => {
    const value1 = num1.value;
    const value2 = num2.value;
    const result = add(+value1, +value2);
    textResult.push(result);
    const string = add(value1, value2);
    stringResult.push(string);
    //console.log(result)
    //console.log(stringResult)
    printResult({ val: result, timestamp: new Date() });
    console.log(textResult, stringResult);
});
