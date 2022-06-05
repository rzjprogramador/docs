/*
{ 
  indeRef: 0, 
  local: '',
  acao: '',
  alvo: '',
  tipo: '',
  comunicacao: '',
  processos: '',
  observacoes: '',
},
*/

[
  {
    indeRef: 1,
    local: `entity/`,
    acao: "entity",
    alvo: "",
    tipo: `classe`,
    comunicacao: "",
    processos: "classe da entidade",
    observacoes: "",
  },
  {
    indeRef: 2,
    local: `repository/`,
    acao: "formato do repository",
    alvo: "",
    tipo: `contrato/Repositorio`,
    comunicacao: "",
    processos:
      "interface do repositorio com metodo que vai ter e o ,alvo: '',tipo de dado que vai receber",
    observacoes: "",
  },
  {
    indeRef: 3,
    local: `repository/`,
    acao: "DTO/Data/Request para metodo do formato repositorio",
    alvo: "",
    tipo: `contrato/DTO`,
    comunicacao: "",
    processos: "tipagem dos dados para receber no metodo",
    observacoes: "",
  },
  {
    indeRef: 4,
    local: `repository/prisma`,
    acao: "implementacao contrato",
    alvo: "Repositorio",
    tipo: `classe`,
    comunicacao: `se comunica com o prisma para persistir no banco`,
    processos: `cria um novo objeto da entidade :: recebe os dados ..acessa a tabelaAlvo.metodoObjetivo( { repassa os dados que recebeu })`,
    observacoes: ``,
  },
  {
    indeRef: 5,
    local: "usecase/",
    acao: "regras de negocio e acaoObjetivo",
    alvo: "servico",
    tipo: "classe de servico",
    comunicacao: "integro via contrutor um contrato de repositorio",
    processos:
      "faco o contrato de que dados poderam ser criados DTO/Request - uso este contrato nos dados desempacotados do metodo execute() -- uso como meu atributo o integrado repositorio e apra o seu metodoObjetivo dou os dados que receberei desempacotados",
    observacoes:
      "obs: antes de concretizar o objetivo posso fazer regras de negocio.",
  },
  {
    indeRef: 6,
    local: "",
    acao: "test",
    alvo: "test do Servico",
    tipo: "",
    comunicacao: "",
    processos: `
    criar um objetoDaEntidade :: pra isto instancio o new ServicoDeCriacao`,
    observacoes: "",
  },
];
