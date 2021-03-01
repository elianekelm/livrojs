function calcularFuso(){ //cria referência aos elementos da página
    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraFranca = document.getElementById("outHoraFranca");

    var horaBrasil = Number(inHoraBrasil.value); //obtém e converte o conteúdo do campo inHoraBrasil

    if (inHoraBrasil.value == "" || isNaN(horaBrasil)) { //se não preencheu ou Not-a-Number
        alert("Informe a hora no Brasil corretamente"); 
        inHoraBrasil.focus();
        return;
    }

    var horaFranca = horaBrasil + 5; //calcula o horário na França
    if (horaFranca > 24) {  //se passar das 24 horas na França
        horaFranca = horaFranca - 24  //... subtrai 24    
    }

    outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2); //exibe resposta
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);
