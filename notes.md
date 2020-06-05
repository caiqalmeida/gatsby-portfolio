# Aula 6 - Estrutura

* gatsby-config : onde instalamos todos os plugins
* gatsby-browser : biblioteca p trabalharmos no front
* gatsby-node : para trabalhar com a API do gatsby

# Aulta 35 - Plugin Remark que vai ler o markdown

yarn add gatsby-transformer-remark

## Configuração remark (Gatsby-config)

1. Fazer com que a página de posts seja lida pelo sistema

{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },

2. Setup simples do remark :

{
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },

# Aula 36 - Pegando os dados do markdown usando graphql

Fazendo a query dentro da page blog e passando ao blogitem

# Aula 39 - Criando fields nos nossos posts com o onCreateNodes

Vamos utilizar o OnCreateNodes para criar os novos campos e também
e o createFilePath para poder pegar um dado no nosso post para criar o slug

# Aula 40 - Criando a página de cada post utilizando o createPage

# Aula 46 - Criando a paginação
