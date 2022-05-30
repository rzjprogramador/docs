{
  contexto: 'consultas',
  parte: {
    aplicacao: {
      tipagem: `definir na string gql em typedefs dentro do obj de tipo type Query {
        todas as consultas que o clientHttp pode fazer na atual entidade.
      }`,
      resolver_trivial: {
        conceito: `resolvers triviais apra campos de relacionamento`,
        processo: `Campos triviais ex: de relacionamento que o type Query nao consegue resolver :: crie no resolver um objeto de resolucao de tipo e insira o campo deste tipo que quer resolver:
        na funcao como estamso em consulta use em justa o 1º parametro que por justa posicao é o obj podemos dar o nome que queremos para ele , este priemiro param é o objetoResposta que vem da base de dados que podemos interceptar e manipular antes da resposta ir para o clientHttp, então pegamos este 1º param e podemos resolve-lo `,
        exemplo: `
        // exemplo:
      // BUSCANDO NA BASE DE DADOS UM ID PASSADO NA CONSULTA
      // ASSIM HABILITAMSO O CLIENTE FAZER UMA CONSULTA POR ID E RETORNAR O RELACIONAMENTO RESOLVIDO TRIVIALMENTE AQUI.
      // RESOLVER TRIVIAL : CAMPO QUE A QUERY NAO CONSEGUE RESOLVER
      User: {
        perfil: (user: any) => {
          return collection_Perfil_HARD.find(p => p.id === user.perfil)
        }
      }
      `,
      },
      
    },
    clientHttp: {}
  }
}