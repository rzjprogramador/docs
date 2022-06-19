// import { UserEntity } from '@src/core/entities/user/contracts/user_entity'
// import { User } from '@src/core/entities/user/entity/User.entity'

// import { describe, it, expect, beforeEach } from 'vitest'

// describe('User by Core Ts', () => {
//   // GLOBAIS::
//   let userUMRequestTest: UserEntity
//   let newUserUm: any

//   beforeEach(() => {
//     // VALOR DAS VAR GLOBAIS:: // USANDO O OBJETO FAKE USADO NO SEDD
//     userUMRequestTest = {
//       nome: 'NomeTestEntityOBJCreateUM',
//       email: 'UM@email',
//       password: 'foo',
//       identificacao: 'foo',
//     }

//     // METODO A SER TESTADO --> SERÁ O newUserUm ::
//     newUserUm = User.create(userUMRequestTest)

//     // VISUALIZAR
//     console.log(newUserUm)
//   })

//   it('[ sucesso ] deve criar Usuario pelo Core com as propriedades', async () => {
//     expect(newUserUm).toHaveProperty('id')
//     expect(newUserUm).toHaveProperty('idb')
//     expect(newUserUm).toHaveProperty('nome')
//     expect(newUserUm).toHaveProperty('email')
//     expect(newUserUm).toHaveProperty('password')
//     expect(newUserUm).toHaveProperty('tipoUser')
//     expect(newUserUm).toHaveProperty('identificacao')
//     expect(newUserUm).toHaveProperty('createdAt')
//     expect(newUserUm).toHaveProperty('updated')
//     expect(newUserUm).toHaveProperty('ultimoLogin')
//   })

//   it('[ falhas ] nao deve ter propriedades vazias na criacao de User by Core Ts', async () => {
//     expect(newUserUm.id).not.toBeNull()
//     expect(newUserUm.idb).not.toBeNull()
//     expect(newUserUm.nome).not.toBeNull()
//     expect(newUserUm.email).not.toBeNull()
//     expect(newUserUm.password).not.toBeNull()
//     expect(newUserUm.identificacao).not.toBeNull()
//     expect(newUserUm.tipoUser).not.toBeNull()
//     expect(newUserUm.createdAt).not.toBeNull()
//     expect(newUserUm.updated).not.toBeNull()
//     expect(newUserUm.ultimoLogin).not.toBeNull()
//   })

//   it('[vazio not] nao deve retornar vazio os campos', () => {
//     expect(newUserUm.id).not.toEqual('')
//     expect(newUserUm.nome).not.toEqual('')
//     expect(newUserUm.email).not.toEqual('')
//     expect(newUserUm.password).not.toEqual('')
//     expect(newUserUm.identificacao).not.toEqual('')
//     expect(newUserUm.tipoUser).not.toEqual('')
//     expect(newUserUm.createdAt).not.toEqual('')
//     expect(newUserUm.updated).not.toEqual('')
//     expect(newUserUm.ultimoLogin).not.toEqual('')
//   })
// })
