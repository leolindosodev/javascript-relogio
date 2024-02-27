const horas = document.getElementById('hr');
const minutes = document.getElementById('min');
const segunds = document.getElementById('seg');
const diaMes = document.getElementById('date');

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

const relogio = setInterval(function time(){
    let hourDay = new Date();
    let hr = zeroAEsquerda(hourDay.getHours());
    let min = zeroAEsquerda(hourDay.getMinutes());
    let seg = zeroAEsquerda(hourDay.getSeconds());
    const diaDoMes = hourDay.toLocaleDateString();

    horas.textContent = hr;
    minutes.textContent =  min;
    segunds.textContent = seg;
    diaMes.innerHTML = diaDoMes 
});


