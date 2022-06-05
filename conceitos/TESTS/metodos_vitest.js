{
  conceito: `Aguardo e Espero que a resolucao da promessa nao retorno erro de excessao `,
  metodo: `.resolves.not.toThrow()`,
  sinatxe: `await expect( <ACAO>).resolves.not.toThrow()`,
  exemplo: `
  await expect(
    clienteFisico.execute({ nome: 'any_nome', sobrenome: 'any_sobrenome' }),
  ).resolves.not.toThrow()
  `,
}