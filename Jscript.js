window.addEventListener("DOMContentLoaded", function(){
    'use strict';

         //Timer

        let deadLine = "2019-10-11";  // Put your end date

        function getTimeRemaining(endTime){
            let t = Date.parse(endTime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/1000/60/60));

            return {
                "total" : t,
                "hours" : hours,
                "minutes" : minutes,
                "seconds" : seconds
            }
        }

        function setClock(id, endTime){
            let timer = document.getElementById(id),
                hours = timer.querySelector(".hours"),
                minutes = timer.querySelector(".minutes"),
                seconds = timer.querySelector(".seconds"),
                timeInterval = setInterval(updateClock, 1000);


            function updateClock(){
                let t = getTimeRemaining(endTime);
                if(t.hours<10){
                    hours.textContent = "0"+t.hours;
                } else{hours.textContent = t.hours;}
                if(t.minutes<10){
                    minutes.textContent = "0"+t.minutes;
                } else{minutes.textContent = t.minutes}
                if(t.seconds<10){
                    seconds.textContent = "0"+t.seconds;
                } else {seconds.textContent = t.seconds;}

                if(t.total <= 0){
                    clearInterval(timeInterval);
                    hours.textContent = "00";
                    minutes.textContent = "00";
                    seconds.textContent = "00";
                }
            }
        }

        setClock("timer", deadLine);
});
