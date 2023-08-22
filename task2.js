let XMLHttpRequest = require('xhr2');

let a = new XMLHttpRequest();

a.open ('GET', 'https://restcountries.com/v3.1/all')

a.onload = function (){
    let x = JSON.parse(a.responseText);
 
   // let userNames =[];

    for (let i of x){

       console.log (i.flag);
    }
}
a.send();
