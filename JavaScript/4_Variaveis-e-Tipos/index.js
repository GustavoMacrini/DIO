
// é mais usado o let para declaração de variavel
// variavel é declarada em camel
var firstName = 'João';
var lastName = 'Souza';

if(firstName === 'João'){
    // var dentro do if tem escopo global
    var firstName = 'Pedro';
    let lastName = 'Silva';
}

console.log(firstName, lastName);

//--------------------------------------------------------

const FIRST_NAME = "Gustavo";
console.log(FIRST_NAME); //constante é escrita em letra maiuscula e com _


//--------------------------------------------------------

let nome = 'João';
let sobrenome = 'Pedro';

// concatena
let concatenado = nome.concat(sobrenome);
console.log(concatenado);

// contem? returna bool
let frase = "Olá, tudo bem?";
console.log(frase.includes("tudo"));


//--------------------------------------------------------

let array = [];

array.push(3); //add no final
array.push(2);
array.pop(); //remove do final
array.push(5);
array.shift(); //remove do inicio
array.unshift(1); //add no inicio
array.reverse(); //inverte a ordem dos elementos


//--------------------------------------------------------

let person = {
    name: 'John',
    age: 20
};
console.log(person);
console.log(Object.values(person));
console.log(Object.keys(person));

let obj= {};
obj.name = "Julia";
obj.age = 20;
console.log(obj);

