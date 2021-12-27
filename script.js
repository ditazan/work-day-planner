var day = moment().format("dddd, MMMM Do");
var currentHr = moment().hour();
$("#currentDay").text(day);

var workHours = [
  { time: "9 AM", hour: 09 },
  { time: "10 AM", hour: 10 },
  { time: "11 AM", hour: 11 },
  { time: "12 PM", hour: 12 },
  { time: "1 PM", hour: 13 },
  { time: "2 PM", hour: 14 },
  { time: "3 PM", hour: 15 },
  { time: "4 PM", hour: 16 },
  { time: "5 PM", hour: 17 },
];

var createHour = function (hours, time) {
  var timeBlock = $("<div id='" + hours +"' class='row'></div>");
  timeBlock.append("<div class='col p-3 hour'>" + time + "</div>");
  timeBlock.append(
    "<div id='event' class='col-xs col-sm-8 col-lg-10'><textarea id='event-text' class='w-100'></textarea></div>"
  );
  timeBlock.append("<div class='col btn saveBtn'>save</div>");
  $("#schedule").append(timeBlock);
};

$.each(workHours, function (i) {
  if (currentHr === workHours[i].hour) {
    $("#event").addClass("present");
    $("#event").removeClass("future");
    $("#event").removeClass("past");
  } else if (currentHr < workHours[i].hour) {
    $("#event").addClass("future");
    $("#event").removeClass("present");
    $("#event").removeClass("past");
  } else{
    $("#event").addClass("past");
    $("#event").removeClass("future");
    $("#event").removeClass("present");
  }
  createHour(workHours[i].hour, workHours[i].time);
  console.log(workHours[i].hour);
});

console.log(currentHr);
