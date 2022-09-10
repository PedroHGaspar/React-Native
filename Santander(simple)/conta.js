export class CaixaEletronico {
  constructor(saldoInicial, valorInput) {
    this.saldo = saldoInicial;
    this.valorInput = valorInput;

    this.saque = function (valorInput) {
      this.menos = this.saldo - Number(valorInput);
      this.saquei = this.menos - (2.5 / 100) * this.menos;
      return this.saquei;
    };
    this.deposito = function (valorInput) {
      this.depositei = this.saldo + Number(valorInput) + (1 / 100) * valorInput;
      return this.depositei;
    };
  }
}
