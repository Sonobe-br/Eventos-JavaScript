function ativarContagem() {
    document.getElementById("tempo").innerHTML = " Começou a contagem";
    setTimeout(function() { 
        document.getElementById("tempo").innerHTML = " Executou o setTimeOut";
        document.body.style.backgroundColor = "orange";
     }, 5000);

}