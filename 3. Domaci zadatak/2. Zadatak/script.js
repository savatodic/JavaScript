let months = prompt("Enter the month: ").toLowerCase();
function daysMonths(months){

    
switch(months){
    case "january" :
        alert("This month has 31 day");
        break;
    case "february" :
        alert("This month has 28 day");
        break;
    case "march" :
        alert("This month has 31 day");
        break;
    case "april" :
        alert("This month has 30 day");
        break;
    case "may" :
        alert("This month has 31 day");
        break;
    case "jun" :
        alert("This month has 30 day");
        break;
    case "july" :
        alert("This month has 31 day");
        break;
    case "august" :
        alert("This month has 31 day");
        break;
    case "september" :
        alert("This month has 30 day");
        break;
    case "october" :
        alert("This month has 31 day");
        break;
    case "november" :
        alert("This month has 30 day");
        break;
    case "december" :
        alert("This month has 31 day");
        break;    
    default :
        alert("You made mistake");
        break;
}
}

daysMonths(months);
