let circularProgress4 = document.querySelector(".circular-progress4");
let progressValue4 = document.querySelector(".progress-value4");
let progressStarValue4 = 0;
let progressEndValue4 = 80;
let speed4 = 10;

let progress4 = setInterval(() => {
    progressStarValue4++;
  
    circularProgress4.style.background = `conic-gradient(#3fcc6e ${progressStarValue4 * 3.6}deg, #fff 0deg)`;

    if (progressStarValue4 == progressEndValue2) {
        clearInterval(progress4); // Utiliza clearInterval para detener el intervalo
    }
}, speed4);