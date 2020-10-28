// Pseudocode for what I need to do for JQUERY CODING
// 1) Color-coordinate the time to the hour (past, present, future)
// 2) Make the save button clickable
// 3) Make the save button save user input
// 3) Be able to input data
// 4) Store in local storage -- have the input information stay

$(document).ready(function() {


    // Displaying of Current Day in the head
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

     // setting up value for each hour //
     function hourTracker() {
        // using third party API //
            var currentHour = moment().hour();
        // setting a loop up for time-block //
                $(".time-block").each(function(){
                    // giving the blockHour an actual number & dividing hour string into an array //
                    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
                
        // Color-coordinating hours (connecting CSS file to display on page through if and else statements)
                if (blockHour < currentHour){
                    $(this).addClass("past");
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                }
                else if (blockHour === currentHour) {
                    $(this).removeClass("past");
                    $(this).addClass("present");
                    $(this).removeClass("future");
                }
                else {
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                    $(this).addClass("future");
                }
                
                })
            // calling the function //
                    } 

                    hourTracker();
        // Giving the save button a click event listener 
        $(".saveBtn").on("click", function () {

            //trying to put an attribute to the save button but idk it's not working for me
            var text = $(this).siblings(".task").val();
            var time = $(this).parent().attr("id");
                    
            // Setting items (input text and time) into local storage
            localStorage.setItem(time, text);
        })

        // Retrieving value from each hour from local storage
        $("#hour9 .task").val(localStorage.getItem(hour9));
        $("#hour10 .task").val(localStorage.getItem(hour10));
        $("#hour11 .task").val(localStorage.getItem(hour11));
        $("#hour12 .task").val(localStorage.getItem(hour12));
        $("#hour13 .task").val(localStorage.getItem(hour13));
        $("#hour14 .task").val(localStorage.getItem(hour14));
        $("#hour15 .task").val(localStorage.getItem(hour15));
        $("#hour16 .task").val(localStorage.getItem(hour16));
        $("#hour17 .task").val(localStorage.getItem(hour17));
})
