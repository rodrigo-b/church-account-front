export const getDepartmentCollection = () => ([
    {id: '1', title:'Development'},
    {id: '2', title:'Marketing'},
    {id: '3', title:'Accounting'},
    {id: '4', title:'HR'},

])


export function createExpense(values){

        const apiUrl = "http://localhost:8080/v1/expenses";

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    let nameValue = values.name;
    let responsibleValue = values.responsible;
    let amountValue = 10;
    let creationDateValue = new Date();

    let json = JSON.stringify({ name: nameValue, 
                                responsible:responsibleValue, 
                                amount:amountValue, 
                                creationDate: creationDateValue })

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