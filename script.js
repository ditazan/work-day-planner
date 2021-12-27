var day = moment().format("dddd, MMMM Do");
var currentHr = moment().hour();
$("#currentDay").text(day);

var workHours = [
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

var saveEvents = function () {
  localStorage.setItem("workHours", JSON.stringify(workHours));
};

var createHour = function (hours, time, event) {
  var timeBlock = $("<div id='" + hours + "' class='row timeblock'></div>");
  timeBlock.append("<div class='col p-3 hour'>" + time + "</div>");
  timeBlock.append(
    "<div class='col-xs col-sm-8 col-lg-10 event'><textarea class='w-100'>" +
      event +
      "</textarea></div>"
  );
  timeBlock.append("<div class='col btn saveBtn'>save</div>");
  $("#schedule").append(timeBlock);
};

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

$("#schedule").on("click", "textarea", function () {
  var text = $(this).text().trim();

  var textInput = $("<textarea>").val(text);

  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});

$("#schedule").on("click", ".saveBtn", function () {
  // get the textarea's current value/text
  var text = $("textarea").val().trim();

  // get the parent id attribute
  // var hour = $(this)
  //   .closest("div")
  //   .attr("id");

  var index = $(this).closest(".timeblock").index();

  console.log(text);
  console.log(index);
  console.log(workHours[index]);
  workHours[index].event = text;

  saveEvents();
});

var loadEvents = function () {
  workHours = JSON.parse(localStorage.getItem("workHours"));
};

loadEvents();
