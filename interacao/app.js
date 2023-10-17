function carregar(){
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');

    var data = new Date()
    var hora = data.getHours()

    if(hora >= 0 && hora < 12)
    {
        //Bom dia
        img.src = 'icones/dia.png'
        msg.innerHTML = `Bom dia, prezado cliente`
    } 
    else if(hora >= 12 && hora < 18)
    {
        //Boa tarde
        img.src = 'icones/tarde.png'
        msg.innerHTML = `Boa tarde, prezado cliente`
    }
    else
    {
        //Boa noite
        img.src = 'icones/noite.png'
        msg.innerHTML = `Boa noite, prezado cliente`
        //document.body.style.background = '#444444'
    }
}

/*Janelas popup*/

function avisogeral(){
    alert("Indisponível este site é apenas uma amostra!")
}

function chamawhast(){
    whats.style.display='block'
}
function fechawhast(){
    whats.style.display='none'
}

/*janela instagram*/
function chamainsta(){
    insta.style.display='block'
}
function fechaInsta(){
    insta.style.display='none'
}

/*Janela endereço*/

function mostraEndereco(){
    endereco.style.display='block'
}

function fechaEndereco(){
    endereco.style.display='none'
}