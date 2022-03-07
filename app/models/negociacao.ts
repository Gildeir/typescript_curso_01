export default class Negociacao {

  constructor(
    private data: Date, 
    private quantidade: Number, 
    private valor: Number) {

  }

  get _data() {
    return this.data
  }
  get _quantidade() {
    return this.quantidade
  }
  get _valor() {
    return this.valor
  }

}