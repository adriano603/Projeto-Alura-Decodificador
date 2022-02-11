
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

var inputDoTexto = document.getElementById('input-texto');
const botaoCripto = document.getElementById('btn-cripto');
var caixaTextoDescripto = document.getElementById('msg');
const botaoDescripto = document.getElementById('btn-descripto');
const botaoCopiar = document.getElementById('btn-copy');

function criptografar (event) {
	event.preventDefault();

		var txtPreCripto = inputDoTexto.value;

        var criptografia = txtPreCripto.replaceAll(/[e\é\ê]/gi, 'enter').replaceAll(/[i\í\ï]/gi, 'imes').replaceAll(/[o\ó\õ\ô]/gi, 'ober').replaceAll(/[u\ú\ü]/gi, 'ufat').replaceAll(/[a\á\à\ã]/gi, 'ai');
        console.log (criptografia);
		console.log (txtPreCripto);
		caixaTextoDescripto.value = criptografia;
}

		botaoCripto.addEventListener("click", criptografar);
	

function descriptografar (event) {
	event.preventDefault();

	var txtPreDescripto = inputDoTexto.value;

		var descriptografia = txtPreDescripto.replaceAll(/ai/gi, 'a').replaceAll(/enter/gi, 'e').replaceAll(/imes/gi, 'i').replaceAll(/ober/gi, 'o').replaceAll(/ufat/gi, 'u');
		caixaTextoDescripto.value = descriptografia; 
	} 

		botaoDescripto.addEventListener("click", descriptografar);

function copiar () {

	navigator.clipboard.writeText(caixaTextoDescripto.value)
	caixaTextoDescripto.value = ''
}
	
		botaoCopiar.addEventListener("click", copiar);

console.log (copiar);
	
