// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const questions = () =>{
    /*
    Ask how many characters (prompt) - (8-128)
        - Ask if letters are ok
            - are lowercase letters ok?
            - are uppercase letters ok?
        - ASk if numbers are ok
        - Ask if symbols are ok


    */
    // alert("sdfsd")
    // prompt("fsggsfs")
    // confirm("dfsdfdsf")

    const alphabetU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    const alphabetL = "abcdefghijklmnopqrstuvwxyz".split("")
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const symbols = [";","-","_"]


    let selectorArray = []

    //console.log(selectorArray)
    //console.log


    var numOfCharacters = prompt("How many characters (8-128) do you want in your password?")


    var lettersQ = confirm("Do you want letters in your password?")
    if (lettersQ){

        /*
        var lQReturn = letterQuestions()
        var upperQ = lQReturn[0]
        var lowerQ = lQReturn[1]

        if (upperQ){ selectorArray = selectorArray.concat(alphabetU) }
        if (lowerQ){ selectorArray = selectorArray.concat(alphabetL) }
        */
        let upperQ = confirm("Do you want uppercase letters?")
        let lowerQ = confirm("Do you want lowercase letters?")

        if (upperQ){ selectorArray = selectorArray.concat(alphabetU) }
        if (lowerQ){ selectorArray = selectorArray.concat(alphabetL) }
    }

    var numsQ = confirm("Do you want numbers in your password?")
    if(numsQ){
        selectorArray = selectorArray.concat(numbers)
    }

    var symbolsQ = confirm("Do you want symbols in your password?")
    if(symbolsQ){
        selectorArray = selectorArray.concat(symbols)
    }

    return [numOfCharacters, selectorArray]
}




/*
const letterQuestions = () =>{

    let upperQ = confirm("Do you want uppercase letters?")
    let lowerQ = confirm("Do you want lowercase letters?")

    console.log(" " + upperQ + "  " + lowerQ)


    if (!upperQ && !lowerQ){
        alert ("Must choose one type of letter")
        letterQuestions()
    }
    else if(upperQ || lowerQ === true){

    }


    return [upperQ, lowerQ]

}
*/










const generatePassword = () =>{
    let qReturn = questions()
    let selectors = qReturn[1]
    let numOfCharacters = qReturn[0]

    console.log(selectors)

    let outputPassword = ""
    let length = selectors.length


    if (length === 0){
        outputPassword = "You dumb dumb.  Pick some of our options."
    }else{
        for(let i=0; i<numOfCharacters; i++){
            let character = selectors[Math.floor(Math.random()*length)]
            outputPassword += character
        }
    }


    // alert(outputPassword)

return outputPassword


}



var passwordBox = document.querySelector("#password");
passwordBox.addEventListener("click", copyToClipboard);

const copyToClipboard = () => {
  const el = document.getElementById('password');
  el.select();
  document.execCommand('copy');
  alert ("copied password")
};









//EOF
