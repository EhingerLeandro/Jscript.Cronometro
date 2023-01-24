const buttonStart= document.querySelector('#start');
const buttonStop= document.querySelector("#stop");
const buttonClear= document.querySelector("#clear"); 

let timer;
let timeSeconds=0;
let turnOff=true;

//Crear función contador (Start)
buttonStart.addEventListener("click", start);
function start (){
	if(turnOff ==true){
		timer = setInterval(()=>{
			timeSeconds++;
			render()}, 1000);
			turnOff=false;
	}  
}

//Crear función parar (Stop)
buttonStop.addEventListener("click", stop);
function stop (){
	clearInterval(timer);
	turnOff=true;
}

//Crear función limpiar (Clear)
buttonClear.addEventListener("click", clear);
function clear (){
	clearInterval(timer);
	timeSeconds=0;
	crono_output.textContent = "00:00:00";
	turnOff=true;
}

//Crear función render
function render (){
	const crono_output= document.querySelector("#crono_output");
	let hours = parseInt(timeSeconds/3600);
	let minutes = parseInt(timeSeconds/60);
	let seconds = parseInt(timeSeconds%60);
	crono_output.textContent = `${hours<10?"0":""}${hours}:${minutes<10?"0":""}${minutes}:${seconds<10?"0":""}${seconds}`
}
