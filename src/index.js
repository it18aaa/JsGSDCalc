import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
    const element = document.createElement("div");

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.classList.add("hello");
    element.innerHTML += " Noodles!";

    // add the image to our existing div
    const myIcon = new Image(200, 200);
    myIcon.src = Icon;

    element.appendChild(myIcon);

    setTimeout(()=> {
        element.innerHTML += " Humperdiddly!";
    }, 5000);

    let i =0 
    // setInterval(()=> {
    //     i++;
    //     element.innerHTML += ` ${i}`;
    // }, 1000);

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());
