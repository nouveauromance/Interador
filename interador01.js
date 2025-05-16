// interface do interador
class Interador {
    temProximo(){}
    proximo(){}
}

// coleção concreta com nomes
class ColecaoNomes {
    constructor(){
        this.nomes = [];
    }

    adicionar(nome){
        this.nomes.push(nome);
    }

    criarInterador(){
        return new InteradorDeNomes(this.nomes);
    }
}

// interador concreto
class InteradorDeNomes extends Interador{
    constructor(nomes){
        super();
        this.nomes = nomes;
        this.indice = 0;
    }

    temProximo(){
        return this.indice < this.nomes.length;
    }

    proximo(){
        return this.nomes[this.indice++];
    }
}

// estrutura de execução (uso)
const nomes = new ColecaoNomes();
nomes.adicionar("Nat");
nomes.adicionar("Ray");
nomes.adicionar("Bia");
nomes.adicionar("Gui");
nomes.adicionar("Diov");
nomes.adicionar("Felps");

const interador = nomes.criarInterador();

while(interador.temProximo()) {
    console.log(interador.proximo());
}