var sum = (x, y) => { return x + y }
console.log(sum(2, 3))

var hello = text => { return text + ' Nodejs' }
console.log(hello('Hello'))

var nice = () => 'Niiiiice'
console.log(nice())

var sumNice = (x, y) => x + y
console.log(sumNice(1, 1))

//Rest parameters
var sumFoda = (...numbers) => numbers.reduce((anterior, atual) => anterior + atual, 0)
console.log(sumFoda(1,2,3))

//Rest parameters jeitinho funcional
var sumIncremental = (anterior, atual) => anterior + atual
var sumFoda2 = (...numbers) => numbers.reduce(sumIncremental, 0)
console.log(sumFoda2(1,2,3))
