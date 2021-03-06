import { DiasDaSemana } from '../enums/dias-da-semana.js';
import Negociacao from '../models/negociacao.js';
import { Negociacoes } from '../models/negociaoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';


export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView');
    
    constructor() {

      this.inputData = document.querySelector('#data');
      this.inputQuantidade = document.querySelector('#quantidade');
      this.inputValor = document.querySelector('#valor');
      this.negociacoesView.update(this.negociacoes)
    }

    public adiciona(): void {

        const negociacao = Negociacao.criaDe(
          this.inputData.value,
          this.inputQuantidade.value,
          this.inputQuantidade.value
        );
        if (!this.ehDiaUtil(negociacao.data)) {
          return this.mensagemView.update("Negociações apenas em dias úteis")
        } 
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private ehDiaUtil(data: Date) {
      return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    
    private atualizaView() {
      const MSG = 'Negociacao adicionada com sucesso!';
      this.negociacoesView.update(this.negociacoes);
      this.mensagemView.update(MSG);
    }
}