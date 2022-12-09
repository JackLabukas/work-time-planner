$(document).ready(function () {
  var time = moment().format("dddd-MMMM-YYYY");
  $("#currentDay").text(time);
  var hour = moment().format("HH");
  console.log(hour);
  $(".time-block").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    console.log(timeDiv);
    if (hour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (hour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (hour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
});
