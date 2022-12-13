function adcionar(nomes,...novosNomes){
    novoArray = [
        ...nomes,
        ...novosNomes
    ];
    return novoArray;
  

}

let nomes = ["Matheus","Gabriel"];

let outros = adcionar(nomes,"Emily","Patricia");

console.log(outros);
