$(document).ready(function () {
  // current time
  var time = moment().format("dddd-MMMM-YYYY");
  $("#currentDay").text(time);
  // currenrt hour
  var hour = moment().format("HH");
  console.log(hour);
  // compare each time slot 'id' to actual time
  $(".time-block").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    // console.log(timeDiv);
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
  // when button is clicked we get the value of sibling element in this case textarea with class .description
  // and get time of when button is clicked of parents id attr value
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];
    console.log(value);
    localStorage.setItem(time, value);
  });

  // sat values to textfields of html page that we get from localStorage
  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));
});
