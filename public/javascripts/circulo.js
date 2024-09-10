let circularProgress = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");
let progressStarValue = 0;
let progressEndValue = 40;
let speed = 10;

let progress = setInterval(() => {
    progressStarValue++;
    progressValue.textContent = `${progressStarValue}%`;
    circularProgress.style.background = `conic-gradient(#3fcc6e ${progressStarValue * 3.6}deg, #fff 0deg)`;

    if (progressStarValue == progressEndValue) {
        clearInterval(progress); // Utiliza clearInterval para detener el intervalo
    }
}, speed);