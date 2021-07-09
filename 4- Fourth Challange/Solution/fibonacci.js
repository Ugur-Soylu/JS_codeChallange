//FIRST SOLUTION

let firstNumber = 1;
let secondNumber = 0;
let arr = [];
function fibonacci(x){
    for(let i = 0; i<= x; i++) {
        arr.push(firstNumber)       
        total = firstNumber + secondNumber;
        secondNumber = firstNumber;
        firstNumber = total;
    }
    console.log(arr)
    return arr[x]    
}
console.log(fibonacci(7));



//SECOND SOLUTION (using Recursive)

function fibonacci2(n) {
    if (n === 0 || n === 1) {
        return 1;
    }else;
    return fibonacci2(n-1) + fibonacci2(n-2)
}
console.log(fibonacci2(7));


//THIRD SOLUTION

let number = 1;
let fibonacciArr = [1]

let fibonacci3 = a => {
    for(i=1; i<=a; i++){
        fibonacciArr.push(number)
        number += fibonacciArr[fibonacciArr.length-2]
    }  
    
    return fibonacciArr[a]
}
console.log(fibonacci3(7))
console.log(fibonacciArr)



