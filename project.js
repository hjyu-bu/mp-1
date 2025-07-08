let val1=document.getElementById("input1");
let val2=document.getElementById("input2");
// Declare global and manipulate this based on the last button pushed
let result=document.getElementById("output");

function doadd(){
    let value = Number(val1.value)+Number(val2.value);
    if (value < 0) {
        result.style.color="darkred";
    }
    else {
        result.style.color = "#3a4454";
    }
    result.innerHTML = `Result: ${value}`;
}

function dosub(){
    let value = Number(val1.value)-Number(val2.value);
    if (value < 0) {
        result.style.color="darkred";
    }
    else {
        result.style.color = "#3a4454";
    }
    result.innerHTML = `Result: ${value}`;
}

function domult(){
    let value = Number(val1.value)*Number(val2.value);
    if (value < 0) {
        result.style.color="darkred";
    }
    else {
        result.style.color = "#3a4454";
    }
    result.innerHTML = `Result: ${value}`;
}

function dodiv() {
    let value = Number(val1.value)/Number(val2.value);
    if (value < 0) {
        result.style.color="darkred";
    }
    else {
        result.style.color = "#3a4454";
    }
    result.innerHTML = `Result: ${value}`;
}

function dopow() {
    let value = 1;
    for (let i = 0; i < Number(val2.value); i++) {
        value *= Number(val1.value);
    }
    if (value < 0) {
        result.style.color="darkred";
    }
    else {
        result.style.color = "#3a4454";
    }
    result.innerHTML = `Result: ${value}`;
}

function doclr(){
    result.innerHTML = "";
    val1.value="";
    val2.value="";
}