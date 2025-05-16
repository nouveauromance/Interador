var descricao = document.getElementById("descricao");

// interface do interador
class Tarefas{
    constructor(descricao, status, prioridade){
        this.descricao = descricao;
        this.status = status;
        this.prioridade = prioridade;
    }
}

// coleção concreta 
class ColecaoDeTarefas{
    constructor(){
        this.tarefas = [];
    }

    adicionar(tarefas){
        this.tarefas.push(tarefas);
    }

    criarInterador(){
        return new InteradorTarefas(this.tarefas);
    }
}

// interador concreto
class InteradorTarefas{
    constructor(tarefas){
        this.tarefas = tarefas;
        this.indice = 0;
    }

    verificarPrioridade(prioridadeUser){
        while(this.indice < this.tarefas.length){
            if(this.tarefas[this.indice].prioridade == prioridadeUser){
                return true;
            }
            this.indice++;
        }
    }


    temProximo(){
        return this.indice < this.tarefas.length;
    }

    proximo(){
        return this.tarefas[this.indice++];
    }

}

// estrutura de execução (uso)
const tarefa = new ColecaoDeTarefas;
tarefa.adicionar(new Tarefas("matemática", "pendente", "baixa"));
tarefa.adicionar(new Tarefas("banco de dados", "concluída", "média"));
tarefa.adicionar(new Tarefas("interação", "pendente", "alta"));

const interador = tarefa.criarInterador();
while(interador.temProximo()){
    if(interador.verificarPrioridade("média")){
        const atividade = interador.proximo();
        console.log(`Descricao: ${atividade.descricao}\t, status: ${atividade.status}\t, prioridade ${atividade.prioridade}`);
    }
}