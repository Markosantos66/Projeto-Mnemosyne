document.querySelector(' .btn-criar').addEventListener('click', function(event){
    event.preventDefault();
//pega div que contem todas as imagens.
    let caixaDeImagens = document.querySelector('.img-container')

    //Pegar imagens
    let imagens = caixaDeImagens.querySelectorAll('img');

    console.log(imagens);

    if(imagens.length === 0){
        let cxAlerta = document.getElementById('cx-alerta')
    }
})