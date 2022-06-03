// MODELO
{
  area: 'POO',
  contexto: ``,
  contextualizando: ``,
  code: `
    `,
  explicacao: `
  `,
}


// ===============

{
  area: 'POO',
  contexto: `propriedades`,
  contextualizando: `definir propriedades da classe`,
  code: `
  props: Omit<User, 'id'>, id?: string,  
    `,
  explicacao: `receber todas props da classe User menos a "id", TODO depois vou receber o id como opcional para Entidade que ja tem, nao recriar ou pra nova criar`
}

{
  area: 'POO',
  contexto: `objeto`,
  contextualizando: `
  atribuir valores que vier das props da classe para novo Objeto`,
  code: `
  Object.assign(this, props)
    // 
    `,
  explicacao: `
  A cada propriedade vai adicionar o this, Para nao atribuir cada campo recebido ao campo da classe
  `,
}

{
  area: 'POO',
  contexto: `statico`,
  contextualizando: `metodo statico`,
  code: `
  static create({ nome, estabelecimento, email, password }: User) {
    const user = new User({ nome, email, })
    return user
  }
    `,
  explicacao: `
  O CONSTRUTOR É PRIVADO - PARA CRIAR FORA A ENTIDADE USE A CLASSE.CREATE: USE EM TEST
  `,
}