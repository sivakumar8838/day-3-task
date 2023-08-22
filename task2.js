let XMLHttpRequest = require('xhr2');

let a = new XMLHttpRequest();

a.open ('GET', 'https://restcountries.com/v3.1/all')

a.onload = function (){
    let results = JSON.parse(a.responseText);
 
   // let userNames =[];

    for (let result of results){
       // userNames.push(user['name']);

       console.log (result.flag);
    }
     
     
    //console.log(userNames);
}
a.send();