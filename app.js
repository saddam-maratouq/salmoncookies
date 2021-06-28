"use strict" ;
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



 let syatel = {
 shopname: 'syatel',
 minc : 23,

 maxc : 65,

 avg : 6.3,

 rcust: [ ],

 avgcookieph: [],

 total:0,

rcustphour: function(minc,maxc){

    for(let i=0; i<hour.length ; i++){
        let min = Math.ceil(this.minc);
        let max = Math.floor(this.maxc);
         let rcust= Math.floor(Math.random() * (max - min + 1) + min);

         this.rcust.push(rcust)
   }
},

     calavgcookie: function() {
    for(let i=0; i<hour.length ; i++){
    this.avgcookieph[i]=Math.floor(this.rcust[i]* this.avg);
    this.total+= this.avgcookieph[i];
    }
}
 }

// console.log(syatel);
//

// fisrst step end ////////////////////////////////////////////////

 render: function () {
     let divcontanier = document.getElementById('container');
     let h2El = document.createElement('h2')
     divcontainer.appendChild(h2El);
     h2El.textContent = this.shopname

let ulE1 = document.createElement('ul');

divcontainer.appendChild(ulEl);
for(let i=o; i<hour.length;i++){
    let liEl = document.createElement('li')
liEl.textContent = hours[i] +  '' +this.avgcookieph[i] + 'cookies'
     ulE1.appendChild(liEl);

}}

let totalE1 = document.createElement('li')

  totalE1.textContent= 'total  ' +this.total + 'cookies' ;

ulE1.appendChild(totalE1);

syatel.rcustphour();
syatel.calavgcookie();
syatel.render();

    



    let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



    let Tokyo = {
    shopname: 'Tokyo',
    minc : 3,
   
    maxc : 24,
   
    avg : 1.2,
   
    rcust: [ ],
   
    avgcookieph: [],
   
    total:0,
   
   rcustphour: function(minc,maxc){
   
       for(let i=0; i<hour.length ; i++){
           let min = Math.ceil(this.minc);
           let max = Math.floor(this.maxc);
            let rcust= Math.floor(Math.random() * (max - min + 1) + min);
   
            this.rcust.push(rcust)
      }
   },
   
        calavgcookie: function() {
       for(let i=0; i<hour.length ; i++){
       this.avgcookieph[i]=Math.floor(this.rcust[i]* this.avg);
       this.total+= this.avgcookieph[i];
       }
   }
    }
   
   
   
   // fisrst step end ////////////////////////////////////////////////
   
    render: function () {
        let divcontanier = document.getElementById('container');
        let h2El = document.createElement('h2')
        divcontainer.appendChild(h2El);
        h2El.textContent = this.shopname
   
   let ulE1 = document.createElement('ul');
   
   divcontainer.appendChild(ulEl);
   for(let i=o; i<hour.length;i++){
       let liEl = document.createElement('li')
   liEl.textContent = hours[i] +  '' +this.avgcookieph[i] + 'cookies'
        ulE1.appendChild(liEl);
   
   }}
   
   let totalE1 = document.createElement('li')
   
     totalE1.textContent= 'total  ' +this.total + 'cookies' ;
   
   ulE1.appendChild(totalE1);
   
   Tokyo.rcustphour();
   Tokyo.calavgcookie();
   Tokyo.render();
   
       ///////////////////////////////////////////


       let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



       let Dubai = {
       shopname: 'Dubai',
       minc : 11,
      
       maxc : 38,
      
       avg : 3.7,
      
       rcust: [ ],
      
       avgcookieph: [],
      
       total:0,
      
      rcustphour: function(minc,maxc){
      
          for(let i=0; i<hour.length ; i++){
              let min = Math.ceil(this.minc);
              let max = Math.floor(this.maxc);
               let rcust= Math.floor(Math.random() * (max - min + 1) + min);
      
               this.rcust.push(rcust)
         }
      },
      
           calavgcookie: function() {
          for(let i=0; i<hour.length ; i++){
          this.avgcookieph[i]=Math.floor(this.rcust[i]* this.avg);
          this.total+= this.avgcookieph[i];
          }
      }
       }
      
      
      
      
      // fisrst step end ////////////////////////////////////////////////
      
       render: function () {
           let divcontanier = document.getElementById('container');
           let h2El = document.createElement('h2')
           divcontainer.appendChild(h2El);
           h2El.textContent = this.shopname
      
      let ulE1 = document.createElement('ul');
      
      divcontainer.appendChild(ulEl);
      for(let i=o; i<hour.length;i++){
          let liEl = document.createElement('li')
      liEl.textContent = hours[i] +  '' +this.avgcookieph[i] + 'cookies'
           ulE1.appendChild(liEl);
      
      }}
      
      let totalE1 = document.createElement('li')
      
        totalE1.textContent= 'total  ' +this.total + 'cookies' ;
      
      ulE1.appendChild(totalE1);
      
      Dubai.rcustphour();
      Dubai.calavgcookie();
      Dubai.render();


      /////////////////////////////////////////////




      
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



 let Paris = {
 shopname: 'Paris',
 minc : 20,

 maxc : 38,

 avg : 2.3,

 rcust: [ ],

 avgcookieph: [],

 total:0,

rcustphour: function(minc,maxc){

    for(let i=0; i<hour.length ; i++){
        let min = Math.ceil(this.minc);
        let max = Math.floor(this.maxc);
         let rcust= Math.floor(Math.random() * (max - min + 1) + min);
   
         this.rcust.push(rcust)
   }
},
   

     calavgcookie: function() {
    for(let i=0; i<hour.length ; i++){
    this.avgcookieph[i]=Math.floor(this.rcust[i]* this.avg);
    this.total+= this.avgcookieph[i];
    }   
}
 }


 

