const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body') 
}
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function addSwitch() {
    refs.body.setAttribute('style', `background:${colors[randomIntegerFromInterval(0, 5)]}`)
}

refs.startBtn.addEventListener('click',()=>{
    timerId = setInterval(()=>{
        addSwitch()
    }, 1000)
    refs.startBtn.disabled = true
})

refs.stopBtn.addEventListener('click', ()=>{
   clearInterval(timerId)
   refs.startBtn.disabled = false
})