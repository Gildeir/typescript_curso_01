import negociacaoController from "../controllers/negociacao-controller";
export default class negociacoes {
    adiciona() {
        const negociacao = new negociacaoController();
        negociacao.adiciona();
    }
}
