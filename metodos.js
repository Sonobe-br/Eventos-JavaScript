//EVENTO ONCLICK
function eventoClick () {
    alert ('Acionado o evento click');
    document.body.style.backgroundColor = 'green';
}

//EVENTO ONDBLCLICK
function eventoDblClick () {
    alert ('Acionado o evento de duplo click');
}

//EVENTO ONMOUSEOVER
function viraAmarelo() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "yellow";
}
//EVENTO ONMOUSEOUT
function viraVerde() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "#008000";
}
