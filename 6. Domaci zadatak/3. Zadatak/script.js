var numbers = [10, 3, 5, 7];
var orderList = document.getElementById("orderList");
var paragraph = document.getElementById("paragraph");
let suma = 0;

numbers.forEach(function showNumbers(number){
    var listNumber = document.createElement("li");
    listNumber.textContent = number;
    orderList.appendChild(listNumber);
})

for(let i = 0; i < numbers.length; i++ ){
   suma += numbers[i];
}
paragraph.innerHTML = "This is sum of all numbers: " + suma;

showNumbers();
