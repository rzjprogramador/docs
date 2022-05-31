possibilidades_gerar_id: {

  aleatorio_matematico_em_string: `Math.random.toString()`,
  
}

// gerar id makeId uuid

{
  nome: 'gerar_id_uuid',
  tipo_instalacao: 'dependencies',
  instalar: `yarn add uuid`,

uso: `
  import { v4 as uuidv4 } from 'uuid'

  export const makeId = () => {
    return uuidv4()
  }
  `,
  }

