let string = prompt("give me a sentence to return reverse of it : ")
let result = ""
for (let i = string.length - 1 ; i >= 0 ; i--){
    
    result += string[i];
    
}
console.log(result)