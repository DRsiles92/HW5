var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentDate);
var hour = moment().hour();//gives me the hour
var moment = moment();
console.log(moment);
console.log(hour);

$("#currentDay").text(currentDate); // sets current time

$(document).ready(function () {
    var rows = 9;
    var columns = 3;
    var $row = $("<div />", {
        class: 'row'
    });
    var $hour = $("<div />", {
        class: 'col hour'
    });
    var $event = $("<textarea />", { class: 'col-6 description' }
    );

    var $save = $("<button />", {
        class: 'col time-block fas fa-save fa-3x'
    });
    var workHours = ["9AM", "10Am", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var hourOfDay = [9, 10, 11, 12, 1, 2, 3, 4, 5];

    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) {

        $row.append($hour).append($event).append($save);

    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i <= rows; i++) {

        $(".container").append($row.clone());
        $hour.text(workHours[i]);

        if (hour === hourOfDay[i]) {
            $event.addClass("present");
        }
        if (hour < hourOfDay[i]) {
            $event.addClass("past");
        }
        //makes everything green. Need to add clause to change future color
        // if(hour > hourOfDay[i]){
        //     $event.addClass("future");
        // }

    }
    // btnInsert.onclick = function () {
    //     const key = input.value;
    //     const value = inpValue.value;
    // }
    
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("lastname", "Smith");
        // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem("lastname");
       } //else {
    //     document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    //   }

    console.log(localStorage);


});