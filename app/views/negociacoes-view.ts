export class NegociacoesView {

  constructor(seletor: string) {

  }
  template(): string {
      return `
      <table class="table table-hover table-borderes">
          <thead>
              <tr>
                  <th>Data</th>
                  <th>Quantidade</th>
                  <th>Valor</th>
              </tr>
          <thead>
          <tbody>
          </tbody>
      </table>

  `
  }
}