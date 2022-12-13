/*async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();
    body.append('title','bla bla bla');
    body.append('arquivo',arquivo);

    let req = await fetch('https://www.meusite.com.br/upload',{
        method:'POST',
        body:body,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    
}

function mostrar(){
    let imagem = document.getElementById("imagem").files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;
    
    document.getElementById("area").appendChild(img);
}

*/

function mostrar(){
    let reader = new FileReader();
    let imagem = document.getElementById('imagem').files[0];

    reader.onload = function(){
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').append(img);
    }
    
    reader.readAsDataURL(imagem)
}