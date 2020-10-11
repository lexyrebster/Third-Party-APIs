// Pseudocode for what I need to do for JQUERY CODING
// 1) Color-coordinate the time to the hour (past, present, future)
// 2) Make the save button clickable
// 3) Make the save button save user input
// 3) Be able to input data
// 4) Store in local storage -- have the input information stay


 // setting up value for each hour //
function hourTracker() {
    // using third party API //
        let currentHour = moment().hour();
    // setting a loop up for time-block //
            $(".time-block").each(function(){
                // giving the blockHour an actual number & dividing hour string into an array //
                let blockHour = parseInt($(this).attr("id").split("hour")[1]);
            
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
        } hourTracker();

$(document).ready(function() {
    // Displaying of Current Day in the head
        $("#currentDay").text(moment().format("MMMM Do YYYY"));
    // Giving the save button a click event listener 
        $(".saveBtn").on("click", function (){
            //setting data input to the save button

    // Setting items (input text and time) into local storage
            localStorage.setItem(time, text);
        })
    // Retrieving value from each hour from local storage
        $("#hour0 .task").val(localStorage.getItem(hour0));
        $("#hour1 .task").val(localStorage.getItem(hour1));
        $("#hour2 .task").val(localStorage.getItem(hour2));
        $("#hour3 .task").val(localStorage.getItem(hour3));
        $("#hour4 .task").val(localStorage.getItem(hour4));
        $("#hour5 .task").val(localStorage.getItem(hour5));
        $("#hour6 .task").val(localStorage.getItem(hour6));
        $("#hour7 .task").val(localStorage.getItem(hour7));
        $("#hour8 .task").val(localStorage.getItem(hour8));
    
    });
    
   
        