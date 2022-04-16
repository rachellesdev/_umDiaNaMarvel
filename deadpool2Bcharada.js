var btnres = document.getElementById('buttonres')
btnres.addEventListener('click', clicar)

function clicar() {
    var resUm = prompt("Sua resposta é A, B, C  ou D?") 
    var contador = 1
    while (contador >= 0) {
        if (resUm.toLowerCase() == "a") {
            return location = "./deadpool3B.html"
        } 
        else if(resUm.toLowerCase() != "a"){
            contador = 1
            alert(`Resposta incorreta, você tem mais ${contador} chance. Se errar, irá voltar ao início.`)
            var resUm = prompt("Sua resposta é A, B, C  ou D?")
        }
    }
    return location = "./index.html"
}

