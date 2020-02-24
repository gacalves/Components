var timeinterval;
var refresher;
var timer = {
    countDown: 5,
    interval: 5,
    running: false
};

var secondsSpan = document.querySelector('.load-seconds');
var loadBar = document.querySelector(".load-bar");

function updateClock() {
    timer.countDown -= 1;
    secondsSpan.innerHTML = ('0' + timer.countDown + 's').slice(-3);
}

async function getServerData() {
    resetTimer();
    const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
    await sleep(3000).then(() => {});
}

function stopTimer() {
    if (timer.running) {
        clearTimeout(refresher);
        clearInterval(timeinterval);
        timer.countDown = timer.interval;
        timer.running = false;
        loadBar.classList.remove("load-bar-running");
        secondsSpan.innerHTML = "";
    }
}

function resetTimer() {
    stopTimer();
    timer.countDown = timer.interval;
}

function playTimer() {
    if (!timer.running) {
        loadBar.classList.add("load-bar-running");
        refresher = setTimeout(() => getServerData().then(() => playTimer()), timer.countDown * 1000);
        timeinterval = setInterval(updateClock, 1000);
        timer.running = true;
    }
    secondsSpan.innerHTML = ('0' + timer.countDown + "s").slice(-3);
}

function initializeClock() {
    playTimer();
}
document.getElementById("iniciar").addEventListener("click", () => {
    playTimer();
});

document.getElementById("parar").addEventListener("click", () => {
    stopTimer();
});

document.getElementById("atualizar").addEventListener("click", () => {
    getServerData().then(() => playTimer());
});

initializeClock();