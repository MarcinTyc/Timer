const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');
const info = document.querySelector('.info');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

let counTime;
let minutes = 0;
let seconds = 0;
let archiveArr = [];

const handleStart = () => {
	clearInterval(counTime);
	counTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopwatch.textContent = `0${minutes}:00`;
		}
	}, 100);
};

const handleStop = () => {
	time.textContent = '';
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

	if (stopwatch !== '0:00') {
		time.style.visibility = 'visible';
		archiveArr.push(stopwatch.textContent);
		console.log(archiveArr);
	}
	// }else{
	//     time.style.visibility = 'hidden'

	// }

	clearStuff();
};

const handlePause = () => {
	clearInterval(counTime);
};

const handleReset = () => {
	time.style.visibility = 'hidden';
	archiveArr = [];

	clearStuff();
};

const clearStuff = () => {
	clearInterval(counTime);
	stopwatch.textContent = '0:00';
	timeList.textContent = '';
	seconds = 0;
	minutes = 0;
};

const showHistory = () => {
	timeList.textContent = '';
	let num = 1;
	archiveArr.forEach(el => {
		const newTime = document.createElement('li');
		newTime.innerHTML = `Pomiar nr ${num}: <span> ${el} </s`;
		timeList.appendChild(newTime);
		num++;
	});
};

const showInfo = () =>{

    if(!(modalShadow.style.display==='block')){
        modalShadow.style.display='block'
    }else{
        modalShadow.style.display='none'
    }
    modalShadow.classList.toggle('modal-animation')

}


startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);
info.addEventListener('click', showInfo);
closeModalBtn.addEventListener('click', showInfo);
window.addEventListener('click', e=>{
    e.target === modalShadow ? showInfo(): false
})
