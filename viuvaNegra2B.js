var btnres = document.getElementById('buttonres')
btnres.addEventListener('click', clicar)

function clicar() {
    var resUm = prompt("Sua resposta é A, B, C  ou D?") 
    var contador = 1
    while (contador >= 0) {
        if (resUm.toLowerCase() == "c") {
            return location = "./viuvaNegra2Bb.html"
        } 
        else if((resUm.toLowerCase() != "c") && contador > 0){
            
            alert(`Resposta incorreta, você tem mais ${contador} chance. Se errar, irá voltar ao início.`)
            var resUm = prompt("Sua resposta é A, B, C  ou D?")
            contador--
            
        }else{
            alert('Você perdeu suas chances, terá que voltar para o início!')
            return location = "./index.html"
        }
    }
    
} // ta certo