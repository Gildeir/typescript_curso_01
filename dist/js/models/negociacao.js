export default class {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get _data() {
        return this.data;
    }
    get _quantidade() {
        return this.quantidade;
    }
    get _valor() {
        return this.valor;
    }
}
