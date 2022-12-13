
function CalPct(x,y){
    let pct = (y/x)*100;
    return pct;   
}
 
//let x = 4141.39;
//let y = 141.39;
let pct = CalPct(x,y);
console.log(`${pct}% de ${x} é ${y}`);

/*
function validar(usuario,senha){
    if(usuario === 'pedro' && senha === '123'){
        return true;
    }else{
        return false;
    }
}

let usuario = 'pedro';
let senha = '123';
let validacao = validar(usuario,senha);
if(validacao){
    console.log("Acesso confirmado");
} else{
    console.log("Acesso negado");
}

function square(x){
    return x * x;
}

function add(a,b){
    return square(a) + square(b);

}

console.log(add(5,10))*/