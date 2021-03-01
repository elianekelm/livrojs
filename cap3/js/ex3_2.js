function calcularPeso() {
    //Cria referência aos elementos manipulados pela function
    var inNome = document.getElementById("inNome");
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResposta = document.getElementById("outResposta");

    //Obtém o conteúdo dos campos de edição
    var nome = inNome.value;
    var masc = rbMasculino.checked;
    var fem = rbFeminino.checked;
    var altura = Number(inAltura.value);

    //Verifica se o nome foi preenchido e o sexo selecionado
    if (nome == "" || (masc == false && fem == false)) {
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus(); //posiciona (joga o foco) no campo de edição inNome
        return;
    }

    //Se altura vazio(0) ou NaN: Not-a-Number (um texto foi informado, por exemplo)
    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }
    if (masc) {
        var peso = 25 * Math.pow(altura, 2);  //Math.pow eleva ao quadrado   
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }

    //Apresenta a resposta (alerta o conteúdo da linha outResposta)
    outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg";
}

//cria referência ao elemento btCalcular e registra evento associado a calcularPeso(função)
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

function limparDados(){
   location.reload(); //recarrega a página
   document.getElementById("inNome").focus; //posiciona o cursor no elemento inNome

}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparDados);