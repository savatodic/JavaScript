let result = document.getElementById("result");

function weightInChickens(){
    let inputWeight = parseInt(prompt("Please enter your weigh in kiograms"));
    let chickenWeight = inputWeight / 0.5;
    result.innerHTML = "Your weigh in chicken is: " + chickenWeight + "chickens.";
}
weightInChickens();
