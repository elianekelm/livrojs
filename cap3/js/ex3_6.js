function calcularCedulas(){
    //cria referência aos elementos da página
    var inSaque = document.getElementById("inSaque");
    var outNotaCem = document.getElementById("outNotaCem");
    var outNotaCinquenta = document.getElementById("outNotaCinquenta");
    var outNotaVinte = document.getElementById("outNotaCinquenta");
    var outNotaDez = document.getElementById("outNotaDez");

    //limpa mensagens (caso, segunda execução)
    outNotaCem.textContent = "";
    outNotaCinquenta.textContent = "";
    outNotaVinte.textContent = "";
    outNotaDez.textContent
     = "";

    var saque = Number(inSaque.value); //converte o conteúdo digitado no campo inSaque

    if (saque == 0 || isNaN(saque)) {
        alert("Informe o valor do saque corretamente");
        inSaque.focus();
        return;        
    }

    //verifica se o saque não é múltiplo de 10
    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 20, 50, 100)");
        inSaque.focus();
        return;
    }

    //calcula notas de 100, 50, 20 e 10
    var notasCem = Math.floor(saque/100);
    var resto = saque % 100;
    var notasCinquenta = Math.floor(resto/50);
    resto = resto % 50;
    var notasVinte = Math.floor(resto/20);
    resto = resto % 20;
    var notasDez = Math.floor(resto/10);

    //exibe as notas apenas se houver
    if (notasCem > 0) {
        outNotaCem.textContent = "Notas de R$ 100: " + notasCem;
    }
    if (notasCinquenta >0) {
        outNotaCinquenta.textContent = "Notas de R$ 50: " + notasCinquenta;
    }
   
    if (notasVinte >0) {
        outNotaVinte.textContent = "Notas de R$ 20: " + notasVinte;
    }
    if (notasDez > 0) {
        outNotaDez.textContent = "Notas de R$ 10: " + notasDez;
    }
}

//cria referência ao Botão Exibir e associa a function ao evento "click"
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularCedulas);