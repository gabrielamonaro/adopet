const listaInputSenha = document.querySelectorAll('.olho');

const imgDesabilitado = document.createElement("img");
imgDesabilitado.classList.add('olho-img');
imgDesabilitado.setAttribute('src','/assets/img/icones/view.png')

const imgHabilitado = document.createElement("img");
imgHabilitado.classList.add('olho-img');
imgHabilitado.setAttribute('src','/assets/img/icones/hidden.png')

listaInputSenha.forEach(caixaIcone => {
    caixaIcone.addEventListener('click', () => {
  
        const input = caixaIcone.parentElement.querySelector('input');

        if(input.type == 'password')
        {
            input.type = 'text';
            caixaIcone.querySelector('img').setAttribute('src', '/assets/img/icones/view.png');
        }
        else
        {
            input.type = 'password';
            caixaIcone.querySelector('img').setAttribute('src', '/assets/img/icones/hidden.png');
        }
    })    
});
