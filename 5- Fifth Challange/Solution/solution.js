//1. Solution

 function tempConverter(){
    let choosing = prompt("Please choose a number;\n 1 -> for convert Celcius to Fahrenheit\n 2 -> for convert Fahrenheit to Celcius\n 3 -> for exit ")
    while (choosing != 1 && choosing != 2 && choosing != 3) {    
        choosing = prompt("Please make your choice:  1  or  2  /  or  3 -> for exit")
     }

     if (choosing == 1 || choosing == 2) {
        degree = prompt("Please enter a temperature degree : ")
        while (isNaN(degree)) {
            degree = prompt("Please enter a numeric value : ")
        } 
        if (choosing == 1 ) {result = degree * 9 / 5 + 32 
            console.log(`${degree}°C = ${result.toFixed(2)}°F`)
        } else if (choosing == 2) {
            result = (degree - 32) * 5 / 9
            console.log(`${degree}°F = ${result.toFixed(2)}°C`)
            }
            
     }else {
        console.log("See you later")
     }
 }
 tempConverter() 


 //2. solution
/*let choosenTemp = prompt("Please select the temperature unit you want to convert by typing in the format shown:  C -> F   or   F -> C").trim()
while (choosenTemp !== "C -> F" && choosenTemp !== "F -> C") {
    
    choosenTemp = prompt("Please write in the following format:  C -> F  or   F -> C")
}

if (choosenTemp === "C -> F") {
    let tempValue = Number(prompt("Please enter a numeric value : "))
    let result = tempValue * 9 / 5 + 32
    console.log(`${tempValue}°C = ${result.toFixed(2)}°F`)
    
} else {
    let tempValue = Number(prompt("Please enter a numeric value : "))
    let result = (tempValue - 32) * 5 / 9
    console.log(`${tempValue}°F = ${result.toFixed(2)}°C`)
}*/