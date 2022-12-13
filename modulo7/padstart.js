let cartao = '1223454478951234';

let lastDigits = cartao.slice(-4);

let mascarado = lastDigits.padStart(16,'*');
console.log("Este é seu cartão? "+mascarado);