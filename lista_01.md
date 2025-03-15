# Lista 01
### Anne Figueirôa, T18
### Módulo 1, semana 6


# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
a) A saída será undefined seguido de erro. ***CERTA ✅***

> O primeiro console.log(x) imprime undefined porque x foi hoisted (comportamento do JavaScript em que declarações de variáveis e funções são "elevadas" para o topo do seu escopo antes da execução do código), mas ainda não foi atribuído um valor. Nisso, quando a máquina procura X, encontra uma variável indefinida (sem atribuição). 

>O segundo console.log(y) resulta em um erro porque y está no "temporal dead zone" (o JavaScript fez o hoisting da declaração let y, mas não inicializou a variável; quando o código tenta acessar y antes da linha de atribuição sempre resultará em um erro).

> "Temporal dead zone" (TDZ): O TDZ é o período entre a criação da variável e sua inicialização, onde qualquer tentativa de acesso resulta em um erro.

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0) ***CERTA ✅***

>Pelo contexto, parece que a função quer retornar um erro se pelo menos um dos números for 0. No entanto, o código atual tem um problema porque a condição if (a || b === 0) não faz o que se espera. Isso acontece devido ao comportamento do operador || (OU lógico) e à precedência dos operadores em JavaScript. A condição correta deve verificar explicitamente se a é 0 ou se b é 0. Para isso, devemos usar if (a === 0 || b === 0). Essa condição garante que a função retorne um erro apenas quando um dos números for 0 (antes, testei e vi que o código retornava a soma normalmente mesmo quando a era zero). O operador || tem precedência sobre ===. Isso faz com que a condição seja interpretada como if (a || (b === 0)), o que não verifica se a é igual a 0. A correção if (a === 0 || b === 0) garante que a função retorne um erro se a ou b for 0.

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

b) O código imprime 200. ***CERTA ✅***

>A saída do código é 200, pois não existe a linha "break" após o primeiro caso o switch. Após definir preco = 1000, o código não tem um break para sair do switch. Isso faz com que a execução continue para o próximo caso ("vestuário"), mesmo que ele não corresponda ao valor de tipo. Para o código estar certo, deveriam ser acrescentadas duas linhas de "break", uma no caso de eletrônico e outra em "preco". Se o break não for usado, a execução continua para os casos seguintes, mesmo que eles não correspondam ao valor da expressão.

c) O código imprime 50.

d) O código gera um erro.

______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

d) 24 ***CERTA ✅***

>Primeiro, é criado um array chamado numeros no código. Ele contém os valores [1, 2, 3, 4, 5]. Depois, na variável resultado, é usado o método map. O método map serve para criar um novo array aplicando uma função a cada elemento do array original. Neste caso, a função x => x * 2 multiplica cada elemento do array por 2. Após o método map, o array resultante conterá os valores [2, 4, 6, 8, 10]. Na próxima etapa, o método filter é usado para criar um novo array contendo apenas os elementos que satisfazem uma condição. Ele filtra os elementos maiores que 5 usando a função x => x > 5. Após o filter, o array resultante será [6, 8, 10]. Por fim, o método reduce é utilizado para reduzir o array a um único valor. A função (a, b) => a + b soma todos os elementos do array, começando com o valor inicial do acumulador 0. Por isso, o valor resultante é 24 (6 + 8 + 10).
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

c) ["banana", "abacaxi", "manga", "laranja"] ***CERTA ✅***
>Isso acontece porque splice substitui elementos da lista.
> O método splice é usado para modificar o conteúdo de um array, seja adicionando, removendo ou substituindo elementos. Os parâmetros são (em ordem) o índice onde a modificação começa, número de elementos a serem removidos a partir do índice especificado e elementos a serem adicionados no lugar dos elementos removidos. Nesse caso, 2 elementos: "maçã" e "uva". Ou seja, a partir do índice 1, remove 2 elementos "maçã" e "uva" e adiciona "abacaxi" e "manga" no lugar dos elementos removidos. Por isso o array de saída é ['banana', 'abacaxi', 'manga', 'laranja'].
> Ou seja, o método splice modifica o array original, removendo e/ou adicionando elementos. No caso, ele remove 2 elementos a partir do índice 1 ("maçã" e "uva") e adiciona "abacaxi" e "manga" no lugar. 

