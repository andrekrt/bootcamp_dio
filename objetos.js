class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log('Olá, meu nome é ' + this.nome + ' e minha idade é ' + this.idade)    
    }
}

function compararPessoa(p1, p2){
    if(p1.idade>p2.idade){
        console.log(p1.nome + ' é mais velho que ' + p2.nome);
    }else if(p1.idade<p2.idade){
        console.log(p2.nome + ' é mais velho que ' + p1.nome);
    }else{
        console.log(p1.nome + ' e ' + p2.nome + ' tem a mesma idade');
    }
}

const andre = new Pessoa('André Santos', 27);
const jose = new Pessoa('Jose Pereira', 50);

compararPessoa(andre, jose);