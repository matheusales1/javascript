/*function loadPosts(){
    document.querySelector("#posts").innerHTML = 'carregando..';

    let req = fetch('https://jsonplaceholder.typicode.com/posts')

    .then(function(resultado){
        return resultado.json();
    })
    .then(function(json){
        montarBlog(json);       
    })
    .catch(function(error){
        console.log('Deu problema')
    });
}

function montarBlog(lista){
    let html = '';

    for(let i in lista){
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'</br>';
        html += '<hr/>'; 
    }
    document.querySelector("#posts").innerHTML = html;

}*/

/* mesmo codigo de cima porem usando async e await 
async function loadPosts(){
    document.querySelector("#posts").innerHTML = 'carregando..';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();

    montarBlog(json);
}

function montarBlog(lista){
    let html = '';

    for(let i in lista){
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'</br>';
        html += '<hr/>'; 
    }
    document.querySelector("#posts").innerHTML = html;

}*/

async function inserirPost(){
    document.getElementById('posts').innerHTML = 'Caregando...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title: 'Titulo de teste',
            body:'Corpo de teste',
            userId:4
        }),
        headers:{
            'Content-Type':'Application/json'
        }
    
    });
    let json = await req.json();

    console.log(json);


}