d) ["banana", "maçã", "uva", "abacaxi", "manga"]
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira. ***CERTA ✅***
> A afirmação I está correta, pois a herança em JavaScript permite que uma classe compartilhe métodos e propriedades com outra, evitando a repetição de código. A afirmação II também está correta, já que a palavra-chave extends é uma das formas de implementar herança em JavaScript. No entanto, a segunda afirmação não justifica a primeira, pois a herança pode ser implementada de outras maneiras, como através da cadeia de protótipos (prototype), e a afirmação II menciona apenas uma das formas de implementação, sem explicar o conceito geral de herança descrito na afirmação I. Portanto, as duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```

I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente. 
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes. 
Quais das seguintes afirmações são verdadeiras sobre o código acima?

a) I e II são verdadeiras. ***CERTA ✅***
> A afirmação I está correta. A classe Funcionario herda da classe Pessoa através da palavra-chave extends. Isso significa que Funcionario pode acessar os atributos nome e idade que são definidos no construtor da classe Pessoa. Além disso, o uso de super(nome, idade) no construtor de Funcionario garante que esses atributos sejam inicializados corretamente. A afirmação II também está correta, pois o método apresentar() na classe Funcionario sobrescreve o método apresentar() da classe Pessoa. No entanto, ele ainda chama o método da classe pai usando super.apresentar(), o que permite que a funcionalidade da classe Pessoa seja executada antes de adicionar a funcionalidade específica da classe Funcionario.

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

b) A asserção é verdadeira e a razão é falsa. ***CERTA ✅***
> A asserção é verdadeira, pois o polimorfismo é um dos pilares da Programação Orientada a Objetos (POO) e refere-se à capacidade de objetos de diferentes classes responderem ao mesmo método ou mensagem de formas específicas para cada classe. Isso permite que um mesmo método possa ter comportamentos diferentes dependendo do objeto que o invoca. A razão é falsa pois a sobrecarga de métodos não é suportada em JavaScript, e não é a única forma de implementar polimorfismo. O polimorfismo em JavaScript é implementado principalmente por meio de sobrescrita de métodos (quando uma subclasse redefine um método da classe pai) e duck typing (onde o comportamento de um objeto é determinado pelos métodos e propriedades que ele possui, e não pelo seu tipo explícito).

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```
> Solução:


``` 
  function somaArray(numeros) {
    let soma = 0; // Inicializa a variável 'soma' com 0 para acumular o resultado

    for (let i = 0; i < numeros.length; i++) { // Corrigido 'size' para 'length'
        soma += 2 * numeros[i]; // Acumula o dobro de cada número na variável 'soma' (ITERAÇÃO)
    }

    return soma; // Retorna o valor total da soma do dobro dos números
}
```
> Inicializei uma variável soma com o valor 0 para acumular o resultado da soma, pois, sem isso, a variável seria undefined e causaria erros. Corrigi o uso incorreto de size, que não existe em arrays, substituindo-o por length, que é a propriedade correta para obter o número de elementos. Troquei o operador = por += para garantir que o valor do dobro de cada número seja acumulado na variável soma, em vez de sobrescrevê-lo a cada iteração. Além disso, declarei a variável i com let dentro do for para evitar que ela se tornasse uma variável global e causasse efeitos colaterais indesejados. Com essas correções, o código agora retorna corretamente a soma do dobro dos números do array.
______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

> Resposta:

``` 
// Classe Produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    // Método para calcular desconto de 10%
    calcularDesconto() {
        const desconto = this.preco * (10 / 100); // Calcula 10% de desconto
        return this.preco - desconto; // Retorna o preço com desconto
    }
}

// Classe Livro que herda de Produto
class Livro extends Produto {
    constructor(nome, preco) {
        super(nome, preco); // Chama o construtor da classe Produto
    }

    // Método para calcular desconto de 20% (sobrescreve o método da classe Produto)
    calcularDesconto() {
        const desconto = this.preco * (20 / 100); // Calcula 20% de desconto
        return this.preco - desconto; // Retorna o preço com desconto
    }
}
```

> Explicação do funcionamento:
> Herança: A classe Livro herda da classe Produto usando a palavra-chave extends. Isso significa que Livro possui todos os atributos e métodos de Produto, a menos que sejam sobrescritos. No construtor da classe Livro, usamos super(nome, preco) para chamar o construtor da classe Produto e inicializar os atributos nome e preco.

> Sobrescrita do método: A classe Livro sobrescreve o método calcularDesconto() da classe Produto. Em vez de aplicar um desconto de 10%, ela aplica um desconto de 20%. O método calcularDesconto() na classe Livro não chama o método da classe Produto (super.calcularDesconto()), pois o objetivo é substituir completamente o comportamento. 

>Cálculo do desconto: O desconto é calculado como uma porcentagem do preço (this.preco * (desconto / 100)), e o valor com desconto é retornado.