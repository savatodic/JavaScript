
function numbersSum(){
    let numbers = [];
    let sum = 0;
    for( let i = 0; i < 5; i ++){
        numbers.push(parseInt(prompt("Please enter 5 random numbers"))); 
    }
    for( let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    alert(sum);
}
numbersSum();
