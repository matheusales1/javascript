/*let timer;

function comecar(){
    timer = setInterval(showTime,1000);

}
function parar(){
    clearInterval(timer);   
}

function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let text = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = text;
}*/
let time ;
function rodar(){
    time = setTimeout(function(){
    document.querySelector('.demo').innerHTML = 'Rodou!';
    },2000);
}
function parar(){
    clearTimeout(time);
}
