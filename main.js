// 10) Crie um exemplo prático no qual você tenha duas classes:

// - Uma classe `Produto` com atributos `nome` e `preco`, e um método 
// `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
// - Uma classe `Livro` que herda de `Produto` e modifica o método 
// `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

// Explique como funciona a herança nesse contexto e como você implementaria
//  a modificação do método na classe `Livro`.

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

// // Exemplo de uso
// const produto = new Produto("Caneta", 10);
// console.log(produto.calcularDesconto()); // Saída: 9 (10% de desconto)

// const livro = new Livro("JavaScript: O Guia Definitivo", 100);
// console.log(livro.calcularDesconto()); // Saída: 80 (20% de desconto)