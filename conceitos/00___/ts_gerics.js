{
  nome: 'Generics',

  contexto: ``,

  explicado: `
  GENERICS

resumo: É uma funcao pra dizer o tipo via args depois quando for usar.

pense como uma funcaoGenerica que recebera um tipo como Arg.
este Arg sera simbolizado por uma letra reserva "T" e declarado o que se espera deste  T.

o simbolo em funcao generica ficam dentro de <> ao inves de () .

declaracao: declare 'ANTES" do que vai usar, se for usar para args declare antes dos () , se for usar para retorno de funcao declare "ANTES" DE { } ONDE ACABA A DECLARACAO DA FUNCAO.

uso: 
onde for invocala passa a definicao de qual e o real valor do Simbolo T no caso .

 obs: definiu um simbolo generico que é um tipo nao pode mudar só  é setado uma vez.
 
o simbolo é do tipo unknow que é um desconhecido ate o momento, e espera ser definido quando for utilizar executar este desconhecido passando sua real definicao que tipo na real vai ser .

definicao_do_simbolo:
posso definir na declaracao com heranca >> T extends ...tipo... // deste tipo nao preciso defini-lo no uso.

ou definir no uso na invocacao
funcao() <Tipo> // desta forma ja estou defindo no uso.

`,

convencoes: `
convencao simbolos:
S : state/ stado
T: type/ tipo
K: key/ chave
V: value/ valor
E: element/ elemento
`,

  exemplos: `
  
  func criaPost <T> ( ) { faça... }

// usar invocar a funcao;
criaPost<string>() 

// exemplo para tipo que PODE SER de metodo create
Promise<T extends any | IUser = IUser>
narrativa: vai se do tipo Promise any OU IUser e o default será = IUser


  `,
}