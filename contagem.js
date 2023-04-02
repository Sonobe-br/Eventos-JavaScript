function ativarContagem() {
    document.getElementById("tempo").innerHTML = " Começou a contagem";
    
    //ativa a função somente uma vez baseado no tempo determinado
    tempo = setTimeout(function() { 
        document.getElementById("tempo").innerHTML = "Executou o setTimeOut";
        document.body.style.backgroundColor = "orange";
    }, 5000);
    
}

function pararContagem() {
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou a contagem";

}