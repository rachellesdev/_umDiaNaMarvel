

var btnres = document.getElementById('buttonres')
btnres.addEventListener('click', clicar)

function clicar() {
    var resUm = prompt("ATENÇÃO - Para responder A digite o primeiro nome do Gavião Arqueiro, que é o parceiro da Viúva Negra. E para responder B digite o sobrenome do Gavião Arqueiro.") 
    var contador = 1
    while (contador >= 0) {
        if (resUm.toLowerCase() == "clint") {
            return location = "./viuvaNegra2A.html"
        } else if (resUm.toLowerCase() == "barton"){
            return location = "./viuvaNegra3C.html"
        }        
        else if((resUm != 'clint' || resUm != 'barton') && contador > 0){
            
            alert(`Resposta incorreta, você tem mais ${contador} chance. Se errar, irá voltar ao início.`)
            var resUm = prompt("ATENÇÃO - Para responder A digite o primeiro nome do Gavião Arqueiro, que é o parceiro da Viúva Negra. E para responder B digite o sobrenome do Gavião Arqueiro.")
            contador--
            
        }else{
            alert('Você perdeu suas chances, terá que voltar para o início!')
            return location = "./index.html"
        }
    }
    
} // ta certo



    









