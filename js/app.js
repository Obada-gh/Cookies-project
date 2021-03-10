'use strict';

let myobj = {
 ary : ["Seattle","Tokyo","Dubai","Paris","Lima"],
 min : [23,3,11,20,2],
 max : [65,24,38,38,16],
 avg : [6.3,1.2,3.7,2.3,4.6],
 main : document.getElementById('showList'),
}
let counter = 0;
const table = document.getElementById("showList");
function myFunction()
{
  for(let i = 0 ; i < myobj.ary.length; i++ ){
    let result = {
      getRandCookPerHour: function(){
        let rand = Math.floor(Math.random() * (myobj.max[i] - myobj.min[i] + 1) + myobj.min[i]);
        let avg = myobj.avg[i];
        let cookiesData = Math.floor(avg * rand);
        return cookiesData;
      },
      storInArray: function(){
        let array = [];
        for (let i = 0 ; i < 14; i++ ){
          array[i] = this.getRandCookPerHour();
        }
        array[14] = 0 ;
        for (let i = 0 ; i < 14; i++ ){
          array[14] = array[14] + array[i];
        }
        return array;
      }
    };
    let location = document.createElement('h3');
location.innerText = myobj.ary[i]+' :';

//let unorderedList = document.createElement('ul');
debugger;
let unorderedList = table.insertRow(i+1);
let name = unorderedList.insertCell(0);
  name.innerHTML = myobj.ary[i];
debugger;

let seatt = [];

var total = 0
let x = result.storInArray();
for (let i = 0; i<15; i++){
  seatt[i] = x[i]+' cookies';
  total = total +  x[i];
}
for (let i = 0; i<14; i++){
  
  
  let date = unorderedList.insertCell(i+1);
  date.innerHTML = seatt[i];
  
}
let count = unorderedList.insertCell(15);
count.innerHTML =total;

  }

}

function funloc() {
  myobj.ary.push(document.getElementById("loc").nodeValue);
  console.log(myobj.ary)

}


function funmax() {
  myobj.ary.push(document.getElementById("max").Value);
  console.log(myobj.max)
}


function funmin() {
  myobj.ary.push(document.getElementById("min").Value);
  console.log(myobj.min)
  
}

function funavg() {
  myobj.ary.push(document.getElementById("avg").Value);
  console.log(myobj.avg)

  
}







