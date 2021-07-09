let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

function findAll(str,wanted){

    if (str.includes(wanted)){

        let fromIndex = 0;

        while (str.indexOf(wanted, fromIndex) !== -1 ) {
            let foundIndex = str.indexOf(wanted, fromIndex)
            console.log(`"${wanted}" starting index no : ${foundIndex}`)
            fromIndex = foundIndex + 1
        }
        
    } else {console.log("No match found.")}  
}
findAll(str,"simply");