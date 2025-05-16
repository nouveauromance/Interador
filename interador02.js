// interface do interador
class Produto{
    constructor(nome, estoque){
        this.nome = nome;
        this.estoque = estoque;
    }
}

// coleção concreta
class ColecaoDeProdutos{
    constructor(){
        this.produtos = [];
    }

    adicionar(produto){
        this.produtos.push(produto);
    }

    criarInteradorDisponiveis(){
        return new InteradorProdutosDisponiveis(this.produtos);
    }
}

// interador concreto
class InteradorProdutosDisponiveis{
    constructor(produtos){
        this.produtos = produtos;
        this.indice = 0;
    }

    temProximo(){
        while(this.indice < this.produtos.length){
            if(this.produtos[this.indice].estoque > 0){
                return true;
            }
            this.indice++;
        }
        return false;
    }

    proximo(){
        return this.produtos[this.indice++];
    }
}

// estrutura de execução (uso)
const estoque = new ColecaoDeProdutos;
estoque.adicionar(new Produto("Camiseta", 5));
estoque.adicionar(new Produto("Boné", 4));
estoque.adicionar(new Produto("Tênis", 12));

const interador = estoque.criarInteradorDisponiveis();

while(interador.temProximo()){
    const produto = interador.proximo();
    console.log(`Produto: ${produto.nome}\t, Estoque: ${produto.estoque}`);
}