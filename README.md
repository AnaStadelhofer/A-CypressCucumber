# Cypress e Cucumber

Este repositorio foi criado com a finalidade de estudar a integração do Cypress com o Cucumber, que é uma ferramenta de teste de software que suporta o BDD (Behavior Driven Development), permintindo uma comunicação/entedimento mais eficaz e clara, até para pessoas sem o conhecimentos tecnicos.

Nele foi automatizado as seguintes funcionalidades:

✅ Login

✅ Checkout

✅ Cart

✅ Products

# Execução do projeto
Para executar o projeto, podemos escolher dois modos de execução:

1. ```npx cypress run```: irá rodar no mode headless, por baixo dos panos, exibindo a execução apenas no terminal;
1. ```npx cypress open```: irá abrir o cypress e o navegador escolhido, mostrando a execução do teste no site;
1. ```npm run test:reporter```: irá rodar os testes automatizados gerando o relatório do mocha.

Ao rodar os testes no modo headless, ele gerará uma pasta de ```videos``` registrando o vídeo da execução de cada um dos testes, e também criará a pasta ```screenshots```, tirando print da tela dos cenários que ocorreram erro.

# Configurando o ambiente
Para a configuração do ambiente para rodar os testes, é necessário algumas ferramentas sejam instaladas:

1. Instalar o [NodeJS](https://nodejs.org/dist/v20.16.0/node-v20.16.0-x64.msi);
2. Instalar o [VS Code](https://code.visualstudio.com/download) ou alguma outra IDE de sua prefêrencia;
3. Instalar o [Git](https://git-scm.com/downloads) para conseguir efetuar comandos do próprio git.

Após a instalação deles, é necessário apenas efetuar o ```git clone``` do projeto. Após o clone, rodar o ```npm install``` para instalar todas as dependencias do projeto.

Pronto! Agora para abrir e executar o projeto, pasta rodar o seguinte comando no terminal do windows dentro da pasta 'A-CypressCucumber': ```npx cypress open``` ou ```npx cypress run```.

## Como efetuar a configuração do zero?

Aqui neste tópico, irei explicar mais detalhado como fiz a configuração do cucumber no projeto de cypress, para fins de documentação. O primeiro passo é criar uma pasta que ficará armazenado o projeto, instalando o cypress e o cucumber, com os seguintes comando:

```
npm install cypress
npm install cypress-cucumber-preprocessor 
```

Após isso, devemos executar o cypress para que seja gerado as pastas com os arquivos necessários, rodando com comando de ```npx cypress open```. Após isso, selecione a opção E2E Testing e selecione um navegador de sua prefêrencia.

Após rodar o Cypress, podemos fechar ele pois já foi gerado as pastas necessárias, que estão dentro da ```cypress```.

Para iniciar a configuração do cucumber no projeto, iremos alterar o arquivo **cypress.config.js**, adicionando o seguinte codigo na primeira linha:

```const cucumber = require('cypress-cucumber-preprocessor').default;```

E adicionando o código configuração dentro do **module.exports**:

```on('file:preprocessor', cucumber())```

E por último, ainda no mesmo arquivo, adicionar o seguinte código após o fechando do setupNodeEventos. Ele basicamente vai indicar onde estão os arquivos ```.features``` que terá o BDD.

```specPattern: "cypress/e2e/step_definitions/*.feature"```

Ficando da seguinte forma o arquivo no final:

```
const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/*.feature"
  },
});
```

Após as configurações é necessário editar por fim o arquivo do package.json, adicionando o seguinte codigo. 
alterar o package.json

```
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true,
  "stepDefinitions": "cypress/e2e/step_definitions"
}
```

Dentro da pasta e2e iremos criar a pasta ```step_definitions``` e dentro dela, iremos criar uma pasta para cada arquivo ```.feature``` que foi criado na e2e.
- Os arquivos features conterá o cucumber;
- pasta/arquivo.cy.js irá ter os arquivos com o codigo de automação em cypress.

A estrutura do projeto ficará da seguinte forma:
```
- e2e
    - step_definitions
        - arquivo.feature
        - arquivo (pasta)
            - arquivo.cy.js
```


# Informações adicionais

Neste projeto foi usado o seguinte [site](https://vinothqaacademy.com/demo-site/) para a aplicação do cypress com cucumber.

Para aprender sobre a implementação do cucumber no cypress, foi utilizado dois blogs:
- [Diego Yuri, cypress mais atualizado](https://dev.to/yuri-aprendendoqa/aprenda-a-implementar-cucumber-ao-cypress-em-testes-automatizados-4e62)
- [Gabriel Cartelli, cypress mais antigo](https://medium.com/cwi-software/testes-automatizados-com-cypress-e-cucumber-d78b211da766)

