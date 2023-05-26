//crie uma classe para representar carros. os carros possuem marca, cor, gasto medio de combustivel por km rodado
//crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar este percurso

class carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
    apresentaCarro(){
        console.log(`Este carro da marca ${this.marca}, cor ${this.cor} tem um gasto médio de ${this.gastoMedio} Kilometros rodados por litro de gasolina.`)
    }
    calculaViagem(distanciaKM, combustivelPrice){
        let total = ( distanciaKM / this.gastoMedio ) * combustivelPrice
        console.log(`para percorrer uma distância de ${distanciaKM} KM, o carro da marca ${this.marca} gastaria um total de ${total} reais com gasolina.`)
    }
}

let carro1 = new carro('ford', 'amarelo', 8)
carro1.apresentaCarro()
carro1.calculaViagem(540, 5.40)

let carro2 = new carro('chevrolet', 'vermelho', 5)
carro2.apresentaCarro()
carro2.calculaViagem(540, 5.40)

let carro3 = new carro('etios', 'branco', 14)
carro3.apresentaCarro()
carro3.calculaViagem(540, 5.40)