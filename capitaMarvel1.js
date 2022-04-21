

var btnres = document.getElementById('buttonres')
btnres.addEventListener('click', clicar)

function clicar() {
    var resUm = prompt("ATENÇÃO - Para responder A digite o primeiro nome da Capitã Marvel. E para responder B digite o sobrenome da Capitã Marvel.") 
    var contador = 1
    while (contador >= 0) {
        if (resUm.toLowerCase() == "carol") {
            return location = "./capitaMarvel2A.html"
        } else if (resUm.toLowerCase() == "danvers"){
            return location = "./capitaMarvel2B.html"
        }        
        else if((resUm != 'carol' || resUm != 'danvers') && contador > 0){
            
            alert(`Resposta incorreta, você tem mais ${contador} chance. Se errar, irá voltar ao início.`)
            var resUm = prompt("ATENÇÃO - Para responder A digite o primeiro nome da Capitã Marvel. E para responder B digite o sobrenome da Capitã Marvel.")
            contador--
            
        }else{
            alert('Você perdeu suas chances, terá que voltar para o início!')
            return location = "./index.html"
        }
    }
    
}
// ta certo



    









