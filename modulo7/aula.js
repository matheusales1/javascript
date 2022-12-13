let lista = [
    {id:1, nome:'Matheus',Sobrenome:'Sales'},
    {id:2, nome:'Emily',Sobrenome:'Gabriela'},
    {id:3, nome:'Felipes',Sobrenome:'silva'}
];

let pessoa = lista.find(function(item){
    return (item.id == 3) ? true:false;
});

let res = pessoa;

console.log(res);