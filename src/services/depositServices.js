export function createDeposit(values){

    const apiUrl = "http://localhost:8080/v1/deposit";

let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');


let nameValue = values.name;
let responsibleValue = values.responsible;
let amountValue = values.amount;
let creationDateValue = values.creationDate;
let paymentTypeValue = values.paymentType;

let json = JSON.stringify({ name: nameValue, 
                            responsible:responsibleValue, 
                            amount:amountValue, 
                            creationDate: creationDateValue,
                            paymentType: paymentTypeValue})

console.log(json);

fetch(apiUrl, {
     method: 'POST',
     headers:headers,
     body:json
 }).then( response => {
     return response.json()
 }).then(json => {
     console.log(json);
 }).catch(function(err) {
     console.log('Fetch Error :-S', err);
   });



}