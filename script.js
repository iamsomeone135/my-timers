// ADD YOUR TIMERS HERE: {label: "Name", seconds: TimeInSeconds}
const timers = [
    { label: "Workout", seconds: 10 },
    { label: "Rest", seconds: 5 },
    { label: "Stretch", seconds: 15 }
];

let currentTimerIndex = 0;
const container = document.getElementById("timer-container");

function startTimer() {
    if (timers.length === 0) return;
    
    let timer = timers[currentTimerIndex];
    let time = timer.seconds;
    
    // Display label
    container.innerHTML = `<h2>${timer.label}</h2><div style="font-size: 2em;">${time}s</div>`;

    let interval = setInterval(() => {
        time--;
        container.innerHTML = `<h2>${timer.label}</h2><div style="font-size: 2em;">${time}s</div>`;
        
        if (time <= 0) {
            clearInterval(interval);
            // Loop: Move to next or restart from beginning
            currentTimerIndex = (currentTimerIndex + 1) % timers.length;
            startTimer();
        }
    }, 1000);
}

startTimer();
