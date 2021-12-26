moment().format();

var workHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

var createHour = function(hours, time){
    var timeBlock = $("<div class='row border-top hr-" +hours+ "'><div class='col  p-3'>"+ time +"</div><div class='col-10 bg-secondary'></div><div class='col btn btn-primary'></div></div>");
    $("#schedule").append(timeBlock);
}


for(i=0; i<workHours.length; i++){
createHour(i, workHours[i]);
}