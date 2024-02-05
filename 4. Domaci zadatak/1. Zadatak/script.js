function sayHello(){
    let arguments = [];
    arguments.push(prompt("Please enter your name: "));
    arguments.push(prompt("Please enter your mood: "));
    arguments.push(prompt("Please enter your acitiviy: "))
    alert(`Your name is ${arguments[0]}, your mood is ${arguments[1]} and your activity is ${arguments[2]}`);
}
sayHello();
