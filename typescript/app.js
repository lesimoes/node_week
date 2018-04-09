"use strict";
exports.__esModule = true;
var Cachorro_1 = require("./model/Cachorro");
var dog = new Cachorro_1["default"]('Dog');
console.log("Agora vc tem um cachorro chamado " + dog.getNome());
var numbers;
numbers = [1, 2, 3];
console.log(numbers);
var letters = ['A', 'B'];
console.log(letters);
var dogs;
dogs = ['Marrie', 'Bolinha'];
console.log(dogs);
function soma(valor1, valor2) {
    return valor1 + valor2;
}
console.log(soma(1, 2));
