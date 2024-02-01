let customerAccount = 500;
let customerRequest = parseInt(prompt("Please entere the amount that you want to withdraw from the account: "));
function withdrawMoney(customerAccount, customerRequest){
if(customerRequest <= customerAccount){
    customerAccount = customerAccount - customerRequest;
    alert(`You have got ${customerRequest}$ in cash`);
    alert(`New account balance is ${customerAccount}$`);
}
else{
    alert("You dont have enought money on your account");
}}
withdrawMoney(customerAccount, customerRequest);