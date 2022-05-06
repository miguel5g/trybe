# HTML & CSS - Primeiros passos com CSS

## O que é CSS?

CSS é um linguagem de estilo que permite definir as propriedades de um elemento HTML.

## Estilizando uma tag HTML

No exemplo abaixo dizemos que todas as nossas tags h1 terão um texto vermelho.

```css
h1 {
  color: red;
}
```

## Estilizando um elemento com id

No exemplo abaixo, o CSS vai estilizar o elemento com id `title` com um texto verde.

a função `rgb()` é uma função que permite definir uma cor personalizada.

```css
#title {
  color: rgb(0, 255, 0);
}
```

## Estilizando um elemento com classe

No exemplo abaixo, o CSS vai estilizar o elemento com classe `texts` com um texto azul.

```css
.texts {
  color: blue;
}
```

## O que acontece se um elemento tiver dois estilos?

Se um elemento tiver dois estilos, o CSS irá sobrescrever o estilo anterior com o último definido.

## Propriedades CSS para textos

- `font-family`: define o nome da fonte.
- `font-size`: define o tamanho da fonte.
- `font-weight`: define o peso da fonte.
- `font-style`: define o estilo da fonte.
- `color`: define a cor do texto.
- `text-decoration`: define a decoração do texto.
- `line-height`: define o tamanho da linha.

> **OBS**: Existem muitas outras propriedades que podem ser usadas para estilizar o texto.

## Unidades de medida

- `px`: pixels.
- `em`: pixels equivalentes ao tamanho da fonte do elemento pai.
- `%`: porcentagem.
- `rem`: pixels equivalentes ao tamanho da fonte do site.
- `vh`: porcentagem do tamanho da tela (Viewport Height).
- `vw`: porcentagem do tamanho da tela (Viewport Width).
- `in`: polegadas.
- `cm`: centímetros.
- `mm`: milímetros.

> **OBS**: Existem muitas outras unidades.

## Movendo estilizações para um arquivo externo

Basta criar um arquivo <nome>.css e colocar toda a estilização nele, e para importar basta utilizar a tag `link` como abaixo.

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <link rel="stylesheet" type="text/css" href="<nome>.css" />
  </head>

  <body>
    <!-- Conteúdo -->
  </body>
</html>
```
