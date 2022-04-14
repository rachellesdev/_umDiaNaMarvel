var btnvol = document.getElementById('buttonvoltar')
btnvol.addEventListener('mouseenter', entrar)
btnvol.addEventListener('mouseout', sair)

function entrar(){
    btnvol.style.background = '#2A0D0D'
}

function sair(){
    btnvol.style.background = '#00080c'
}

function returnIndex() {
    location.href = "./index.html";
  }

