var mostrar_tempo = window.cpAPIInterface.getCurrentFrame();
var cancel;
var cpInfoCurrentSlide = window.cpAPIInterface.getCurrentFrame();

var visitados = new Array(254);

mostrar_tempo = 0;

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