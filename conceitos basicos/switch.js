let dia = 6;
let diaNome = '';


/*switch (dia) {
    case 1:
         diaNome ="Segunda";
         break;
    case 2:
         diaNome ="Terça";
         break;
    case 3:
         diaNome ="Quarta";
         break;
    case 4:
         diaNome ="Quinta";
         break;
    case 5:
         diaNome ="Sexta";
         break;
    case 6:
         diaNome ="Sábado";
         break;
    case 7:
         diaNome ="Domingo";
         break;
}*/

switch(dia){
    case 6:
    diaNome = "Final de semana";
        break;
    case 7:
    diaNome = "Final de semana";
        break;
    default:
        diaNome = 'Dia de Semana';
        break;

}
document.querySelector("#dia").innerHTML = "Hoje é "+diaNome;