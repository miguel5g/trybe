**O que é um código que é executado de modo assíncrono?**

Ele é executado em um fluxo de execuções separada do principal, onde não trava todo o fluxo e não é linear.

**Qual é a diferença disso para um código que é executado de modo síncrono?**

Um código síncrono é executado no fluxo principal e a próxima etapa só é chamada após a finalização da anterior.

**Quando você tem que enfileirar várias callbacks, que problema surge?**

Callback Hell.

**Por que as Promises são uma forma de resolver esse problema?**

Promises chegaram para resolver o problema de callback hell, e elas encapsulam nossas funções assíncronas em um fluxo separado e que não trava o fluxo principal.

**Quando você vai se comunicar com uma API, tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.**

Assíncrona.

**Dada a resposta anterior, o que é fetch e para que ele serve?**

Fazer uma requisição para algum recurso de através de um endpoint (url)
