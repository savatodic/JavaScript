let arrayNum = [2, 3, 5, 7, 11];

function sum(){
    var min = Math.min.apply(Math, arrayNum);
    var max = Math.max.apply(Math, arrayNum);
    let sum = min + max;
    console.log(sum);
}
sum();






