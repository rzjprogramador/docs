{
  ANOTADOS_CLASSIFICAR: `
  
  LICAO CASA JUN/22
// 

- path alias para js buildado Mang aos 12:00 

TESTS COM REPO INMEMORY
RepoInMemory -- Dani tests aos 13:52 : https://youtu.be/18Dgf7lb9QA

aos 26:25 porque usar o RepoInMemory pra testar na suite...assim vc usa o repo em memoria e testa se esta funcionando o servico , o contrato de Repos e a Classe Entidade com o seu objetivo neste caso de criar.

....
- 
- desistir heranca na entidade , colocar input de dados auxiliares nos ...args opcionais de onde constroi...no service. injetando o que é do tipo InputAuxiliar
- 
- tentar no prototype automatico :
- criar o objeto dentro ou  fora ??? da funcao service e usar este objeto ao inves de tentar usar a funcao diretamente..pra ver se ela sai do construtor do proto... e entra como propriedade no proto.

- se der certo ::
 licao: nunca invoque somente uma funcao dentro de outra... sempre use o resultado de uma funcao ..ou seja  crie  e capture um objeto de referencia fora ou dentro ??? que tera como valor a funcao há ser usada e use este objeto referencia.
 
>> ver proto no node com.node inspector
 https://stackoverflow.com/questions/12536510/view-methods-of-node-js-string-prototype/12536773#12536773
 
.....
atalho diretorio linux : https://www.vivaolinux.com.br/topico/Iniciantes-no-Linux/atalho-para-pasta-na-linha-de-comando

- aula 26 graph do Miranda- resolver yrivial , tambem ensina fazer contador baseado em milesegundos da  data.
- 
- falta update no cliente_pj ou user
aos 1: 08:00 >> update e clausulas disponiveis para este metodo update do prisma where , quando & data , dados em >> https://youtu.be/8IwUvk6hZaI


- trocar cenarios  por possibilidades.

- criar setup/ projectInfo com nome projeto etc.. pode ser class statica ou obj.
- 
 - contrato para entidades abstratas :
contracts_abstracts  || contracts_triviais

- mudar de getNome() >> getPresentation() ||
showPresentation()

- indeRef >> faz parte de Pagination
- ver quais destes dadosDeInteracao precisa salvar no banco ou LocalStorage


interface  para id, iddb, created, updated
>> RegistrationData >> StateRegister >> 
- 

// NODE =============

FLAGS OPCOES NODE RUN
opcao flag  " -r " do node ...esta mandando o node ler tal arquivo  ou modulo que vem a <seguir> antes mesmo de ler o codigo da aplicacao.

flag -p :: vai ler um arquivo antes de algo. porque por padrao o ts lê sempre primeiro o tsconfig por padrao...com o -p ele vai ler o arquivo.extensao que for passado depois do -p ao inves do tsconfig.
exemplo: -p tsconfigBuild.json


========

// SIGNIFICADOS =============

entidade = classe/objeto | resulta em objeto >> retorno de uma funcao | mais que uma propriedade ou conjunto de informacoes catalogadas  | objeto condutor a algum valor ou posicao | 
 
return = retorno | o que a funcao devolve | torna publico resultado da funcao | deu return ja cria um objeto com resultado da funcao.

- LCRUD = Listar - Criar - Ler - Atualizar - Deletar
- 
- Ciclo de Vida = LCRUD

-usar_acao:   no invocar / instanciar / criar um new  objeto da classe

variaveis:  tudo que pode variar, um valor que pode ser genwrico dependendo do contexto ela pode trazer um valor diferente | polo unico | ponto de referencia | conforme o assunto podemos dar valor diferente a esta representacao | Duas caras é a mesma pessoa (variavel), mas em um lugar ela é boa (valor da variavel pessoa), em outro lugar ela é mal (valor da variavel pessoa em outro contexto)

parametros_argumentos_valores: {

resumo: `parametros sao variaveis (quando desempacotados) ou objetos (quando empacotados).

- essas variaveis usamos dentro da funcao, nos params vc declara "VC PEDE",  nos args o utilizador preenche os valores. "VC RECEBE" #ouro `,

 conceito: `Em objeto :: Para ter valores nas variaveis ou voce Marreta , ou PEDE em parametros e RECEBE nos argumentos dos parametros pedidos , quando o utilizador usar preenchendo com valores os argumentos na invocacao da funcao.`,
},

