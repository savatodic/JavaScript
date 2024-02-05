let firstNames = ["Nemanja", "Luka"];
let lastNames = ["Stanic", "Ostojic"];

function fullName(){
    for(let i = 0; i < firstNames.length; i++){
        let newName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
        console.log(newName);
    }

    

}

fullName();