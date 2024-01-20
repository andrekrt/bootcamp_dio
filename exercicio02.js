class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        let imc = this.peso/(this.altura*this.altura);

        return imc.toFixed(2);
    }

    classificarImc(){
        let imc = this.calcularImc();
        let classificacao;
        if(imc<18.5){
            classificacao = 'Abaixo do peso';
        }else if(imc>=18 && imc <25){
            classificacao = 'Peso Normal';
        }else if(imc >=25 && imc <30){
            classificacao = 'Acima do Peso';
        }else if(imc >=30 && imc <40){
            classificacao = 'Obeso';
        }else{
            classificacao = 'Obesidade Grave';
        }

        return classificacao;
    }
}

const jose = new Pessoa("José", 70, 1.75);

console.log(jose.nome +" tem " + jose.peso + "Kg e " + jose.altura +"m e seu IMC é de " + jose.calcularImc() + " e está " + jose.classificarImc());