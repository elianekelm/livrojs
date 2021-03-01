function calculaProm(){
    //cria referência aos elementos da página HTML
    var inNomeProduto = document.getElementById("inNomeProduto");
    var inPreco = document.getElementById("inPreco");
    var outProduto = document.getElementById("outProduto");
    var outInf = document.getElementById("outInf")

    //obtêm conteúdo dos campos de entrada
    var nome = inNomeProduto.value;
    var preco = Number(inPreco.value);
    
    //Calcula o valor a pagar
    prodDesconto = preco*0.5
    valorTotal = (preco * 2) + prodDesconto
    

    //Exibe a resposta
    outProduto.textContent = nome + " - Promoção: Leve 3 por R$: " + valorTotal.toFixed(2);
    outInf.textContent = "O 3° produto custa apenas R$: " + prodDesconto.toFixed(2);
}

//Cria referência ao botão
//associa a função ao "click" do botão
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calculaProm);