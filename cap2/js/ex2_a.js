function calculoProm() {
    var inMed = document.getElementById("inMed");
    var inPreco = document.getElementById("inPreco");
    var outMed = document.getElementById("outMed");
    var outProm = document.getElementById("outProm");

    var nomeMed = inMed.value
    var preco = Number(inPreco.value);

    var promocao = (Math.floor(preco) * 2);

    outMed.textContent = "Promoção de " + nomeMed
    outProm.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2)

}

var btCalcularProm = document.getElementById("btCalcularProm");
btCalcularProm.addEventListener("click", calculoProm);