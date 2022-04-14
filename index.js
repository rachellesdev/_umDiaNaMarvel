var btnwidow = document.getElementById('buttonwidow')
btnwidow.addEventListener('mouseenter', entrar)
btnwidow.addEventListener('mouseout', sair)

function entrar(){
    btnwidow.style.background = '#2A0D0D'
}

function sair(){
    btnwidow.style.background = '#00080c'
}

var btndeadpool = document.getElementById('buttondeadpool')
btndeadpool.addEventListener('mouseenter', entrard)
btndeadpool.addEventListener('mouseout', saird)

function entrard(){
    btndeadpool.style.background = '#2A0D0D'
}

function saird(){
    btndeadpool.style.background = '#00080c'
}

var btncapita = document.getElementById('buttoncapita')
btncapita.addEventListener('mouseenter', entrarc)
btncapita.addEventListener('mouseout', sairc)

function entrarc(){
    btncapita.style.background = '#2A0D0D'
}

function sairc(){
    btncapita.style.background = '#00080c'
}

function startDeadpool() {
    location.href = "./deadpool1.html";
}

