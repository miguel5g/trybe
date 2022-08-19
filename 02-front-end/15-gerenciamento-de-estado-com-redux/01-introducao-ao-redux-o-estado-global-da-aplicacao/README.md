# Introdução ao Redux - O estado global da aplicação

## Store

É onde vamos armazenar todos os dados compartilhados da aplicação e é representado por um objeto JavaScript. O State é armazenado no Store do Redux.

## Action

É um objeto JavaScript que representa alguma mudança/alteração que precisa acontecer no State.

## Reducer

É uma função JavaScript que recebe o estado atual (current state) e a ação corrente (current action) e retorna um novo estado (new state). É responsabilidade dessa função decidir o que acontecerá com o estado dada uma ação (action).

## Dispatch

É uma função que envia uma ação (action) para processamento.

## Get state

É uma função que recupera o estado armazenado no store
