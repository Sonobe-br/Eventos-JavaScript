function verificar () {
    let nome = document.getElementById("nome").value;
    
    if (nome == '' || nome == null) {
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ser vazio" 
        p.style.color = "red";
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "Preenchido Corretamente" 
        p.style.color = "green";
    }
}