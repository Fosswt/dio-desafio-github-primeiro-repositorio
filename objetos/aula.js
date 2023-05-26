//objeto = variavel que agrupa valores em chave: valor
const vini = {
    nome: "vinicius augusto foss",
    idade: 20,
    descrever: function(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}!`)
    }
};
console.log(vini.nome)
console.log(vini.idade)
console.log(vini)
vini.altura = 1.83
vini.abluble = "sei la caraa"
console.log(vini)

delete vini.abluble;
console.log(vini)
vini.descrever()

const atributo = "idade"
console.log(vini[atributo])
vini[atributo] = 200
console.log(vini)

class Pessoa {
    nome;
    idade;
    anoNascimento;
    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}. Eu nasci em ${this.anoNascimento}`)
    }
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        this.anoNascimento = 2023 - idade
    }
}

var vinic = new Pessoa()
vinic.nome = "vinicius augusto"
vinic.idade = 20
vinic.descrever()
console.log(vinic)

var relis = new Pessoa()
relis.nome = "aurelio miguel"
relis.idade = 20
relis.descrever() 
console.log(relis)

var newPerson = new Pessoa()
newPerson.descrever()
var anotherPerson = new Pessoa('vinicim2', 21)
anotherPerson.descrever()

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho do que ${p2.nome}!`)
    }
    else if (p1.idade == p2.idade){
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade!!`)
    }
    else{
        console.log(`${p2.nome} é mais velho do que ${p1.nome}`)
    }
}
compararPessoas(relis, vinic)
