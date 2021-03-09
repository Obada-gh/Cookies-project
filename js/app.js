'use strict';

let myobj = {
 ary : ["Seattle","Tokyo","Dubai","Paris","Lima"],
 min : [23,3,11,20,2],
 max : [65,24,38,38,16],
 avg : [6.3,1.2,3.7,2.3,4.6],
 main : document.getElementById('showList'),
}

function myFunction()
{
  for(let i = 0 ; i < myobj.ary.length; i++ ){
    let result = {
      getRandcCookPerHour: function(){
        let rand = Math.floor(Math.random() * (myobj.max[i] - myobj.min[i] + 1) + myobj.min[i]);
        let avg = myobj.avg[i];
        let cookiesData = Math.floor(avg * rand);
        return cookiesData;
      },
      storInArray: function(){
        let array = [];
        for (let i = 0 ; i < 14; i++ ){
          array[i] = this.getRandcCookPerHour();
        }
        array[14] = 0 ;
        for (let i = 0 ; i < 14; i++ ){
          debugger;
          array[14] = array[14] + array[i];
        }
        debugger;
        return array;
      }
    };
    let location = document.createElement('h3');
location.innerText = myobj.ary[i]+' :';
let unorderedList = document.createElement('ul');
let hours = [];
for (let i=0; i<14;i++){
  hours[i]=i+6+':00  : ';
}

let seatt = [];
for (let i=0; i<15;i++){
  seatt[i]=document.createElement('li');
}
let x = result.storInArray();
for (let i = 0; i<15; i++){
  seatt[i].innerText= hours[i]+x[i]+' cookies';
}
for (let i = 0; i<14; i++){
  unorderedList.appendChild(seatt[i]);
}
seatt[14].innerText= 'Total : '+x[14]+' cookies';
unorderedList.appendChild(seatt[14]);
myobj.main.appendChild(location);

myobj.main.appendChild(unorderedList);
  }

}






