

var btnres = document.getElementById('buttonres')
btnres.addEventListener('click', clicar)

function clicar() {
    var resUm = prompt("ATENÇÃO - Para responder A digite o primeiro nome da Viúva Negra. E para responder B digite o sobrenome da Viúva Negra.") 
    var contador = 1
    while (contador >= 0) {
        if (resUm.toLowerCase() == "natasha") {
            return location = "viuvaNegra2A.html"
        } else if (resUm.toLowerCase() == "romanoff"){
            return location = "./viuvaNegra2B.html"
        }        
        else if((resUm != 'natasha' || resUm != 'romanoff') && contador > 0){
            
            alert(`Resposta incorreta, você tem mais ${contador} chance. Se errar, irá voltar ao início.`)
            var resUm = prompt("ATENÇÃO - Para responder A digite o primeiro nome da Viúva Negra. E para responder B digite o sobrenome da Viúva Negra.") 
            contador--
            
        }else{
            alert('Você perdeu suas chances, terá que voltar para o início!')
            return location = "./index.html"
        }
    }
    
}
// ta certo



    









