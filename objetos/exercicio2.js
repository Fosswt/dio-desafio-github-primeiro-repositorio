// crie uma classe para representar pessoas
/*
para cada pessoa teremos os atributos nome peso e altura
as pessoas devem ter a capacidade de dizer o valor do seu imc 
instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao josé para dizer o valor do seu imc
 */

class pessoa{
    nome;
    peso;
    altura; //a altura deve ser informada em centimetros
    imc;
 
    apresentar(){
        console.log(`Olá! meu nome é ${this.nome}, tenho ${this.peso} KG e ${this.altura/100}m de altura.`)
    }

    Imc(){ 
        let alturaM = this.altura/100
        this.imc = this.peso / (alturaM * alturaM)
        console.log(`O imc de ${this.nome} é ${this.imc}`)
        return this.imc
        
    }
    ClassificaIMC(){
        if(this.imc < 18.5){
            console.log("abaixo do peso, imc = "+this.imc)
        }
        else if(this.imc >= 18.5 && this.imc < 25){
            console.log("peso normal, imc = "+this.imc)
        }
        else if(this.imc >= 25 && this.imc < 30){
            console.log("acima do peso, imc = "+this.imc)
        }
        else if(this.imc >= 30 && this.imc < 40){
            console.log("obeso, imc = "+this.imc)
        }
        else{
            console.log("obesidade grave, imc = "+this.imc)
        }
    }
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = this.Imc()
    }
}

let p1 = new pessoa("José", 70, 175)
p1.apresentar()
console.log(p1.peso);
console.log(p1.altura);
console.log(p1.Imc())
p1.ClassificaIMC()
let p2 = new pessoa("ze", 89, 193)
p2.ClassificaIMC()