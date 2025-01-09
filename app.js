var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outPutDiv = document.querySelector("#output");

// btnTranslate.addEventListener("click", function clickEventHandler() {
//     console.log("clicked!")
// })

// outputDiv.innerText = "Tanay Pratap"

console.log(outPutDiv)

function clickHandler() {
    // console.log("clicked!")
    // console.log("input", txtInput.value);
    outPutDiv.innerText = "da da da a da ad  " + txtInput.value; 
};

btnTranslate.addEventListener("click", clickHandler) 

