"use strict";

import './css/style.scss';

import { printMe } from "./print.js";
import { validateId } from "./validator.js";
//import { Tooltip, Toast, Popover } from 'bootstrap';

function component() {
    const element = document.createElement("div");  
    element.setAttribute("class", "container");
    
    const btn = document.createElement("input");
    btn.setAttribute("type", "submit");
    btn.setAttribute("value", "Click here!");
    btn.setAttribute("id", "button1");
    btn.setAttribute("class","btn-sm");
    btn.onclick = printMe;

    const btn2 = document.createElement("input");
    btn2.setAttribute("type","button");
    btn2.setAttribute("value", "Noodles");
    btn2.setAttribute("id", "button2");
    btn2.setAttribute("class", "btn-sm");
    btn2.onclick = ev => {
            ev.preventDefault();
            console.log("Bongo bingo!");
            console.log(ev);
        };

    element.innerHTML = "<h1 class='display-1'>Welcome to the template</h1>";   
    
    //element.appendChild(document.createElement("br"));
    //element.appendChild(document.createElement("br"));
    element.appendChild(btn);
    element.appendChild(btn2);
    //element.appendChild(document.createElement("br"));
    //element.appendChild(document.createElement("br"));
    
    return element;
}

document.body.appendChild(component());

const validation = validateId("BOf2O");
console.log(validation);


