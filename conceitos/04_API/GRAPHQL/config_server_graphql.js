

{
  nome: `apollo-server`,
  doc: `https://www.apollographql.com/docs/apollo-server/`,
  tipo_instalacao: `dependencies`,
  instalacao: `yarn add apollo-server`,
  objetivo: ``,
  detalhes: {

     configurar_playground: `configurar como quer usar o apollo playground :
https://www.apollographql.com/docs/apollo-server/migration/#graphql-playground`,

  },
  configurar_playground: `
  import { ApolloServerPluginLandingPageGraphQLPlayground,
         ApolloServerPluginLandingPageDisabled } from 'apollo-server-core';
  
  // ADICIONAR CONFIG DO PLUGIN DO PLAYGROUND TRADICIONAL AO INVES DO SANDBOX : NO OBJ DE CONFIG DO APOLLO:

  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],


`,
},

// TENTANDO CONFIGURAR CORS GRAPHQL
// Vhttps://expressjs.com/en/resources/middleware/cors.html

introspection: true,
  cors: {
    origin: 'http://localhost:7777/',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs)
},




