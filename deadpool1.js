// TA CERTO 

var btnres = document.getElementById('buttonres')
btnres.addEventListener('click', clicar)

function clicar() {
    var resUm = prompt("ATENÇÃO - Para responder A digite o primeiro nome do Deadpool. E para responder B digite o sobrenome do Deadpool.") 
    var contador = 1
    while (contador >= 0) {
        if (resUm.toLowerCase() == "wade") {
            return location = "./deadpool2Acharada.html"
        } else if (resUm.toLowerCase() == "wilson"){
            return location = "./deadpool2B.html"
        }        
        else if(resUm != 'wade' || resUm != 'wilson'){
            contador = 1
            alert(`Resposta incorreta, você tem mais ${contador} chance. Se errar, irá voltar ao início.`)
            var resUm = prompt("ATENÇÃO - Para responder A digite o primeiro nome do Deadpool. E para responder B digite o sobrenome do Deadpool.") 
        }
    }
    return location = "./index.html"
}

// TA CERTO










