// TA CERTO

var btnres = document.getElementById('buttonres')
btnres.addEventListener('click', clicar)

function clicar() {
    var resUm = prompt("ATENÇÃO -  Para escolher a opção A digite o ano em que Deadpool apareceu a primeira vez nos quadrinhos e para escolher B digite o ano em que foi lançado o primeiro filme do Deadpool") 
    var contador = 1
    while (contador >= 0) {
        if (resUm == "1991") {
            return location = "./deadpool2Acharada.html"
        } else if (resUm == '2016'){
            return location = "./deadpool2Bcharada.html"
        }        
        else if(resUm != '1991' || resUm != '2016'){
            contador = 1
            alert(`Resposta incorreta, você tem mais ${contador} chance. Se errar, irá voltar ao início.`)
            resUm = prompt("ATENÇÃO -  Para escolher a opção A digite o ano em que Deadpool apareceu a primeira vez nos quadrinhos e para escolher B digite o ano em que foi lançado o primeiro filme do Deadpool") 
        }
    }
    return location = "./index.html"
}

// TA CERTO

