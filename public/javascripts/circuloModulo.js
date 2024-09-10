let circularProgress2 = document.querySelector(".circular-progress2");
let progressValue2 = document.querySelector(".progress-value2");
let progressStarValue2 = 0;
let progressEndValue2 = 100;
let speed2 = 10;

let progress2 = setInterval(() => {
    progressStarValue2++;
  
    circularProgress2.style.background = `conic-gradient(#3fcc6e ${progressStarValue2 * 3.6}deg, #fff 0deg)`;

    if (progressStarValue2 == progressEndValue2) {
        clearInterval(progress2); // Utiliza clearInterval para detener el intervalo
    }
}, speed2);