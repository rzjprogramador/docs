const editar_em_modo_hardcode = {
  recebimento_client: `RECEBE NO ARGS O ID E TODOS OS DADOS ENCAPSULADOS EM DATA ex: (id, data)`,
  combina_recebido_com_tabela_bd: {
    conceito: `
    Combinar campos do Recebimento e da Tabela no Banco...Para combinacao e merge.
    :: obter na tabela_bd ( id e data/dados) que foram recebidos do client via args para com que os 2 possam se combinar e mergiar -- 
    `,

    precisamos: `precisamos do identificador e com o identificador pegamso a posicao`,

    identificador: {
      conceito: `obtendo o identificador recebido -lá na tabela bd para combinar`,
      implementacao_hard: `CHAMO A TABELA_BD APLICO O FIND() PARA ARRAYS JS - 
      PERCORRO PARA CADA ALVO.IDENTIFICADOR PASSADO VEJO SE É MUITO IGUAL AO IDENTIFICADOR RECEBIDO DO CLIENT VIA ARGS E CAPTURO O RESULTADO..ASSIM TEREI O IDENTIFICADOR QUE FOI RECEBIDO DO CLIENT`,
      exemplo: `
      const userDB = collection_Users_HARD.find(u => u.id === id) 
      `,

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

  recriando_em_uma_nova_entidade_com_o_coletado: `
  - COPIA TUDO DO IDENTIFICADOR RECEBIDO
  - COPIA TODOS OS DADOS QUE O CLIENT ENVIOU - E ESTA DISPONIVEL PARA ATUALIZAR 
  exemplo: 
  const newUser = {
    ...userDB,
    ...data
  }
  `,

  ir_na_tabela_modificar_o_que_foi_pedido: `
  VOU NA TABELA BD USO O SPLICE( QUE ESPERA A POSICAO CAPTURADA, A QUANTIDADE DE VALOR QUE VAI MUDAR :: 1, E ONDE ATUARÁ newEntidade)
  exemplo:
  collection_Users_HARD.splice(index, 1, newUser)
  
  `,

  finalizar_retornando_a_entidade_recriada: `
  exemplo:
  return newUser
  `,


} 