console.log("script works!!");
/*
const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
previousNextIcon = document.querySelectorAll(".icons span");

//getting new date with current year and month
let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", 
                "August", "September", "October", "November", "December"];


const renderCalendar = () => {
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(),
    lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
    lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay(),
    lastDateOfPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
    let liTag = "";

    for(let i = firstDayOfMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateOfPreviousMonth - i + 1}</li>`;
    }

    for(let i = 1; i <= lastDateOfMonth; i++){
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() 
                      && currentYear === new Date().getFullYear() ? "active" : "";
        console.log(isToday);
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for(let i = lastDayOfMonth; i < 6; i++){
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

previousNextIcon.forEach(icon => {
    icon.addEventListener("click", () =>{
        currentMonth = icon.id === "previous" ? currentMonth - 1 : currentMonth + 1;

        if(currentMonth < 0 || currentMonth > 11){
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    })
})
*/



/* using jQuery framework */

$(document).ready(function() {
    const currentDate = $(".current-date");
    const daysTag = $(".days");
    const previousNextIcon = $(".icons span");

    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();

    const months = ["January", "February", "March", "April", "May", "June", "July", 
                    "August", "September", "October", "November", "December"];

    const renderCalendar = () => {
        let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
        let lastDateOfPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
        let liTag = "";

        for(let i = firstDayOfMonth; i > 0; i--){
            liTag += `<li class="inactive">${lastDateOfPreviousMonth - i + 1}</li>`;
        }

        for(let i = 1; i <= lastDateOfMonth; i++){
            let isToday = i === date.getDate() && currentMonth === new Date().getMonth() 
                        && currentYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday}">${i}</li>`;
        }

        for(let i = lastDayOfMonth; i < 6; i++){
            liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
        }

        currentDate.text(`${months[currentMonth]} ${currentYear}`);
        daysTag.html(liTag);
    };
    renderCalendar();

    previousNextIcon.click(function() {
        currentMonth = $(this).attr("id") === "previous" ? currentMonth - 1 : currentMonth + 1;

        if(currentMonth < 0 || currentMonth > 11){
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});

/*display calendar event handling */
var selectServiceButtons = document.querySelectorAll(".btn");
// Loop through each button and add click event listener
selectServiceButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the link (i.e., following the href)

        // Select the calendar body
        var calendarBody = document.querySelector(".calendar-wrapper");
        console.log(calendarBody);
        
        // Toggle its visibility
        calendarBody.style.display = "block";
    });
});

// Add click event listener to the document body
document.body.addEventListener("click", function(event) {
    // Check if the clicked element is not within the calendar body or button
    console.log("body outside calendar click registered");
    var calendarBody = document.querySelector(".calendar-wrapper");
        console.log(calendarBody);
    if (!calendarBody.contains(event.target) && !Array.from(selectServiceButtons).some(button => button.contains(event.target))) {

        // Hide the calendar body
        calendarBody.style.display = "none";
    }
});
