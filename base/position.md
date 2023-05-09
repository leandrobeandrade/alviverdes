# Position

A propriedade position especifica o tipo de método de posicionamento usado para um elemento.

> Existem cinco valores de posição diferentes:

- static
- relative
- fixed
- absolute
- sticky

Os elementos são então posicionados usando as propriedades superior, inferior, esquerda e direita. No entanto, essas propriedades **não funcionarão, a menos que a position propriedade seja definida primeiro**. Eles também funcionam de forma diferente, dependendo do valor da posição.

## position: static

Os elementos HTML são `position: státic` por padrão. Os elementos posicionados estáticos não são afetados pelas propriedades superior, inferior, esquerda e direita, não é posicionado de nenhuma maneira especial e está sempre posicionado de acordo com o fluxo normal da página:

    div.static {
      position: static;
      border: 3px solid #73AD21;
    }
    
## position: relative

Um elemento com `position: relative` é posicionado em relação à sua posição normal. Definir as propriedades superior, direita, inferior e esquerda de um elemento relativamente posicionado fará com que ele seja ajustado para longe de sua posição normal. Outros conteúdos não serão ajustados para caber em qualquer lacuna deixada pelo elemento.

    div.relative {
      position: relative;
      left: 30px;
      border: 3px solid #73AD21;
    }
    
## position: fixed

Um elemento com `position: fixed` é posicionado em relação à viewport, o que significa que ele sempre permanece no mesmo lugar, mesmo que a página seja rolada. As propriedades superior, direita, inferior e esquerda são usadas para posicionar o elemento. Um elemento fixo não deixa uma lacuna na página onde normalmente estaria localizado.

    div.fixed {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 300px;
      border: 3px solid #73AD21;
    }
    
## position: absolute

Um elemento com `position: absolute` é posicionado em relação ao ancestral posicionado mais próximo (em vez de posicionado em relação à viewport, como fixo). No entanto; se um elemento posicionado absoluto não tiver ancestrais posicionados, ele usará o corpo do documento e se moverá junto com a rolagem da página.

**Nota:** Elementos posicionados absolutos são removidos do fluxo normal e podem sobrepor elementos.

    div.relative {
      position: relative;
      width: 400px;
      height: 200px;
      border: 3px solid #73AD21;
    }

    div.absolute {
      position: absolute;
      top: 80px;
      right: 0;
      width: 200px;
      height: 100px;
      border: 3px solid #73AD21;
    }
    
## posição: sticky

Um elemento com `position: sticky` é posicionado com base na posição de rolagem do usuário. Um elemento fixo alterna entre relativee fixed, dependendo da posição de rolagem. Ele é posicionado relativo até que uma determinada posição de deslocamento seja encontrada na viewport - então ele "gruda" no lugar (como position:fixed).

**Nota:** o Internet Explorer não oferece suporte ao posicionamento fixo. O Safari requer um prefixo -webkit- (veja o exemplo abaixo). Você também deve especificar pelo menos um top, right bottom ou left para que o posicionamento fixo funcione.

Neste exemplo, o elemento aderente fica no topo da página ( top: 0), quando você atinge sua posição de rolagem.

    div.sticky {
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
      background-color: green;
      border: 2px solid #4CAF50;
    }
