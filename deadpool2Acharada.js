
// TA CERTO
var btnres = document.getElementById('buttonres')
btnres.addEventListener('click', clicar)

function clicar() {
    var resUm = prompt("Sua resposta é A, B, C  ou D?") 
    var contador = 1
    while (contador >= 0) {
        if (resUm.toLowerCase() == "c") {
            return location = "./deadpool2A.html"
        } 
        else if(resUm.toLowerCase() != "c"){
            contador = 1
            alert(`Resposta incorreta, você tem mais ${contador} chance. Se errar, irá voltar ao início.`)
            var resUm = prompt("Sua resposta é A, B, C  ou D?")
            
        }
    }
    return location = "./index.html"
}
// TA CERTO
