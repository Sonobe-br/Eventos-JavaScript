function ativarContagem() {
    //document.getElementById("tempo").innerHTML = " Começou a contagem"; 

    //ativa a função somente uma vez baseado no tempo determinado
    /* tempo = setTimeout(function() { 
        document.getElementById("tempo").innerHTML = "Executou o setTimeOut";
        document.body.style.backgroundColor = "orange";
    }, 5000);
    */
   
    tempo = setInterval(function() {
       let cronometro = document.getElementById("tempo").innerHTML;
       let soma = parseInt(cronometro) + 1;
       document.getElementById("tempo").innerHTML = soma;
    }, 1000);
}


function pararContagem() {
    clearInterval(tempo);
    //document.getElementById("tempo").innerHTML = "Parou a contagem";
 
}