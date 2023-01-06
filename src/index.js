// @flow
"use strict";
import { printMe } from "./print.js";
import { validateId } from "./validator.js";

function component() {
    const element = document.createElement("div");  
    const btn = document.createElement("input");
    btn.setAttribute("type", "submit");
    btn.setAttribute("value", "Ok");
    btn.setAttribute("id", "button1");
    btn.onclick = printMe;
 
    element.innerHTML = "Welcome to the template";   
    
    element.appendChild(document.createElement("br"));
    element.appendChild(document.createElement("br"));
    element.appendChild(btn);
    element.appendChild(document.createElement("br"));
    element.appendChild(document.createElement("br"));
    return element;
}

document.body.appendChild(component());

const validation = validateId("BOf2O");
console.log(validation);


