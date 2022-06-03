const editar_entidade_em_modo_hardcode = {
  conceito: `-
  - O que receber  do client (id, dados) procurar onde esta guardado(tabelaBanco)
  - recriar uma entidade clone da que quer devolver passar o que foi encontrado onde esta guardado
  - e devolver esta nova criacao
  `,

  detalhes : `
  - precisamos do identificador e com o identificador pegamos a posicao
  - Combinar campos do Recebimento e da Tabela no Banco...Para combinacao e merge.
  
  `,

  metodo_exemplo: `

    export const updateUser = (_: any, { id, data}: any) => {
      const userDB = collection_Users_HARD.find(u => u.id === id) 
      const index = collection_Users_HARD.findIndex(i => i.id === id) 
    
      const newUser = {
        ...userDB,
        ...data
      }
      collection_Users_HARD.splice(index, 1, newUser)
    
      return newUser
      
    }
    //
  
  `,

  exemplo_playground: `
  mutation UPDATE_USER {
    updateUser(
      id: "1"
      data: {
        nome: "nome_mudado111"
        email: "email1@email.com"
        password: "123123"
      }
    ) {
      id
      nome
    }
  }
  `,



} 