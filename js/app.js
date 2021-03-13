'use strict'
let info = []
let hours = ['6am ','7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
let table = document.getElementById('showit')

function locations(minCuPh, maxCuPh, avgCoPCu) {
  this.minCuPh=minCuPh;
  this.maxCuPh=maxCuPh;
  this.avgCoPCu=avgCoPCu;

  this.cuPh = function() {

    let min = Math.floor(this.minCuPh);
    let max = Math.floor(this.maxCuPh);
    return Math.floor(Math.random() * (max - min + 1 ) + min);

  },
  this.cookiesSold = function(){
    return Math.round(this.cuPh() * this.avgCoPCu,0)
  },
  this.show = function(){
    let locData = [];
    let totalCoPday = 0;

    for (var i=1; i< hours.length;i++){

      let cookies = this.cookiesSold();
      locData[i]= cookies;
      totalCoPday = totalCoPday + cookies;
    }
    this.totalCookiesSoldInADay = totalCoPday;
    locData[i] = this.totalCookiesSoldInADay;
    return locData;
  };
}

function createHeader() {
  var tempData = [];
  for(var i=0; i<hours.length; i++) {
    tempData = tempData + '<th>' + hours[i] + '</th>';
  }
  var newRow = document.createElement('tr');
  newRow.innerHTML = '<th>' + tempData + '</th>';
  table.appendChild(newRow);
}

function createRow(array) {
  var tempData =[];
  for(var i=0; i<array.length; i++) {
    tempData = tempData + '<td>' + array[i] + '</td>';
  }
  info.push(tempData);
}

function render(tableRow) {
  for(var j=0; j<tableRow.length;j++){
    var newRow = document.createElement('tr');
    newRow.innerHTML = tableRow[j];
    table.appendChild(newRow);
  }

}

function createFooter() {
  var tempData = [];
  var cookies = 0;
  for(var i=1; i<hours.length+1; i++) {
    cookies = 0;
    let tableRows = table.getElementsByTagName('tr');
    for(var j = 1; j < tableRows.length; j++) {
      let tableRow = tableRows[j];
      let tableEntries = tableRow.getElementsByTagName('td');
      cookies += parseInt(tableEntries[i].textContent);
    }
    tempData = tempData + '<td>' + cookies + '</td>';
  }
  var newRow = document.createElement('tfoot');
  newRow.innerHTML = '<td>' + 'Totals' + tempData + '</td>';
  table.appendChild(newRow);
}

createHeader();

let Seattle = new locations(23,65,6.3);
let SeattleCookieDetails = Seattle.show();
SeattleCookieDetails[0]='Seattle';
info = [];
createRow(SeattleCookieDetails);
render(info);




let Tokyo = new locations(3,24,1.2);
let TokyoCookieDetails = Tokyo.show();
TokyoCookieDetails[0]='Tokyo';
info = [];
createRow(TokyoCookieDetails);
render(info);



let Dubai = new locations(11,38,3.7);
let DubaiCookieDetails = Dubai.show();
DubaiCookieDetails[0]='Dubai';
info = [];
createRow(DubaiCookieDetails);
render(info);



let Paris = new locations(20,38,2.3);
let ParisCookieDetails = Paris.show();
ParisCookieDetails[0]='Paris';
info = [];
createRow(ParisCookieDetails);
render(info);



let Lima = new locations(2,16,4.6);
let LimaCookieDetails = Lima.show();
LimaCookieDetails[0]='Tokyo';
info = [];
createRow(LimaCookieDetails);
render(info);

createFooter();


let locationForm = document.getElementById('location-form');
locationForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let locationInput = event.target.locationInput.value;
  let minInput = event.target.minInput.value;
  let maxInput = event.target.maxInput.value;
  let avgCookiesInput = event.target.avgCookiesInput.value;

  //delete total row
  let totalRow = document.getElementsByTagName('tfoot');
  totalRow[0].parentNode.removeChild(totalRow[0]);

  //create new store
  let Lima = new locations(minInput,maxInput,avgCookiesInput);
  let LimaCookieDetails = Lima.show();
  LimaCookieDetails[0]=locationInput;
  info = [];
  createRow(LimaCookieDetails);
  render(info);

  //recreate footer with the new store that's been added
  createFooter();

  event.target.locationInput.value = '';
  event.target.minInput.value = '';
  event.target.maxInput.value = '';
  event.target.avgCookiesInput.value = '';
});

