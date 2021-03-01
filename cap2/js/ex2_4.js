function calcularPreco() {
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    var valor = (quilo/1000) * consumo;
    outValor.textContent = "Valor a Pagar R$: " + valor.toFixed(2);
    
}
//Cria referência ao Botão "Calcular"
var btCalcular = document.getElementById("btCalcular");
//Registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", calcularPreco)