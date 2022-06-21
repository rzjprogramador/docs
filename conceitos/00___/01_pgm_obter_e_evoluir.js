// VARIAVEIS A ESQUERDA
{
  variavel_de_fora_a_direita: {
    narrativa: `"TRAZER ALGO"`,
    possibilidades: ['trazer a informacao', 'trazer resultado', 'trazer resposta'],
    trazer_informacao: `Quem traz a informacao geralmente é uma expressao | prop | metodo passando ou nao outras props`,
  },

  variavel_de_dentro_a_esquerda: {
    narrativa: `"OBTER e GUARDAR | CRIAR | CAPTURAR"`,
    possibilidades: ['obter e guardar a informacao', 'capturar o resultado', 'obter resposta'],
    obter_informacao: `Quem obtem e guarda uma informacao é uma variavel auxiliar criada e declarada no local a esquerda e serve para evoluir transformar o dado.`,
  },
}

// EVOLUCAO :: CRIACOES

{
  quero_criar_mini_artefato: `crio constante a esquerda = algum valor pronto`,
  quero_obter_algum_resultado: `
  crio constante response a esquerda = algum caminho.metodo que cria algo.
  - exemplo: const response = props.create({...}) `,
}

// TRANSFORMAR INFORMACAO OBTIDA
{
  podemos_transformar_informacao_obtida: ['com metodo passando a informacao', 'juncoes de variaveis com valores transformadores' ]
}