/*
TODO : AINDA NAO CONSEGUE ENTENDER O PATH ALIAS
- no seed do prisma .. todos arquivos ligados ao seed do prisma noa consegue netender ainda.
*/

// RESOLVIDOS :: ======================

/*
> RESOLVENDO PATH ALIASES - CAMINHOS MAPEADOS PARA VITEST
 lib: yarn add vite-tsconfig-paths
 doc_lib: https://www.npmjs.com/package/vite-tsconfig-paths

 uso: `
 no arquivo de configuracao do vitest :: vite.config.js
 importar e colocar a funcao da lib no array de plugins ex:
 
 import tsconfigPaths from 'vite-tsconfig-paths'

 plugins: [tsconfigPaths()],


 `,
*/

/*
> RESOLVENDO PATH ALIASES - CAMINHOS MAPEADOS PARA GRAPHQL RESOLVERS E QUEM PRECISAR COM MODULE ALIAS
 lib: yarn add module-alias
 link: https://stackoverflow.com/questions/60067281/typescript-path-aliases-not-resolved-correctly-at-runtime/60131288#60131288

 uso: `
 no servidor ou primeiro arquivo da aplicacao ex: para o graphql adicionar no server 
 na primeira linha do arquivo a importacao de registros da lib: 

 import 'module-alias/register'
 
 no package.json adicionar o script que aponta o caminho da variavel definida no modulo :

  "_moduleAliases": {
    "@/": "./src/"
  },



 `,
*/
