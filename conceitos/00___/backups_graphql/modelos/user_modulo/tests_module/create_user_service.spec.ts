
import { describe, it, expect } from 'vitest'


describe('Create User', () => {
  it('[ metodo Create Entity ] deve ser possivel criar um User', async () => {
    const User = {
      nome: 'string',
      email: 'string',
      password: 'string',
      tipoUser: { CLIENTE_PJ: 'CLIENTE_PJ' },
      tipoIdentificador: { CNPJ: 'CNPJ' },
    }

    const createUser = UserEntity(User)

    console.log(createUser)

    expect(createUser).toHaveProperty('id')
  })
})
