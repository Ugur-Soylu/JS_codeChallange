let choosenTemp = prompt("Please select the temperature unit you want to convert by typing in the format shown:  C -> F   or   F -> C").trim()
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
 }