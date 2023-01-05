// @flow
"use strict";
import _ from "lodash";
import { printMe } from "./print.js";
import { validateId } from "./validator.js";

function component() {
    const element = document.createElement("div");
    

    const btn = document.createElement("input");
    btn.setAttribute("type", "submit");
    btn.setAttribute("value", "press this button");
    btn.setAttribute("id", "button1");
    btn.onclick = printMe;
 
    element.innerHTML = _.join(["Good morning", "wwwebpack!!!!!"], " ");   
    
    element.appendChild(document.createElement("br"));
    element.appendChild(document.createElement("br"));
    element.appendChild(btn);
    element.appendChild(document.createElement("br"));
    element.appendChild(document.createElement("br"));
    return element;
}

document.body.appendChild(component());

const anchor = document.createElement("a");
const text = document.createTextNode("Hello!");
anchor.appendChild(text);
anchor.setAttribute("href", "http://noodles.com");

const button1 = document.querySelector("#button1"); 

const buttonTexts = ["click me", "press me!", "oh go on", "you know you want to", "things wont be the same","if you don't press this", "please?", "oh for pity's sake please press this", "we think you should", "do it", "just do it now!", "go on", "I'll be your friend?"];

var buttonTextIndex = 0;
setInterval(() => {    
    if(buttonTextIndex + 1 >= buttonTexts.length) {
        buttonTextIndex = 0;
    } else {
        buttonTextIndex ++;
    }
    button1.value = buttonTexts[buttonTextIndex];
}, 1000);
document.body.appendChild(anchor);

// ES6 TEST!
var mapped = [1, 2, 3].map(n => n + 1);
console.log(`mapped stuff is ${mapped}`);
console.log(mapped);
let y = 9999999999999999n;
console.log(y, typeof y);

const validation = validateId("BOf2O");
console.log(validation);