import { jogadoresDB } from "../dados/jogadores/jogadores_db";
import Jogador from "../dados/jogadores/modelos_jogadores";

export default class TabelaJogadores extends HTMLElement {
  static readonly tag: string = "tabela-jogadores";

  private static readonly template: string = `
    <table>
      <thead>
        <th>Nome</th>
        <th>País</th>
        <th>Estado</th>
        <th>Cidade</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>Data de Nascimento</th>
        <th>Nível | Elo</th>
        <th>Foto</th>
      </thead>
      <tbody></tbody>
    </table>
  `;
  private static readonly jogadores: Jogador[] = jogadoresDB;
  private static readonly hyphen: string = "&mdash;";

  private jogadorAtual: Jogador = TabelaJogadores.jogadores[0];
  private linhaAtual: HTMLTableRowElement = <HTMLTableRowElement>(
    document.createElement("tr")
  );

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = TabelaJogadores.template;

    const corpoTabela: HTMLElement = <HTMLElement>this.querySelector("tbody");
    TabelaJogadores.jogadores.forEach((jogador: Jogador): void => {
      this.jogadorAtual = jogador;

      this.linhaAtual = <HTMLTableRowElement>document.createElement("tr");

      // 1. Nome
      this.adicionaCelulaNome();

      // 2. Onde você mora atualmente
      this.adicionaCelulaPais();
      this.adicionaCelulaEstado();
      this.adicionaCelulaCidade();

      // 3. Contato
      this.adicionaCelulaEmail();
      this.adicionaCelulaTelefone();

      // 4. Outros Dados Pessoais
      this.adicionaCelulaNascimento();

      // 5. Nível
      this.adicionaNivel();

      // 6. Foto
      this.adicionaCelulaFoto();

      // 7. Perfis Online


      corpoTabela.append(this.linhaAtual);
    });
  }

  //----------------------------------------------------------------------------

  private adicionaCelulaNome = (): void => {
    const celulaNome: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );
    celulaNome.innerHTML = this.jogadorAtual.nome;
    this.linhaAtual.append(celulaNome);
  };

  //----------------------------------------------------------------------------

  private adicionaCelulaPais = (): void => {
    const celulaPais: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );
    celulaPais.innerHTML = this.jogadorAtual.pais;
    this.linhaAtual.append(celulaPais);
  };

  private adicionaCelulaEstado = (): void => {
    const celulaEstado: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );
    celulaEstado.innerHTML = this.jogadorAtual.estado;
    this.linhaAtual.append(celulaEstado);
  };

  private adicionaCelulaCidade = (): void => {
    const celulaCidade: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );
    celulaCidade.innerHTML = this.jogadorAtual.cidade;
    this.linhaAtual.append(celulaCidade);
  };

  //----------------------------------------------------------------------------

  private adicionaCelulaEmail = (): void => {
    const celulaEmail: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );
    celulaEmail.innerHTML =
      this.jogadorAtual.contato?.email == null
        ? TabelaJogadores.hyphen
        : `<a href="mailto:${this.jogadorAtual.contato?.email}">${this.jogadorAtual.contato?.email}</a>`;
    this.linhaAtual.append(celulaEmail);
  };

  private adicionaCelulaTelefone = (): void => {
    const celulaTelefone: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );
    const telefone: string =
      this.jogadorAtual.contato?.telefone == null
        ? TabelaJogadores.hyphen
        : this.jogadorAtual.contato?.telefone.toString();

    celulaTelefone.innerHTML =
      telefone == TabelaJogadores.hyphen
        ? TabelaJogadores.hyphen
        : `<a href="tel:+${telefone}">${telefone}</a>`;
    this.linhaAtual.append(celulaTelefone);
  };

  //----------------------------------------------------------------------------

  private adicionaCelulaNascimento = (): void => {
    const celulaNascimento: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );

    const dataNascimento: Date = new Date(this.jogadorAtual.nascimento);
    const dia: number = dataNascimento.getDate() + 1;
    const mes: number = dataNascimento.getMonth();
    const ano: number = dataNascimento.getFullYear();

    celulaNascimento.innerHTML = `${dia}-${mes}-${ano}`;
    this.linhaAtual.append(celulaNascimento);
  };

  //----------------------------------------------------------------------------

  private adicionaNivel = (): void => {
    const celulaNivel: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );

    const elo: number = this.jogadorAtual.nivel.elo;
    const rank: string = this.jogadorAtual.nivel.rank;

    celulaNivel.innerHTML = `${rank} | ${elo}`;

    this.linhaAtual.append(celulaNivel);
  };

  //----------------------------------------------------------------------------

  private adicionaCelulaFoto = (): void => {
    const celulaFoto: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );
    celulaFoto.innerHTML = `<a href="${this.jogadorAtual.foto?.href}">Link</a>`;
    this.linhaAtual.append(celulaFoto);
  };

  //----------------------------------------------------------------------------

  private adicionaCelulaPerfisOnline = (): void => {
    
  }
}
