var mostrar_tempo = window.cpAPIInterface.getCurrentFrame();
var cancel;
var cpInfoCurrentSlide = window.cpAPIInterface.getCurrentFrame();

var visitados = new Array(254);

mostrar_tempo = 0;
var revelar = 0;
// Ajuste do cronômetro
function contador_tempo() {
		if(window.visitados[cpInfoCurrentSlide] <= 0){
			clearInterval(window.cancel);
			cp.show("b_next");
		}
		else{
		window.visitados[cpInfoCurrentSlide] -= 1;
		}
		window.mostrar_tempo = transformar(window.visitados[cpInfoCurrentSlide]);
}

function transformar(s){
	function duas_casas(numero){
		if (numero <= 9){
			numero = "0"+numero;
		}
		return numero;
	}

	minuto = duas_casas(Math.trunc((s%3600)/60));
	segundo = duas_casas((s%3600)%60);
			  
	formatado = minuto+":"+segundo;
			  
	return formatado;
}

function tempo(segundos){
	clearInterval(window.cancel);
	if(typeof window.visitados[cpInfoCurrentSlide] === 'undefined'){
		window.visitados[cpInfoCurrentSlide] = segundos;
	}
	cp.hide("b_next");
	window.cancel = setInterval(contador_tempo, 1000);
}

var fullscreen = 0;
function fullScreenButton() {
    let j = $('[id^="fullscreen"]').on('click', function (e) {
        let i = parent.document.getElementsByTagName("iframe")[0];
        if (i == null) { i = document.getElementById("main_container") }
        if (fullscreen == 1) {
            console.log("estava full");
            fullscreen = 0;
            let i = parent.document;
            i.cancelFullScreen && i.cancelFullScreen();
            i.webkitCancelFullScreen && i.webkitCancelFullScreen();
            i.mozCancelFullScreen && i.mozCancelFullScreen();
            i.exitFullscreen && i.exitFullscreen();
        }
        else {
            console.log("estrou em full");
            fullscreen = 1;
            i.requestFullScreen && i.requestFullScreen();
            i.webkitRequestFullScreen && i.webkitRequestFullScreen();
            i.mozRequestFullScreen && i.mozRequestFullScreen();
            i.msRequestFullscreen && i.msRequestFullscreen();
        }
    });
};
fullScreenButton();
