function calcularRaiz() { //cria referência aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value); //obtém conteúdo do campo inNumero

    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido...")
        inNumero.focus();
        return
    }

    var raiz = Math.sqrt(numero); //calcula a raiz quadrada do número

    if (raiz == Math.floor(raiz)) {
        outResposta.textContent = "Raiz: " + raiz;

    } else {
        outResposta.textContent = "Não há raiz exata para " + numero;

    }
}

var btRaiz = document.getElementById("btRaiz");
btRaiz.addEventListener("click", calcularRaiz);