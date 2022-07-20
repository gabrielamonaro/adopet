const campoSenha = document.querySelector('#senha');
const campoConfirma = document.querySelector('#confirmacao-senha');

campoConfirma.addEventListener('blur', () =>{
    validaSenha(campoConfirma);
})

function validaSenha(campoConfirma)
{
    let mensagem = '';

    if (campoSenha.value != campoConfirma.value)
    {
        mensagem = 'As senhas não condizem';
    }
    campoConfirma.setCustomValidity(mensagem);
}