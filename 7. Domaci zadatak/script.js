let body = document.body;
let tbl  = document.createElement('table')
let row = parseInt(prompt("Please enter how many rows do you want in your table: "));
let col = parseInt(prompt("Please enter how many columns do you want in your table: " ));
function tableCreate(row, col){
    
    tbl.style.width  = '200px';
    tbl.style.border = '1px solid black';

    for(let i = 0; i < row; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < col; j++){
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(`${i},${j}` ));
                td.style.border = '1px solid black';
            }     
    }
    
}
body.appendChild(tbl);
tableCreate(row, col);