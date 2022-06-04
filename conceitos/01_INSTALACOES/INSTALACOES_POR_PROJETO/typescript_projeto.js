{
  projeto_nome: `typescript`,
  instalacoes: [
    'yarn init -y',
     'yarn add -D  typescript @types/node nodemon vitest tsconfig-paths ',
    ]
}

{
  tecnologia: `typescript`,
  contexto: `build`
  processo: `
  script : "build": "tsc --build" `,
  detalhes: ` // nao informa o arquivo só dentro do script a flag tsc --build`,
  tutorial: `https://docs.microsoft.com/pt-br/visualstudio/javascript/compile-typescript-code-npm?view=vs-2022`,

}