let pessoa = {
    nome: 'Matheus',
    sobrenome:'Sales',
    idade:90,
    social:{
        facebook:'Junior',
        instagram:'matdesales'
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

console.log(pessoa.nomeCompleto());

let somar = (y,x)=> y+x;

