const editar_entidade_em_modo_hardcode = {
  conceito: `-
  - O que receber  do client (id, dados) procurar onde esta guardado(tabelaBanco)
  - recriar uma entidade clone da que quer devolver passar o que foi encontrado onde esta guardado
  - e devolver esta nova criacao
  `,

  detalhes : ``,

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



} 