class Carro{
    marca;
    cor;
    consumoMedio;

    constructor(marca, cor, consumoMedio){
        this.marca = marca;
        this.cor = cor;
        this.consumoMedio= consumoMedio;
    }

    calcularGasto(precoCombustivel, distancia) {
       let valorGasto = (distancia/this.consumoMedio)*precoCombustivel;

        console.log("O carro "+ this.marca + " na cor " + this.cor +" gastará R$" + valorGasto.toFixed(2) + " para viajar " + distancia + "km");
    }
}

const fiat = new Carro("Fiat", "Vermelho", 40);

fiat.calcularGasto(5, 80);