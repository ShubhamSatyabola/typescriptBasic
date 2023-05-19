const num1 = document.getElementById('num1') as HTMLInputElement
const num2 = document.getElementById('num2') as HTMLInputElement
const button = document.querySelector('button') as HTMLButtonElement

const textResult: number[] = []
const stringResult: string[] = []
//typealiases
type numberOrString = number|string
type result = {val: number , timestamp: Date}
//interface
interface resultObj {
    val: number , 
    timestamp: Date
}

function printResult(resultObj:resultObj){
    console.log(resultObj.val)
}

function add(value1: numberOrString,value2: numberOrString){
    if (typeof value1 === 'number' && typeof value2 === 'number'){
        return value1 + value2
    }
    else if(typeof value1 === "string" && typeof value2 === 'string'){
        return value1 +" "+ value2
    }
    return +value1 + +value2
  }
button.addEventListener('click',()=>{
    const value1 = num1.value
    const value2 = num2.value
    const result = add(+value1,+value2)
    textResult.push(result as number)
    const string = add(value1,value2)
    stringResult.push(string as string)
    //console.log(result)
    //console.log(stringResult)
    printResult({val: result as number ,timestamp: new Date()})
    console.log(textResult,stringResult)

})

