'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

let Location = [];
function Shop(shopName, min, max, avg) {
    this.shopName = shopName;
    this.minc = min;
    this.maxc = max;
    this.avgcook = avg;
    this.randC = [];
    this.Avgpehour = [];
    this.Amount = 0;
    Location.push(this);
}
Shop.prototype.calcRcust = function () {
    for (let i = 0; i < hours.length; i++) {
        let min = Math.ceil(this.minc);
        let max = Math.floor(this.maxc);
        let randCust = Math.floor(Math.random() * (max - min + 1) + min);
        this.randC.push(randCust);
    }
}
Shop.prototype.calAvgCookiesPerH = function () {
    for (let i = 0; i < hours.length; i++) {
        this.Avgpehour[i] = Math.ceil(this.randC[i] * this.avgcook);
        this.Amount = this.Amount + this.Avgpehour[i];
    }
}
Shop.prototype.render = function () {
    let trEl = document.createElement('tr');
    let tdEl = document.createElement('td');
    tdEl.textContent = this.shopName;
    trEl.appendChild(tdEl);
    for (let i = 0; i < hours.length; i++) {
        let tdEl = document.createElement('td');
        tdEl.textContent = this.Avgpehour[i];
        trEl.appendChild(tdEl);
    }
    let tdTotalEl = document.createElement('td');
    tdTotalEl.textContent = this.Amount;
    trEl.appendChild(tdTotalEl);
    tableEl.appendChild(trEl);

}

function createTableHeader() {
    let trEl = document.createElement('tr')
    let thShopNameEl = document.createElement('th')
    trEl.appendChild(thShopNameEl);
    thShopNameEl.textContent = 'shop name';
    for (let i = 0; i < hours.length; i++) {
        let thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }
    let thDailyTotalEl = document.createElement('th')
    trEl.appendChild(thDailyTotalEl);
    thDailyTotalEl.textContent = 'Daily Location Total';
    tableEl.appendChild(trEl);
}
function createFooter() {
    let tfootEl = document.createElement('tfoot');
    let tdEl = document.createElement('td');
    tdEl.textContent = 'Totals';
    tfootEl.appendChild(tdEl);
    tableEl.appendChild(tfootEl);
    let megaTotal = 0;
    
    for (let h = 0; h < hours.length; h++) {
        let tdEl = document.createElement('td');
        let sum = 0;
        
        for (let s = 0; s < Location.length; s++) {
            
            sum = sum + Location[s].Avgpehour[h];
        }
        megaTotal += sum;
        tdEl.textContent = sum;
        tfootEl.appendChild(tdEl);
    }
    let totalTdEl = document.createElement('td');
    totalTdEl.textContent = megaTotal;
    tfootEl.appendChild(totalTdEl);
}
let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);

createTableHeader();
for (let i = 0; i < Location.length; i++) {
    Location[i].calcRcust();
    Location[i].calAvgCookiesPerH();
    Location[i].render();
}
createFooter();


