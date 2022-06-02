const editar_em_modo_hardcode = {
  recebimento_client: `RECEBE NO ARGS O ID E TODOS OS DADOS ENCAPSULADOS EM DATA ex: (id, data)`,
  combina_recebido_com_tabela_bd: {
    conceito: `
    
    :: obter na tabela_bd ( id e data/dados) que foram recebidos do client via args para com que os 2 possam se combinar e mergiar -- 
    `,

    precisamos: ``,

    identificador: {
      conceito: `obtendo o identificador recebido -lá na tabela bd para combinar`,
      i

    posicao: {
      conceito: `obtendo a posicao recebido -lá na tabela bd para combinar`,
      implementacao_hard: `CHAMO A TABELA_BD APLICO O findIndex() PARA ARRAYS JS - 
      PERCORRO PARA CADA ALVO.IDENTIFICADOR PASSADO VEJO SE É MUITO IGUAL AO IDENTIFICADOR RECEBIDO DO CLIENT VIA ARGS E CAPTURO O RESULTADO..ASSIM TEREI A POSICAO DO IDENTIFICADOR QUE FOI RECEBIDO DO CLIENT`,
      exemplo: `
      const userDB = collection_Users_HARD.find(u => u.id === id) 
      `,
    },

    },

  },

  

  

  finalizar_retornando_a_entidade_recriada: `
  exemplo:
  return newUser
  `,


} 