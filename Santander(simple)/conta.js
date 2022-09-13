// export class CaixaEletronico {
//   constructor(saldoInicial, valorInput) {
//     this.saldo = saldoInicial;
//     this.valorInput = valorInput;

//     this.saque = function (valorInput) {
//       this.menos = this.saldo - Number(valorInput);
//       this.saquei = this.menos - (2.5 / 100) * this.menos;
//       return this.saquei;
//     };
//     this.deposito = function (valorInput) {
//       this.depositei = this.saldo + Number(valorInput) + (1 / 100) * valorInput;
//       return this.depositei;
//     };
//   }
// }


//ANTES EU TINHA FEITO ACIMA, PORÉM ESTAVA DANDO ERRO POR QUE O SALDO NAO ESTAVA PROTEGIDO, E TAMBÉM
//PORQUE NAO PODE TER FUNÇÕES DENTRO DO CONSTRUCTOR. 


export class CaixaEletronico {

  _saldo = 7832.92; // dessa mandeira o saldo fica protegido, com _ na frente.
  

  get saldo(){
    return this._saldo;
  }


  constructor(saldo) {
    this._saldo = saldo; // essa daqui é como se fosse a chave do cadeado, para ter acesso ao saldo e ver o mesmo.
  }

    saque (valorInput) {
      this.menos = this._saldo - Number(valorInput);
      this.saquei = this.menos - (2.5 / 100) * this.menos;
      return this.saquei;
    }

    deposito (valorInput) {
      this.depositei = this._saldo + Number(valorInput) + (1 / 100) * valorInput;
      return this.depositei;
    }
  

}