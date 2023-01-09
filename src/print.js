function printMe() {
    const lastChild = document.body.lastChild;
    const p = document.createElement("p");
    p.innerHTML = `${Date.now()}`;

    lastChild.appendChild(p);
  

}

export { printMe };