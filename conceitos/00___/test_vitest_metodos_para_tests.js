
// PARA SUITES DE TESTS
{
  para_todos_tests_da_suite: `beforeEach(() => { // ..o que acontecer aqui vai acontecer antes para cada suite de test ... }`
}

// SUCESSO
{
  deve_ter_a_propriedade: `toHaveProperty('id')`,

}

// FALHAS
{
  nao_deve_retornar_vazio: `not.toEqual('')`,
  nao_deve_retornar_nulo: `not.toBeNull()`,

}