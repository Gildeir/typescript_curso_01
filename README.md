# typescript-curso1
# Inicializando
## Entre na pasta do projeto e digite no terminal:
npm install 

## Qual o modelo de negócio de uma negociação?
* Não pode ser modificada depois de criada
* Obrigatoriamente tem uma data, quantidade e valor.
* Seu volume é calculado multiplicando-se a quantidade negociada no dia pelo valor negociado.

## Modele a classe negociação
  atributos privador:
   - data
   - quantidade
   - valor

 lembre-se do constructor e os retornos

 Para acessar esses valores criar getters
 ex: get data(){ return ...}

 ## crie o controller - negociacaoController
  Para buscar os dados dos inputs no formunlário criar variaveis privadas
   Ex: private inputData: HTMLElement
   Ex: this.inputData = document.querySelector('#date');

   ## No controller crie metodo adicion para retornar os inputsData...
   testar com console log

   ## no arquivo app.ts

    - importar a função Negociação controller 
    - instanciar um novo objeto em uma variavel controller ex: controller = new...

   * toda vez que houver um submit no formulário chamar o método adiciona localizado no controller

    1 pega o form: form = docu...('form')

    2 adiciona funcionao listener form.addEventListener('submit', event => )...
    
    3 chamar dentro da função "controller.adiciona()"