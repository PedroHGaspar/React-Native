export class Conta{
  constructor(saldo){
    this.saldo = saldo;
  }
  sacar(){
    return`Você sacou `;
  }
  depositar(){
    return`Você depositou `;
  }
}