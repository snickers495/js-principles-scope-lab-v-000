// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
var leastFavoriteCustomer = 'sam';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer(){
  bestCustomer = "not bob";
  return bestCustomer;
}
function overwriteBestCustomer(){
  bestCustomer = "maybe bob";
}
function changeLeastFavoriteCustomer(){
  new TypeError;
}
