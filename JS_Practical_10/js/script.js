const eyeColor = 'Green / Зелений';
console.log(eyeColor);



// time from html

var $hours = document.querySelector('#hours');
var $minutes = document.querySelector('#minutes')
var $seconds = document.querySelector('#seconds');
var $miliseconds = document.querySelector('#miliseconds');

//
// buttons 
const $startButton = document.querySelector('#startButton');
const $pauseButton = document.querySelector('#pauseButton');
const $stopButton = document.querySelector('#stopButton');
const $intervalButton = document.querySelector('#intervalButton');
const $clearField = document.querySelector('#clearIntervalField');

//

// place to show results in
var jsResults = document.querySelector('.ml-js-results');
//

// variable for stop button
var $isProcessOn = false
//

//variables for time
let hours = 00,
   minutes = 00,
   seconds = 00,
   miliseconds = 00,
   interval;
//

//main processes and functions below

$startButton.addEventListener('click', function (e) {
   clearInterval(interval);
   $isProcessOn = true
   interval = setInterval(startTheProcess, 10);
});

$pauseButton.addEventListener('click', function (e) {
   clearInterval(interval)
});

$stopButton.addEventListener('click', function (e) {
   fullStop()
   $isProcessOn = false
});
$intervalButton.addEventListener('click', function (e) {

   if ($isProcessOn === true) {
      makeAnInterval()
   }
});

$clearField.addEventListener('click', function (e) {
   clearTheField()
});





function startTheProcess() {
   miliseconds++
   if (miliseconds <= 9) {
      $miliseconds.textContent = '0' + miliseconds
   } else {
      $miliseconds.textContent = miliseconds
   }
   if (miliseconds > 99) {
      seconds++
      miliseconds = 0
      $seconds.textContent = seconds;
   }

   // seconds
   if (seconds <= 9) {
      $seconds.textContent = '0' + seconds
   } else {
      seconds.textContent = seconds
   }
   if (seconds > 59) {
      minutes++
      seconds = 0
      $minutes.textContent = minutes
   }

   //minutes
   if (minutes <= 9) {
      $minutes.textContent = '0' + minutes
   } else {
      $minutes.textContent = minutes
   }
   if (minutes > 59) {
      hours++
      minutes = 0
      $hours.textContent = hours
   }

   //hours

   if (hours <= 9) {
      $hours.textContent = '0' + hours
   } else {
      $hours.textContent = hours
   }

}

function fullStop() {
   clearInterval(interval);
   hours = 0;
   minutes = 0;
   seconds = 0;
   miliseconds = 0;
   $hours.textContent = '00'
   $minutes.textContent = '00'
   $seconds.textContent = '00'
   $miliseconds.textContent = '00'
}

function makeAnInterval() {
   var parag = document.createElement('p');
   parag.textContent = 'Hours: ' + $hours.textContent + ', ' + 'Minutes: ' + $minutes.textContent + ', ' + 'Seconds: ' + $seconds.textContent + ', ' + 'Miliseconds: ' + $miliseconds.textContent
   jsResults.insertAdjacentElement('beforeend', parag);
}

function clearTheField() {
   jsResults.innerHTML = ''
}







