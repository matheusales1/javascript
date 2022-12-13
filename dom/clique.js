/*function clicou(){
    const teste = document.querySelector('.teste1');
    const ul = document.querySelector('ul');

    let newUl = document.createElement('ul');

    for(let i = 0; i < 5; i++ ){
        let newLi = document.createElement('li');
        newLi.innerHTML = "Elemento " + i;
        newUl.append(newLi);
    }

    ul.before(newUl);
}

function clicou(){
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type','password');
        botao.innerText = 'Mostrar senha';
    } else {
        input.setAttribute('type','text');
        botao.innerText = 'Ocultar senha'
    } 
}*/
function clicou(){
    const li = document.querySelector('li');

    li.style.backgroundColor = '#00F';
    li.style.fontSize = '25px';

}
