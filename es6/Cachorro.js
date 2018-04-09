class Cachorro{
  constructor(nome){
    this._nome = nome
  }
  latir(){
    return 'Auuuuuuu!'
  }
  getNome(){
    return this._nome
  }
}


module.exports = Cachorro