em_funcao: {
  manipulacao_de_parametros : `
PARA MANIPULAR VARIAVEIS VINDAS POR PARAMS TEMOS QUE CRIAR NOVAS VAR_AUXILIARES E COMO VALOR USAMOS OPERACOES COM AS QUE VIERAM DOS PARAMS
E DEVOLVEMOS ESSAS NOVAS MANIPULADAS

detalhe: Nas Expressoes sempre que precisamos de um resultado , criamos uma nova variavel psta capturar este resultado.
`,
},

dispor_para_o_clienteUsar = invocando_Funcionalidade()


Incorporar = é obter | ter acesso | assumir a posicao do alvo | receber | representar cada informacao recebida como minha propriedade ...para mexer em alho vc tem que ter acesso incorporar., 

formas_incorporar: [
conceito: 'sempre  incorporar no mesmo formato que recebeu ou importou...assim vc esta posicao e obtem o artefato alvo. ,

se_for_objeto: criar a mesma estrutura a incorporar , representando cada chave e passando por justa posicao passando para cada chave como valor a representacao do recebido objeto.

se_for_importado_externo: incorporar no mesmo formato que importou ex: se importou uma { funcao } incorpore no seu escopo de uso a funcao(),

se_for_do_mesmo_escopo_classe: ' use o this. e acesse a propriedade ou metodo alvo. "CHEGO ATE O ALVO, E TRAGO O ALVO " .',

]

==========

//  POO  //=====================
- precisa de propriedades >> faz um.contrato.
- precisa de metodos >> poem no contrato
- obs: metodo statico nao precisa estar no contrato.
- 
PROPRIEDADES
propriedades: sao variaveis, atributos para classe que nos objetos serao as  chaves que eles terao.

variaveis_auxiliares_da_classe: 
so crio props no topo da classe pra serem só da classe e nao dos objetos...elas serviram só para auxiliar em metodos da classe.

variaveis_chaves_dos_objetos:
crio no construtor e  no bloco de configuracao de variaveis do constdutor atribuo o this a cada variavel recebida com as da classe ... o this porque sera o objeto dono delas

- obs :
- posdo ligar as variaveis recebidas com as da classe com Object.assign ou no construtor
- declara-las somente como private readonly ...é um rack do Typescript. 



// THIS 
significado: 'este', 
narrativa: 'O OBJETO...' || 'A INSTANCIA ESTA...'
 pense: 'o objeto da vez... quando nascer...podera ou será...', 
 conceíto: `this é a representacao do proprio objeto a ser criado, e o que ele poderá acessar...o escopo acima. `,
- 
....//CONSTRUTOR :: permite que o objeto seja um modelo pra poder mudar de um objeto pro outro quando for invocado com o new cada um tera seu valor...por isso recebe parametros...porque se as variaveis da classe fossem só de escopo da classe ela pertence so a classe seus valores, e só sao utilizaveis na classe e sub classes conforme sua visibilidade....se for usar nos novos objetos sempre terao o mesmo valor sem o construtor.
 resumo o construtor permite que as props dos novos objetos gerados tenham seus proprios valores um diferente do outro.

- construtor é como se fosse uma funcao com argumentos pra propria classe/objeto...tipo a classe seria uma funcao que nela tem uma funcao com parametros...ao invocar/instanciar se preenche esssas variaveis com argumentos/valor do client.

pense: tenho o objeto agora preciso de propriedades com valores de fora, uso o construtor que é os parametros/variaveis... que importa entidades e as transformam em propriedades aqui neste objeto. 

tudo que importar sera uma propriedade no objeto com poderes do que foi importado.

se o que preciso é qualquer um que sabe fazer :: importo contratos/interfaces.

se o que preciso é uma rotina: importo funcoes ou classes

se preciso de valores finais primitivos importo primitivos.

....
// STATICOS // =========

props e metodos staticos nao vao para os objeserbjetosem criados....ficam estaticos só na classe.


- para acessar as propriedades da classe statica dentro dos seus metodos nao uso o this. uso o proprio Nome da Classe.

- 
==========

.......
// FUNCIONAL =======
funcoes: dependem de uma entrada pra gerar uma saida.
...

