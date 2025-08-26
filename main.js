const ps = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!$%&|[](){}:;,.+-#@<>~"
}

let length = document.getElementById("customRange3");
const PasswordInput = document.getElementById("PasswordInput");
const randomInteger = (min, max) => Math.floor( min + Math.random() * (max + 1 - min));
const shuffleString = str => str.split("").sort(function(){return 0.5-Math.random()}).join("");
let copy = document.getElementById("copyBtn");

function Value(){
 let length = document.getElementById("customRange3").value;
let text = document.getElementById("labelqwe").innerText =  "Password Length: " + length;
}

length.addEventListener("input", Value);

function copyText(){
    navigator.clipboard.writeText(PasswordInput.value);
}

const generate = () =>{

let length = document.getElementById("customRange3").value;
let pool = ""
let RandomArr = [];


if (document.getElementById("numbers").checked) {
    pool += ps.numbers;
    RandomArr.push(ps.numbers[randomInteger(0, ps.numbers.length - 1)]);
}

if (document.getElementById("uppercase").checked) {
    pool += ps.uppercase;
    RandomArr.push(ps.uppercase[randomInteger(0, ps.uppercase.length - 1)]);
}

if (document.getElementById("lowercase").checked) {
    pool += ps.lowercase;
    RandomArr.push(ps.lowercase[randomInteger(0, ps.lowercase.length - 1)]);
}

if (document.getElementById("symbols").checked) { 
    pool += ps.symbols;
    RandomArr.push(ps.symbols[randomInteger(0, ps.symbols.length - 1)]);
}

if (pool.length === 0) {
    document.getElementById("tekst").innerText = "Choose at least one option!";
    return;
  }
else{
     document.getElementById("tekst").innerText = "";
  }

pool = shuffleString(pool);

while(RandomArr.length < length){
    RandomArr.push(pool[randomInteger(0, pool.length - 1)]);
}

let randomPassword = shuffleString(RandomArr.join(""));
PasswordInput.value = randomPassword;
}

document.getElementById("but").onclick = generate;
copy.onclick = copyText;

document.addEventListener("DOMContentLoaded", () => {
    PasswordInput.value = ""; 
}); 

$(document).ready(function(){

$("i").click(function(){
    if (PasswordInput.value == "") {

    }
    else{
    $(this).fadeOut("slow");
    let tect = document.querySelector(".copier");
    setTimeout(() => {
    tect.innerText = "Copied";
}, 590);
}
});

$("#but").click(function(){
$("i").fadeIn("fast");
let tect = document.querySelector(".copier");
tect.innerText = "";
});
});