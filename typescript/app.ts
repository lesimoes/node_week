import Cachorro from './model/Cachorro';

var dog = new Cachorro('Dog')
console.log(`Agora vc tem um cachorro chamado ${dog.getNome()}`)

var numbers: Array<number>;
numbers = [1,2,3]
console.log(numbers)

var letters = ['A', 'B']
console.log(letters)

var dogs: any;
dogs = ['Marrie', 'Bolinha']
console.log(dogs)

function soma(valor1: number, valor2: number) : number {
  return valor1 + valor2
}
console.log(soma(1, 2))
