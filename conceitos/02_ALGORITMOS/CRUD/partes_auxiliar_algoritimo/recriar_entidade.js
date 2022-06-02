
recriando_em_uma_nova_entidade_com_o_coletado: `
  - COPIA TUDO DO IDENTIFICADOR RECEBIDO
  - COPIA TODOS OS DADOS QUE O CLIENT ENVIOU - E ESTA DISPONIVEL PARA ATUALIZAR 
  exemplo: 
  const newUser = {
    ...userDB,
    ...data
  }
  `,