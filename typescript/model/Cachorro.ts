export default class Cachorro {

  private nome: string;

  constructor(name: string){
    this.nome = name;
  }

  public getNome(){
    return this.nome + '  ' +this.latir()
  }
  private latir(){
    return 'Aaauuuuu'
  }

}
