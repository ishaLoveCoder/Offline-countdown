// Set the date when you will go offline
var targetDate = new Date("May 17, 2025 00:00:00").getTime();

// Function to update the countdown every second
var countdownInterval = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Find the time difference between the target date and now
    var distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Update the days count display
    document.getElementById("days-count").innerHTML = days;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "You are now offline!";
    }

}, 1000);
