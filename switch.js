function verificaCor() {
    let cor = document.getElementById("cor").value; 


    switch (cor) {
        case "azul":
            document.body.style.background = "blue";
            break;
        
        case "vermelho":
            document.body.style.background = "red";    
            break;
            
        case "amarelo":
            document.body.style.background = "yellow";    
            break;

        default:
            document.getElementById("teste").innerHTML = "A cor digitado não está disponivel";
    }
}