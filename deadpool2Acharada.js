var btnres = document.getElementById('buttonres')
btnres.addEventListener('mouseenter', entrar)
btnres.addEventListener('mouseout', sair)
btnres.addEventListener('click', clicar)

function entrar(){
    btnres.style.background = '#2A0D0D'
}

function sair(){
    btnres.style.background = '#00080c'
}

function clicar() {
    var resUm = prompt("Sua resposta é A, B, C  ou D?")     
}


