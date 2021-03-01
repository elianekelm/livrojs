function calculaValor() {
    //cria referência aos elementos da página
    var inValorUso = document.getElementById("inValorUso");
    var inTempoUso = document.getElementById("inTempoUso");
    var outValorPagar = document.getElementById("outValorPagar");

    //obtém conteúdo dos campos de entrada
    var valor = Number(inValorUso.value);
    var tempo = Number(inTempoUso.value);

    //calcular o valor a pagar
    valorTotal = Math.ceil(tempo/15) * valor;

    //exibe a resposta
    outValorPagar.textContent = "Valor a Pagar R$: " + valorTotal.toFixed(2);
}
// cria referência ao botão
//associa função à ocorrência do evento "Click" neste botão
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calculaValor);