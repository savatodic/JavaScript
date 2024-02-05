let array = [1, 3, 4, 5, 7, 8, 22, 44, 7];
let type  = prompt("Would you like to find even or odd numbers: ");
type = type.toLowerCase();

function findNum(){
if(type === "even"){
    for(i = 0; i < array.length; i++){
        let devider = array[i] % 2;
        if(devider === 0){
            console.log(array[i]);
        }
    }
}
else if ( type === "odd"){
    for(i = 0; i < array.length; i++){
        let devider = array[i] % 2;
        if(devider != 0){
            console.log(array[i]);
        }
    }
}
else{
    console.log("You made type mistake!");
}
}
findNum();

