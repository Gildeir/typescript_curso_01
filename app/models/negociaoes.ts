import negociacaoController from "../controllers/negociacao-controller";

export default class negociacoes {

  private negociacoes: Array<Negociacao> = []
  
  adiciona() {
    const negociacao = new negociacaoController()
    negociacao.adiciona()
  }
}