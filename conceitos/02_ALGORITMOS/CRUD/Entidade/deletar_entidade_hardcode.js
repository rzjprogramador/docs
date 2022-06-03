const deletar_entidade_em_modo_hardcode = {
  conceito: `-
  - 
  `,

  detalhes : `
  - 
  `,

  metodo_exemplo: `
    // TODO
    export const deleteUser = (_: any, { id }: any) => {
      const userEncontrado = collection_Users_HARD.find(u => u.id === id) 
    
      let userBD = { ...collection_Users_HARD } // TODO ERRADO TO COPIANDO O BDTABELA PQ NAO TA DANDO PRA SOBREPOR UM IMPORTADO
    
      userBD = collection_Users_HARD.filter(u => u.id !== id)
    
      return !!userEncontrado
    }
  
  `,

  exemplo_playground: `
  mutation DELETE_USER {
    deleteUser(id: "1") 
  }
  `,



} 