// fisrst step end ////////////////////////////////////////////////


 render: function () {
     let divcontanier = document.getElementById('container');
     let h2El = document.createElement('h2')
     divcontainer.appendChild(h2El);
     h2El.textContent = this.shopname
     
    
let ulE1 = document.createElement('ul');

divcontainer.appendChild(ulEl);
for(let i=o; i<hour.length;i++){
    let liEl = document.createElement('li')
liEl.textContent = hours[i] +  '' +this.avgcookieph[i] + 'cookies'
     ulE1.appendChild(liEl);

}}

let totalE1 = document.createElement('li')

  totalE1.textContent= 'total  ' +this.total + 'cookies' ;

ulE1.appendChild(totalE1);


      
            Paris.rcustphour();
            Paris.calavgcookie();
            Paris.render();



/////////////////////////////////////////////////////////
    
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

alert('hi');

 let Lima = {
 shopname: 'lima',
 minc : 23,

 maxc : 65,

 avg : 6.3,

 rcust: [ ],

 avgcookieph: [],

 total:0,

rcustphour: function(minc,maxc){

    for(let i=0; i<hour.length ; i++){
        let min = Math.ceil(this.minc);
        let max = Math.floor(this.maxc);
         let rcust= Math.floor(Math.random() * (max - min + 1) + min);
   
         this.rcust.push(rcust)
   }
},
   

     calavgcookie: function() {
    for(let i=0; i<hour.length ; i++){
    this.avgcookieph[i]=Math.floor(this.rcust[i]* this.avg);
    this.total+= this.avgcookieph[i];
    }   
}
 }


 

// fisrst step end ////////////////////////////////////////////////


 render: function () {
     let divcontanier = document.getElementById('container');
     let h2El = document.createElement('h2')
     divcontainer.appendChild(h2El);
     h2El.textContent = this.shopname
     
    
let ulE1 = document.createElement('ul');

divcontainer.appendChild(ulEl);
for(let i=o; i<hour.length;i++){
    let liEl = document.createElement('li')
liEl.textContent = hours[i] +  '' +this.avgcookieph[i] + 'cookies'
     ulE1.appendChild(liEl);

}}

let totalE1 = document.createElement('li')

  totalE1.textContent= 'total  ' +this.total + 'cookies' ;

ulE1.appendChild(totalE1);

Lima.rcustphour();
Lima.calavgcookie();
Lima.render();



////////////////////////////////////////////////////////////////









































































































// let  Location = [];
// function Location(shopname,hour, minc, maxc, avg, avgcookieph) {
//     this.hour= hour;
//     this.shopname = shopname;
//   this.minc = minc;
//   this.maxc = maxc;
//   this.avgcookieph = avgcookieph;
//   this.avg = avg;
//   this.total = 0; 
//   Location.push(this)
// }

// Location.prototype. rcust =function(){

//     let min = Math.ceil(this.minc);
//         let max = Math.floor(this.maxc);
//          let rcust= Math.floor(Math.random() * (max - min + 1) + min);
   
// }

// Location.prototype.calavgcookie =function(){

//     this.avgcookieph[i]=Math.floor(this.rcust[i]* this.avg);
    
// }

// Location.prototype.render=function(){

//     let divcontanier = document.getElementById('container');
//      let h2El = document.createElement('h2')
//      divcontainer.appendChild(h2El);
//      h2El.textContent = this.shopname
     
    
// let ulE1 = document.createElement('ul');

// divcontainer.appendChild(ulEl);
// for(let i=o; i<hour.length;i++){
//     let liEl = document.createElement('li')
// liEl.textContent = hours[i] +  '' +this.avgcookieph[i] + 'cookies'
//      ulE1.appendChild(liEl);

// }}

// let totalE1 = document.createElement('li')

//   totalE1.textContent= 'total  ' +this.total + 'cookies' ;

// ulE1.appendChild(totalE1);
 

// let syatel = new Location(syatel,23,65,6.3,avgcookieph[''],hour[''])

// syatel.rcustphour();
// syatel.calavgcookie();
// syatel.render();



// let Tokyo = new Location(Tokyo,3,24,1.2,avgcookieph[''],hour[''])

// Tokyo.rcustphour();
// Tokyo.calavgcookie();
// Tokyo.render();


// let Dubai = new Location(Dubai,11,38,3.7,avgcookieph[''],hour[''])

// Dubai.rcustphour();
// Dubai.calavgcookie();
// Dubai.render();

// let Paris = new Location(Paris,20,38,2.3,avgcookieph[''],hour[''])

// Paris.rcustphour();
// Paris.calavgcookie();
// Paris.render();


// let Lima = new Location(Lima,2,16,4.6,avgcookieph[''],hour[''])

// Lima.rcustphour();
// Lima.calavgcookie();
// Lima.render();