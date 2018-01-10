"use strict;"
// Pagrindinis kintamasi, kuriame saugosime kalkuliatoriaus ekrano reikšmę
let result = "";

// Kalkuliatoriaus ekrano elementas
let outputEl = document.querySelector(".output");

// Mygtukai
let buttons = document.querySelectorAll(".btn-show");
let cBtn = document.querySelector(".c");
let eqBtn = document.querySelector(".eq");
let negBtn = document.querySelector(".neg");



// Registruojam mygtukų paspaudimus
buttons.forEach(function(button){
    button.addEventListener("click", function(){
        addToResult(button.innerText);
        });
});
cBtn.addEventListener("click", function() {
    result = "";
    outputEl.innerText = result;
});
negBtn.addEventListener("click", function() {
 for(let index = result.length -1; index >= 0; index--) {
    if (result[index] === "+") { 
         result = replace(index, "-");
         outputEl.innerText = result;
         break;
        } 
    if (result[index] === "-") {
        result = replace(index, "+");
        outputEl.innerText = result;
        break;
        } 
    if (result[index] === "x" || result[index] === "/") {
        result = result.slice(0, index+1) + "-" + result.slice(index+1);
        outputEl.innerText = result;
        break; 
        } 
    if (index === 0) {
            result = "-" + result;
            outputEl.innerText = result;
        }
    }
  
});

eqBtn.addEventListener("click", function() {
    result = result.replace("x", "*");
    try {
        result = eval(result);
    } catch (error) {
        console.log("Klaida!");
    } 
    outputEl.innerText = result;
    result = result.toString();
 });

//Su šia funkcija pridedame simbolius (skaičiai, matematiniai operatoriai) į result
// Taip pat rezult kintamąjį atvaizduojame ekrane

function addToResult(textToAdd) {
    result = result + textToAdd;
    outputEl.innerText = result;
}

// Funkcija pakeičianti string reikšmes, skirta neg mygtukui
function replace(index, replacement) {
    return result.substr(0, index) + replacement + result.substr(index + replacement.length);
}