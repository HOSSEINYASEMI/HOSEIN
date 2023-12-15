// function butn() {
//   let weight = document.getElementById("weight").value;
//   let height = document.getElementById("height").value;
//   let bmi = (weight / (height * height)*703) ;

//   document.getElementById("p1").innerHTML = "نتیجه توده بدنی:";
//   document.getElementById("p2").innerHTML = bmi.toFixed(1);
//   if (bmi <= 1.8) {
//    alert= document.getElementById('p3').innerHTML = "شما لاغری"
//   } else if (bmi >= 1.8 && bmi <= 2.0) {
//     document.getElementById('p3').innerHTML = "وزن نرمال"
//   } else if (bmi >= 2.5 && bmi <= 3.0) {
//     document.getElementById('p3').innerHTML = "اضافه وزن"
//   } else {
//     document.getElementById('p3').innerHTML = "چاقی درجه 1"
//   }
// }
/////////////////////////////////////معکوس کردن عدد//////////////////////
// lis=[1,2,3,4,5];

// let is=lis.reverse();
// console.log(lis);

// console.log(is);

/// macos string////////////////////////////////////////////////////////////////
// function button1() {
//   let input = document.getElementById("input").value;

//   let split1 = input.split("");
//   let reverse1 = split1.reverse("");
//   let join1 = reverse1.join("");

//   document.getElementById("p").innerHTML = join1;
// }
////////////////////////////////////end////////////////////////////////////////
// /////////////////////////////شروع بازی
// function but1() {
//   let rendom = ["قیچی", "کاغذ", "سنگ"];
//   let mat = Math.floor(Math.random() * rendom.length);
//   document.getElementById("p").innerHTML = rendom[mat];
//   if (rendom[1] == rendom[mat]) {
//     document.getElementById("p1").innerHTML = "مساوی";
//   } else if (rendom[0] == rendom[mat] && rendom[0] <= rendom[mat]) {
//     document.getElementById("p1").innerHTML = "بردکامپیوتر";
//   } else if (rendom[2] == rendom[mat] && rendom[2] <= rendom[mat]) {
//     document.getElementById("p1").innerHTML = "بردشما";
//   }
// }
// function but2() {
//   let rendom = ["قیچی", "کاغذ", "سنگ"];
//   let mat = Math.floor(Math.random() * rendom.length);
//   document.getElementById("p").innerHTML = rendom[mat];
//   if (rendom[0] == rendom[mat]) {
//     document.getElementById("p1").innerHTML = "مساوی";
//   } else if (rendom[1] == rendom[mat] && rendom[0] <= rendom[mat]) {
//     document.getElementById("p1").innerHTML = "بردشما";
//   } else if (rendom[2] == rendom[mat] && rendom[2] <= rendom[mat]) {
//     document.getElementById("p1").innerHTML = "برد کامپیوتر";
//   }
// }
// function but3() {
//   let rendom = ["قیچی", "کاغذ", "سنگ"];
//   let mat = Math.floor(Math.random() * rendom.length);
//   document.getElementById("p").innerHTML = rendom[mat];
//   if (rendom[2] == rendom[mat]) {
//     document.getElementById("p1").innerHTML = "مساوی";
//   } else if (rendom[1] == rendom[mat] && rendom[1] <= rendom[mat]) {
//     document.getElementById("p1").innerHTML = "برد کامپیوتر";
//   } else if (rendom[0] == rendom[mat] && rendom[2] <= rendom[mat]) {
//     document.getElementById("p1").innerHTML = "بردشما";
//   }
// }
// //////////////////////////////////////////////////////////پایان

///////////////////////start cod time/////////////////////////////////

// let [millseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// let timeRef = document.getElementById("timer");

// let int = null;
// function buttonstart1() {
//   if (int !== null) {
//     clearInterval(int);
//   }
//   int = setInterval(displayTimer, 10);
// }
// function buttonstap2() {
//   clearInterval(int);
// }
// function buttonreset3() {
//   clearInterval(int);
//   [millseconds, seconds, minutes, hours] = [0, 0, 0, 0];
//   timeRef.innerHTML = "00 : 00 : 00 : 000 ";
// }

// function displayTimer() {
//   millseconds += 10;
//   if (millseconds == 1000) {
//     millseconds = 0;
//     seconds++;
//     if (seconds == 60) {
//       seconds = 0;
//       minutes++;

//       if (minutes == 60) {
//         minutes = 0;
//         hours++;
//       }
//     }
//   }
//   let h = hours < 10 ? "0" + hours : hours;
//   let m = minutes < 10 ? "0" + minutes : minutes;
//   let s = seconds < 10 ? "0" + seconds : seconds;
//   let ms =
//     millseconds < 10
//       ? "00" + millseconds
//       : millseconds < 100
//       ? "0" + millseconds
//       : millseconds;

//   timeRef.innerHTML = `${h} :  ${m} : ${s} : ${ms}`;
// }
/////////////////////////////////end,//////////////////////////////////
////////////////////////////////start timer makos//////////////////////
// let startingMinutes = 10;
// let time = startingMinutes * 60;
// let timer = document.getElementById("timer");
// let interval = setInterval(updait, 1000);

// function updait() {
//   let minutes = Math.floor(time / 60);
//   let seconds = time % 60;
//   if (seconds == 0) {
//     if (minutes == 0) {
//       clearInterval(interval);
//     }
//   }
//   time--;

//   timer.innerHTML = `${minutes} : ${seconds}`;
// }
////////////////////////////////////////end/////////////////////////////////

/////////////////////////////////////start time date///////////////////////
// let timer = document.getElementById("timer");
// setInterval(timers, 1000);
// function timers() {
//   let now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   document.getElementById(
//     "timer"
//   ).innerHTML = `${hours} : ${minutes} : ${seconds}`;
// }
// // ///////////////////میلادی
// let date1 = moment();
// date1= date1.format('YYYY/M/D')
// document.getElementById("p").innerHTML=date1

// /////////////////////شمسی
// let date2 = moment();
// date2 = date2.format('jYYYY/jMM/jDD')
// document.getElementById("p1").innerHTML=date2


/////////////////////////////////////end///////////////////////////////////
