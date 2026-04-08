# Projeto Cardapio Digital - FATEC Itaquera

Este e um projeto de aplicacao mobile desenvolvido em React Native com TypeScript, focado na interacao com componentes de selecao e gerenciamento de estado.

## Descricao
A aplicacao permite que o usuario selecione um lanche e uma bebida de um cardapio pre-definido. O sistema exibe as imagens e os precos dinamicamente e calcula o valor total do combo em um modal de resumo.

## Tecnologias
* React Native
* TypeScript
* Expo
* React Native Picker

## Requisitos
Antes de comecar, voce vai precisar ter instalado em sua maquina:
* Node.js
* Gerenciador de pacotes (npm ou yarn)
* Expo Go instalado no smartphone (para testes)

## Instalacao

1. Instale as dependencias do projeto:
npm install

2. Instale o componente especifico do Picker:
npm install @react-native-picker/picker

## Como Executar

1. Inicie o servidor de desenvolvimento:
npx expo start

2. Leia o QR Code exibido no terminal utilizando o aplicativo Expo Go no seu celular.

## Estrutura do Codigo
* Lanches e Bebidas: Armazenados em objetos do tipo Record para acesso rapido via chaves.
* Estados: Utilizacao de hooks (useState) para monitorar a selecao do usuario.
* Validacao: O botao de consulta permanece desabilitado ate que ambos os itens (lanche e bebida) sejam selecionados.
* Layout: Uso de posicionamento absoluto para fixar o botao no rodape da tela.

## Autor
Estudante da FATEC Itaquera - Prof. Miguel Reale.