funcoes_analogias: `
Imagina o seguinte problema:
Imagine uma função como uma fábrica que recebe algo (parâmetros) e pode devolver algo (retorno) uma fábrica vai fazer todo o processo repetitivo que você precisar fazer, por exemplo se você precisa construir um lote de cadeiras, ao invés de fazer manualmente você cria uma fábrica(função) e dar os materiais (parâmetros) e espera ela montar (retorno)
......
Suponha que tu quer calcular a média de 2 valores mas deseja que esses 2 valores sejam inseridos pelo usuário... sem passagem de parâmetro não tem muito como fazer.
.....
Os parâmetros são como variáveis que tu usa dentro da função. Ai quando você for chamar essa função, você passa um valor para essas variáveis.

ex em js:  function somar(a,b){
  let total = a + b;
  console.log(total);
}

somar(2,3); //=> 5

os parâmetros são usados dentro da função e ao chamar a função você passa um valor para os parâmetros.
....
Sempre que você estiver repetindo escrita de código, será melhor criar uma função e "chamá-la" onde precisar.
.....


`,
......
FUNCAO  CONSTRUTORA :
Toda funcao que recebe dados e retorna estes dados é uma funcao construtora..e vai criar objetos....e cada objeto vai ocupar um espaco na memoria e herdara um prototipo do seu tipo com metodos deste tipo criado a disposicao pra usar...sem precisar recria-lo.
.....
//PROTOTYPE // ========

prototype: tenha como o PAI dos objetos todas instancias filhas tera o mesmo que o pai no seu registro __proto__ .
- 
.........

//  RESOLVENDO RETORNO NULLO  //=====================
o retorno null : pode ser pq nao ta conseguindo mapear a propriedade do schema com a prop da  base de dados pode ser la na base de dados ela esteja com algo diferente ... entao precisa fazer um resolver trivial psra esta prop.

trivial: 
resumo: dentro do seu  obj Pai a  prop com problema virará uma funcao que devolve o que o campo se propoem a devolver.

cria no consulta uma consulta Obj do Dono da Propriedade , que vai ter uma funcao resolvedora com o nome da propriedade com problema a ser resolvida o que retornar desta funcao sera o retorno deste campo.

use o obj do 1°  param que é o obj como veio da base de dados e use nele o que foi resilvido 
tutorial: https://youtu.be/uLRzYwQEBaM
.....
- tipo de dado: null nulo considere como vazio falta configurar seu valor, a propriedade existe mas é nula...ainda nao é a ideal.
- pode ser usado para campos para configurar depois.

- funcao: o que esta dentro do seu bloco {} é pra ser executado: pense: execute o resultado da ultima linha pra mim...
- 
=====
TS 

tipo : `passar um tipo é a mesma coisa de passar um objeto Nomeado , ou seja na declaracao passo A Referencia do objeto, ele ja foi definido como type ou interface e no uso do cliente este objeto é preenchido no args. `,


