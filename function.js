// ----------------LLAVES DE ENCRIPTACION----------------

const diccionarioEncriptado = {
    'e' : 'enter',
    'i' : 'imes',
    'a' : 'ai',
    'o' : 'ober',
    'u' : 'ufat'
};

const diccionarioDesencriptado = {
    'enter' : 'e',
    'imes' : 'i',
    'ai' : 'a',
    'ober' : 'o',
    'ufat' : 'u'
};

// ----------------COPIAR AL PORTAPAPELES----------------

function copyToClipboard(text) {
    var sampleTextarea = document.createElement("textarea");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = text;
    sampleTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(sampleTextarea);
}

function myFunction(){
    var copyText = document.getElementById("answer");
    copyToClipboard(copyText.value);
    alert("Copiado al Portapapeles")
}

// ----------------DOCUMENT.READY----------------


$(function () {

    $('#empty-box').show();

    $('#boton-encriptar').click(function() {

        $('#empty-box').hide();
        $('#answer-box').show();

        let text = $('#campo-texto').val();

        let encriptacion = text.replace(/e|i|a|o|u/g, matched => diccionarioEncriptado[matched]);

        $('#answer').html(encriptacion)

    })

    $('#boton-desencriptar').click(function() {

        $('#empty-box').hide();
        $('#answer-box').show();

        let text = $('#campo-texto').val();

        let desencriptacion = text.replace(/enter|imes|ai|ober|ufat/g, matched => diccionarioDesencriptado[matched]);

        $('#answer').html(desencriptacion)

    });

})

function adjustHeight(el){

    if (screen.width < 768) {
        el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "60px";
    }
}