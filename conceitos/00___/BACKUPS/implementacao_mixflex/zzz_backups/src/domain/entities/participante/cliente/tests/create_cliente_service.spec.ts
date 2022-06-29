import { Cliente } from '@src/domain/entities/participante/cliente/entity/cliente'
import { IClienteProps } from '@src/domain/entities/participante/cliente/contracts/cliente_dto'
import { InMemoryClienteRepository } from '../../../../../../inmemory/repositories/cliente/inmemory_cliente_repository'
import { CreateClienteService } from '@src/domain/entities/participante/cliente/service/create_cliente_service'
import { describe, it, expect } from 'vitest'

describe('Create Cliente Service', () => {
  it(`[] deve criar cliente`, async () => {
    const createClienteRepository = new InMemoryClienteRepository()
    const createClienteService = new CreateClienteService(createClienteRepository)

    const clienteData: IClienteProps = {
      nome: 'testNome',
      email: 'testEmail',
      identificador: 'testIdentificador',
    }

    const cliente = await createClienteService.execute(clienteData)

    console.log(cliente)

    expect(cliente).toHaveProperty('id')
  })
})
