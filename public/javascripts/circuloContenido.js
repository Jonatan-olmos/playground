let circularProgress3 = document.querySelector(".circular-progress3");
let progressValue3 = document.querySelector(".progress-value3");
let progressStarValue3 = 0;
let progressEndValue3 = 40;
let speed3 = 10;

let progress3 = setInterval(() => {
    progressStarValue3++;
  
    circularProgress3.style.background = `conic-gradient(#3fcc6e ${progressStarValue3 * 3.6}deg, #fff 0deg)`;

    if (progressStarValue3 == progressEndValue3) {
        clearInterval(progress3); // Utiliza clearInterval para detener el intervalo
    }
}, speed3);