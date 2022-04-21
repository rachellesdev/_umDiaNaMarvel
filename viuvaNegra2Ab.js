

var btnres = document.getElementById('buttonres')
btnres.addEventListener('click', clicar)

function clicar() {
    var resUm = prompt("ATENÇÃO - Para responder A digite o primeiro nome do Agente Coulson. E para responder B digite o primeiro nome da Agente Hill.") 
    var contador = 1
    while (contador >= 0) {
        if (resUm.toLowerCase() == "phillip") {
            return location = "viuvaNegra3A.html"
        } else if (resUm.toLowerCase() == "maria"){
            return location = "./viuvaNegra3B.html"
        }        
        else if((resUm != 'phillip' || resUm != 'maria') && contador > 0){
            
            alert(`Resposta incorreta, você tem mais ${contador} chance. Se errar, irá voltar ao início.`)
            var resUm = prompt("ATENÇÃO - Para responder A digite o primeiro nome do Agente Coulson. E para responder B digite o primeiro nome da Agente Hill.") 
            contador--
            
        }else{
            alert('Você perdeu suas chances, terá que voltar para o início!')
            return location = "./index.html"
        }
    }
    
} // ta certo



    









