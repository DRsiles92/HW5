var currentDate = moment().format("MMMM Do YYYY");
console.log(currentDate);
var hour = moment().hour();//gives me the hour
var moment = moment();
console.log(moment);
console.log(hour);
$("#currentDay").text(currentDate); // sets current time
$(document).ready(function () {
    var workHours = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var hourOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    //create rows
    for (var i = 0; i < workHours.length; i++) {
        
        var $row = $("<div />", {
            class: 'row'
        })
        
        var $hour = $("<div class='col-sm-1 hour time-block'>" + workHours[i] + "</div>");
        $hour.text(workHours[i]);
        
        var $event = $("<textarea />", {
            class: 'col-9 description'
        })
        $event.attr("data-index", workHours[i])

        var $save = $("<button />", {
            class: 'btn col-1 saveBtn fas fa-save fa-3x'
        });
    
        $(".container").append($row);
        $row.append($hour).append($event).append($save);
        
        if (hour === hourOfDay[i]) {
            $event.addClass("present");
        } else if (hour < hourOfDay[i]) {
            $event.addClass("past");
        } else {
            $event.addClass("future");
        }

    $(".btn").click(function () {
        var time = $(this).siblings("div.time-block").text();
        var input = $(this).siblings("textarea.description").val();
        localStorage.setItem(time, input);
    })

    var inputText = localStorage.getItem(workHours[i]);
    $event.text(inputText);
    
    //on click function
    $save.on('click', function (event) {
        event.preventDefault();
        var element = event.target;
        var content = element.parentNode.parentNode.querySelector('.description').value;
        localStorage.setItem(workHours[i], content);
    })
}
});