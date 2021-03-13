'use strict'
let loc = ['Seattle','Tokyo','Dubai','Paris','Lima'];
let hour = ['6am ','7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];

let loc1 = {
  locName: 'Seattle',
  minHcu: 23,
  maxHcu: 65,
  avgCoPCu: 6.3,

  cPh: function() {
    let cookies = [];
    for (let i =0;i < hour.length;i++) {

      let numOfcu = Math.floor(Math.random()*(this.maxHcu - this.minHcu + 1));
      let numOfco = Math.floor(numOfcu * this.avgCoPCu);
      cookies.push(numOfco);
    }

  return cookies;
},

show: function (){ 
  let showEl = document.getElementById('showit');
  let showSe = document.createElement('section');
  let showHe = document.createElement('h3');
  showHe.textContent = 'Cookies at ' + this.locName;
  showSe.appendChild(showHe);

  let cookiesPh = this.cPh();

  for (let i=0;i<hour.length;i++) {

    let para = document.createElement('p');
    para.textContent = " "+ hour[i] + cookiesPh[i];
    showSe.appendChild(para);
  }

  showEl.appendChild(showSe);

}
};
loc1.show();

let loc2 = {
  locName: 'Tokyo',
  minHcu: 3,
  maxHcu: 24,
  avgCoPCu: 1.2,

  cPh: function() {
    let cookies = [];
    for (let i =0;i < hour.length;i++) {

      let numOfcu = Math.floor(Math.random()*(this.maxHcu - this.minHcu + 1));
      let numOfco = Math.floor(numOfcu * this.avgCoPCu);
      cookies.push(numOfco);
    }

  return cookies;
},

show: function (){ 
  let showEl = document.getElementById('showit');
  let showSe = document.createElement('section');
  let showHe = document.createElement('h3');
  showHe.textContent = 'Cookies at ' + this.locName;
  showSe.appendChild(showHe);

  let cookiesPh = this.cPh();

  for (let i=0;i<hour.length;i++) {

    let para = document.createElement('p');
    para.textContent = " "+ hour[i] + cookiesPh[i];
    showSe.appendChild(para);
  }

  showEl.appendChild(showSe);

}
};
loc2.show();

let loc3 = {
  locName: 'Dubai',
  minHcu: 11,
  maxHcu: 38,
  avgCoPCu: 3.7,

  cPh: function() {
    let cookies = [];
    for (let i =0;i < hour.length;i++) {

      let numOfcu = Math.floor(Math.random()*(this.maxHcu - this.minHcu + 1));
      let numOfco = Math.floor(numOfcu * this.avgCoPCu);
      cookies.push(numOfco);
    }

  return cookies;
},

show: function (){ 
  let showEl = document.getElementById('showit');
  let showSe = document.createElement('section');
  let showHe = document.createElement('h3');
  showHe.textContent = 'Cookies at ' + this.locName;
  showSe.appendChild(showHe);

  let cookiesPh = this.cPh();

  for (let i=0;i<hour.length;i++) {

    let para = document.createElement('p');
    para.textContent = " "+ hour[i] + cookiesPh[i];
    showSe.appendChild(para);
  }

  showEl.appendChild(showSe);

}
};
loc3.show();

let loc4 = {
  locName: 'paris',
  minHcu: 20,
  maxHcu: 38,
  avgCoPCu: 2.3,

  cPh: function() {
    let cookies = [];
    for (let i =0;i < hour.length;i++) {

      let numOfcu = Math.floor(Math.random()*(this.maxHcu - this.minHcu + 1));
      let numOfco = Math.floor(numOfcu * this.avgCoPCu);
      cookies.push(numOfco);
    }

  return cookies;
},

show: function (){ 
  let showEl = document.getElementById('showit');
  let showSe = document.createElement('section');
  let showHe = document.createElement('h3');
  showHe.textContent = 'Cookies at ' + this.locName;
  showSe.appendChild(showHe);

  let cookiesPh = this.cPh();

  for (let i=0;i<hour.length;i++) {

    let para = document.createElement('p');
    para.textContent = " "+ hour[i] + cookiesPh[i];
    showSe.appendChild(para);
  }

  showEl.appendChild(showSe);

}
};
loc4.show();

let loc5 = {
  locName: 'lima',
  minHcu: 2,
  maxHcu: 16,
  avgCoPCu: 4.6,

  cPh: function() {
    let cookies = [];
    for (let i =0;i < hour.length;i++) {

      let numOfcu = Math.floor(Math.random()*(this.maxHcu - this.minHcu + 1));
      let numOfco = Math.floor(numOfcu * this.avgCoPCu);
      cookies.push(numOfco);
    }

  return cookies;
},

show: function (){ 
  let showEl = document.getElementById('showit');
  let showSe = document.createElement('section');
  let showHe = document.createElement('h3');
  showHe.textContent = 'Cookies at ' + this.locName;
  showSe.appendChild(showHe);

  let cookiesPh = this.cPh();

  for (let i=0;i<hour.length;i++) {

    let para = document.createElement('p');
    para.textContent = " "+ hour[i] + cookiesPh[i];
    showSe.appendChild(para);
  }

  showEl.appendChild(showSe);

}
};
loc5.show();




