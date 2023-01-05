export default function printMe() {
    console.log('I get called from print.js!');
    
    let boing = [1,2,3,4];

    var [a,, b] = boing;

    console.log(`a is ${a}, b is ${b}`);
}