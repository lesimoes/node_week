var Cachorro = require('./Cachorro')

var dog = new Cachorro('Dog');
console.log(`Agora vc tem um cachorro chamado ${dog.getNome()} que lati assim ${dog.latir()}`)
