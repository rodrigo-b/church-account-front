import React from 'react';

function LoginGet(){

    
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin','*')
    headers.append('Access-Control-Allow-Methods','POST, GET, OPTIONS')

    const apiUrl = "http://localhost:8080/v1/account/all";

   fetch(apiUrl, {
       // mode: 'no-cors',
        method: 'GET',
        headers:headers
    }).then( response => {
        return response.json()
    }).then(json => {
        console.log(json);
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    
    
    console.log("foooi");
        
    return (
        <>
            text;
        </>
    )
}

export default LoginGet;