aliases_apelido_agrpador_de___tipos: {
Union com " | " pode ser de um tipo Ou do outro tipo.

Intersection com " & "  vai juntar todos os tipos passados no Alias Apelido , entao podera ser de um tipo E do outro.
...

opcionais : {
na_tipagem: pra declarar opcional >> colocar " ? " no fim da key/chave ou colocar o tipo e nulo ex: string | null

onde_for_usar: colocar "!" no fim do valor ou expressao a direita , para afirmar que existe o valor...

tipo_de_retorno_funcao: se for algum tipo e nulo ou undefined pode ao inves disto afirmar que é um tipo com "as"  Tipo.

// TYPE UTILITYS
contexto : todos utilitarios passando como alias apelido pra tipos novos ex: TipoNovo = Partial<TipoAlvo>
criando um tipo novo com utilidades de outros tipos.

Partial<TipoAlvo> // Transforma todas  as props do tipo alvo em opcionais, nao precisando colocar  "?" no tipo de origem, uso: bom para tipos dto de edicao.
....
Pick<TipoAlvo, 'pro1' | 'pro3'>
pick pega só as props do tipoAlvo que vc desejar

- use:  no cenario tipo grande.. use quando quero anular mais coisas..porque vou pegar poucos.

.......

Omit<TipoAlvo, "id" | "titulo" >
Omit ao contrario do Pick omite nao usa as props passadas. 

- use:  no cenario tipo grande.. use quando quero pegar mais coisas...porque omito poucas coisas que nao quero....pick e omit um é o inverso do outro.
...


// ===============================
JS
const var1 = '' 
let res = 1 == 2
console.log(res)


No Javascript vc nao usa o volor,vc usa o que faz chegar a este valor ex: o tipo da seu objetivo, combinacoes que chegam ao seu objetivo. ex: 
1 == 3 é string ? //pense:  o tipo de 1 que é numero comparado com o ripo de 3 que tambem e numero retorna como resultado uma string ? resposta: falso.
#ouro

// OPERADORES LOGICOS
&& AND / E.. : todas expressoes tem que ser verdade pra retornar >> true

 || OR / OU : todas expressoes tem que ser falsa pra retornar >> false
! NOT / NEGACAO 
!! 2 NOT NEGACAO E TRANSFORMA EM BOLEANO A VARIAVEL.

ex:
if (1 && 2 && 'oi' && true ) {
  console.log('Bom')
} else {
  console.log('OPS')
}
......


// ===============================
funcao: em classes funcao é o construtor , ponto de entrada de informantes e informacors
..

valores_de_objetos: {

conceito: `variaveis de objeto tem que ter valor. Para te-los ou vc Marreta ou pede em variaveis  nos  parametros e recebe os valores nos argumentos quando o utilizador preencher a invocacao da funcao ou classe.`,

  no_escopo_funcao: `Se nao marretar o valor fixo, tera que pedir nos parametros e receber os valores pedidos nos argumentos.  ` ,
},

//  PGM  //=====================

console: o que usar em variaveis  pra testar no console.log ja deu certo...vc pode retornar essas variaveis em expressao, porque o console ja comprovou que a expressao js ja tem retorno que procuras.

ESSENCIA ::
Cada Linha, comando, expressao seu retorno e Logico Verdeiro ou Falso.

O objetivo e sempre no final devolver retornar um Verdadeiro

A cada pedaco ou linha de codigo vc luta entre Verdadeiro e falso e o verdadeiro tem que vencer se seu objetivo é devolver Verdadeiro.


arvore_pgm:
estruturas: [ caixa, propriedade/ representante, valor/ saida  ]

- caixa: entrada | tronco |  borda | wrapper | agrupador,
- propriedade: processo| galho |  referencia | representa o valor | chave | key
- valor: saida | folhas | primitivo ou por apontamento referencia
- 
nivel,_acessos: 
pergunte aonde vc esta no codigo o que vc ja obteve te mostra aonde vc esta.... ai entao vc acessa o nivel da frente.

exemplo: se vc esta fora da caixa para acessar o valor acesse a caixa entrou, acesss a prop, entrou agora pode pegar o valor.

condutor : parametro pode te deixar em um nivel de posicionamente que te leve ao nivel alvo.

VALOR FINAL RESPOSTA
sempre se tem que dar um valor final 
pergunte : "QUE CAMINHO ME TRAZ RSTE VALOR FINAL"
ex: se for em uma classe o this te leva acessar o topo as props da classe.

se_precisa_devolver_valor unitario ..pode ser um primitivo , pergunte o caminho se ainda nao esta na posicao de tê-lo. 

se_precisa_devolver_mais_que_um_valor_com_props: é um objeto , "onde estou e qual o caminho?"

se_precisa_devolver_colecao_de__valores_com_props: é um array , "onde estou e qual o caminho?"

se_precisa_devolver_mais_que_um_valor_gerador_ou_modificador: é uma funcao, "onde estou e qual o caminho"
.....

// CRUD =====

pilares: [ projetoBaseDados, utilizador, acoesUtilizador ]

conceitoPilares: 
projetoBaseDados : sera um objeto que vai ter listas [ listas de utilizadorPrincipal , listas de cada acao que este utilizador pode fazer].


- A funcionalidade disponibilizar pro clienteUsar invocando

CRIAR : receber, incorporar recebido e pushar  pra colecao


SIMBOLOS
 chaves = '{} chaves bloco escopo para agrupar variaveis e metodos do mesmo assunto...ex: objeto.
ao inves  de criar variaveis soltas.' | 

'ENTAO ...FACA ESTA OPERACAO...' | 
'É UMA AREA PARA MANIPULACOES E OPERACOES COM O OBJETIVO DE DEVOLVER  UM OBJETO NO FINAL SE TIVER RETORNO OU SE FOR SÓ COMANDO ESTABELECER UMA ORDEM PARA OUTRO RETORNAR' | 'AREA PARA RESOLVER OPCOES RECEBIDAS NOS PARAMETROS E VAI CONFIGURAR OS ARGUMENTOS'

...
[] colchetes para agrupar valores, do mesmo assunto formando uma lista , ex: lista de uma chave|| tabela campo da mesma chave cada.
...
- argumento é o valor que é passado para o parametro.

- this é o proprio objeto , da acesso as variaveis entre os escopos dentro  do objeto na sua primeira camada a ultima...se for mudar de escopo dentro do obj e precisar de variavel deste mesmo  do escopo do topo em outros lugares /escopos acesse com this.
pense this == objeto, diga objeto.nome faca isto, objeto.variavel faca aquilo.

// ACESSOS
arvore_estrutura : 
- precisa acessar o filho... obtem o Pai pra ter a licensa de poder chamar emanipular o filho.
- #ouro

// ARVORE / PROJETO

raiz:
 nome_projeto &&  nome do banco 

tronco:
pergunte: para quem é o projeto? == entidade "usuarios" daqui pra frente estas entidades vai ter ciclo de vida "LCRUD"....segue os galhos

- o que ele vai ter ? : o que ele vai ter vai formando galhos que terao Ciclo de Vida

// LCRUD ....................
o cliente vai enviar algo
- tenho que receber
- recebo dizendo o que vou receber(referencia)
- respondo invocando a funcao que receber (devolvendo o pedido com a resposta com valor) ...resposta do pedido com valor dentro da invocacao ()
- do jeito que recever devolve :: empacotado ou desempacotado.
- 
casos_de_uso : recebe e devolve : 'casos de mutacoes '


//  API  //=====================
acesso api no front: 
 fetch("http://nomedasuaapi.com") e vuala, feito
......

....

// ACOES 
O cliente vai usar :: entao vai invocar se for funcao / instanciar se for classe
resumo : vai apertao o botao pra usar no sistema vai invocar()

duvida :: sendo assim na classe quando definir propriedades no topo da classe 
- e quando "PEDIR" propriedades no contrutor : no contrutor se tem valor das propriedades quando o cliente vai usar / invocar/instanciar/ criar um objeto da classe.


//  GRAPHQL  //=====================
- graphql nao precisa de contratos do core...ele ja usa contratados e contrata os seus no typeDefs

// VARIAVEIS // ========
variaveis: primeiro dsclara atribui o valor e depois usa.

//  ERRORS  //=====================
apos_tratamentos_de_error: {
  onde_usar: 'faca tratamento try catch() no service onde tenta a o retorno da regra de negocio',

resultados_apos_uso : {
// 
  se_der_reference_error: {
    quem_errou: ' dev ',
    
    onde_esta_o_erro: ' há alguma variavel sendo usada sem ser declarada ou atribuido valor - por default o ts ja avisa e nem copila.
   obs: a ordem de atribuicao e uso é importante.
    
 ',
    
    solucao: '  declarar a variavel ',
    
  }, 
  //

 se_der_sintaxe_error: {
    quem_errou: ' dev ',
    
    onde_esta_o_erro: '  no codigo service alguma sintaxe errada ',
    
    solucao: ' arrumar a sintaxe  ',
    //

 se_der_type_error:  {
    quem_errou: 'dev ',
    
    onde_esta_o_erro: ' no service, algum tipo de dado sendo usado com metodo que nao é pra este tipo de dado, o ts ja avisa por default e nem copila. ',
    
    solucao: ' usar metodo certo para cada tipo de dado. ',//

 se_der_custom_error:  {
    quem_errou: ' client ',
    
    onde_esta_o_erro: ' no service, alguma regra passada e o client nao cumpriu ',
    
    solucao: ' retornar o erro customizado amigavelmente  para o client. ',//


},
},//


// ERROS NODE    //=====================
erros_node_no_console :
stack_trace : que quer dizer rastreamento de pilha...e é um objeto com as variaveis:
location: que mostra local do erro.

link : tratar erro graphql : https://youtu.be/Mp1f-wfEbto
....


  `,
}