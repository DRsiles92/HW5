var currentDate = moment().format("MMMM Do YYYY");
console.log(currentDate);
var hour = moment().hour();//gives me the hour
var moment = moment();
console.log(moment);
console.log(hour);

$("#currentDay").text(currentDate); // sets current time

$(document).ready(function () {
    var rows = 9;
    var columns = 3;
    var workHours = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var hourOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    var $row = $("<div />", {
        class: 'row'
    });
    var $hour = $("<div class='col-sm-1 hour time-block'>" + workHours[i] + "</div>");

    var $event = $("<textarea />", {
        class: 'col-9 description'
    }
    );

    var $save = $("<button />", {
        class: 'btn col saveBtn fas fa-save fa-3x'
    });
    //add columns
    for (var i = 0; i < columns; i++) {

        $row.append($hour).append($event).append($save);
    }
    //create rows
    for (var i = 0; i <= rows; i++) {
        $("div.time-block").attr("id", hourOfDay[i]);

        $(".container").append($row.clone());
        $hour.text(workHours[i]);

        if (hour === hourOfDay[i]) {
            $event.addClass("present");
        } else if (hour < hourOfDay[i]) {
            $event.addClass("past");
        } else {
            $event.addClass("future");
        }
        // $("textarea.description").val('Add Event');
   
    getEvent();

    $(".btn").click(function () {
        var time = $(this).siblings("div.time-block").text();
        var input = $(this).siblings("textarea.description").val();
        localStorage.setItem(time, input);
    })
 }
    getEvent();
    function getEvent() {

        $("#17").val(localStorage.getItem("17"));
        console.log(localStorage.getItem("17"));
        // $("#10").val(localStorage.getItem("10"));
        // $("#11").val(localStorage.getItem("11"));
        // $("#12").val(localStorage.getItem("12"));
        // $("#13").val(localStorage.getItem("13"));
        // $("#14").val(localStorage.getItem("14"));
        // $("#15").val(localStorage.getItem("15"));
        // $("#16").val(localStorage.getItem("16"));
        // $("#17").val(localStorage.getItem("17"));
        // console.log('get event func')
    }

});