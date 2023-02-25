//Get value from the user input

function getValue(){

    //hide alert box
    document.getElementById("alert").classList.add("invisible");

    let userInput = document.getElementById("userInput").value;

    let returnObj = checkUserInput(userInput);

    displayUserInput(returnObj);
}

function checkUserInput(userInput){

    // to lowercase 
    userInput = userInput.toLowerCase();

    //regex removes special characters

    let regex = /[^0-9a-zA-Z]/gi;

    userInput = userInput.replace(regex,"");

    //Array
    let revUserInput = [];

    //object
    let returnObj = {};


    for (let index = userInput.length - 1; index >= 0; index--) {
        
        revUserInput += userInput[index];
    }

    if (userInput == revUserInput) {
        returnObj.msg = "Well done your input is a palindrome"
    }
    else{
        returnObj.msg = "Your input is not a palindrome"
    }

    returnObj.reversed = revUserInput;

    return returnObj;

}

function displayUserInput(returnObj){

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your input reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

}