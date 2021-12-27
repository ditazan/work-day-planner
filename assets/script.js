var day = moment().format("dddd, MMMM Do");
var currentHr = moment().hour();
$("#currentDay").text(day);



var saveEvents = function () {
  localStorage.setItem("workHours", JSON.stringify(workHours));
};

var loadEvents = function () {
  workHours = JSON.parse(localStorage.getItem("workHours"));

  if (!workHours){
    workHours = [
      { time: "9 AM", hour: 09, event: "" },
      { time: "10 AM", hour: 10, event: "" },
      { time: "11 AM", hour: 11, event: "" },
      { time: "12 PM", hour: 12, event: "" },
      { time: "1 PM", hour: 13, event: "" },
      { time: "2 PM", hour: 14, event: "" },
      { time: "3 PM", hour: 15, event: "" },
      { time: "4 PM", hour: 16, event: "" },
      { time: "5 PM", hour: 17, event: "" },
    ];
  }
};

var createHour = function (hours, time, event) {

  
  var timeBlock = $("<div id='" + hours + "' class='row timeblock time-block'></div>");
  timeBlock.append("<div class='col p-3 hour'>" + time + "</div>");
  timeBlock.append(
    "<div class='col-xs col-sm-8 col-lg-10 event'><textarea class='w-100 event-text description'>" +
      event +
      "</textarea></div>"
  );
  timeBlock.append("<div class='col btn saveBtn'>save</div>");
  $("#schedule").append(timeBlock);
};


loadEvents();
$.each(workHours, function (i) {
  createHour(workHours[i].hour, workHours[i].time, workHours[i].event);
  if (currentHr === workHours[i].hour) {
    $("div .event").addClass("present");
    $("div .event").removeClass("future");
    $("div .event").removeClass("past");
  } else if (currentHr < workHours[i].hour) {
    $("div .event").addClass("future");
    $("div .event").removeClass("present");
    $("div .event").removeClass("past");
  } else {
    $("div .event").addClass("past");
    $("div .event").removeClass("future");
    $("div .event").removeClass("present");
  }
});

$("#currentDay").after($("<button id='clear-btn' class='btn btn-warning'> clear </button>"));

$("#schedule").on("click", ".saveBtn", function (event) {
 event.preventDefault();

loadEvents();  
var text = $(this).closest(".timeblock").find("textarea").val();
  var index = $(this).closest(".timeblock").index();
  var hour = workHours[index].hour;



  console.log(text);
  console.log(index);
  // console.log(workHours[index]);
  workHours[index].event = text;

  saveEvents();
});

$("header").on("click", "#clear-btn", function(){
  localStorage.clear();
  location.reload();

})


