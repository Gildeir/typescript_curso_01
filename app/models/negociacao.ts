export default class Negociacao {

  constructor(
    private _data: Date, 
    private _quantidade: number, 
    private _valor: number

  ){}

  get data(): Date {
    return this._data
  }
  get quantidade(): number {
    return this._quantidade
  }
  get valor(): number {
    return this._valor
  }

  public static criaDe(dataString: string, quantidadeString: string, valorString: string) {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

}