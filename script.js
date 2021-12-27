moment().format();

var workHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

var createHour = function(hours, time){
    var timeBlock = $("<div id='hr-"+hours+"' class='row'></div>");
    timeBlock.append("<div class='col p-3 hour'>"+ time +"</div>");
    timeBlock.append("<div class='col-xs col-sm-8 col-lg-10 bg-secondary'><textarea class='w-100'></textarea></div>");
    timeBlock.append("<div class='col btn saveBtn'>save</div>");
    $("#schedule").append(timeBlock);
}


for(i=0; i<workHours.length; i++){
createHour(i, workHours[i]);
}