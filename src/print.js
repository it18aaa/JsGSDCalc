function printMe() {


    const lastChild = document.body.lastChild;

    

    //const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = `${Date.now()}`;
    //div.appendChild(p);
    //document.body.appendChild(div); 

    lastChild.appendChild(p);

    

}

export { printMe };