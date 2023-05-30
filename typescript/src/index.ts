type heroi = {
    name: string;
    vulgo: string;
}

function printaObjeto(pessoa: heroi){
    console.log(pessoa)
    console.log(new Date("").toString())
}

console.log("olá mundo!")
printaObjeto({
    name : "bruce wayne",
    vulgo: "batman"
});

//tipos primitivos: boolean, number, string
let ligado: boolean = false
let nome: string = 'vinicius';
let idade: number = 20;
let altura: number = 1.83;



//null
//undefined
let nulo: null = null
let indefinido: undefined = undefined
//any
//void

let retorno: void 
let retornoView: any
//objeto sem previsibilidade

let produto: object = {
    nome: "viniciao",
    idade: 20,
    cidade: "pr"
}
//objeto tipado com previsibilidade

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};
let meuProduto: ProdutoLoja ={
    nome: "banana",
    preco: 2,
    unidades: 30
}

//arrays
let dados: string[] = ["viniciao", "fonsacao", "aureliao", "vitao"]
let dados2: Array<string> = ["viniciao", "fonsacao", "aureliao", "vitao", "evelin", "krupe", "cury", "edu"]

let infos: (string | number)[] = ["viniciao", 30, "aureliao", 25]

//tuplas 

let boleto: [string, number, number] = ["agua conta", 199, 31245] //determina qual tipo e qual ordem deve aparecer

//metodos arrays
dados.pop()

//trabalhando com dates
let aniversario: Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString())

function addNumber(x: number, y: number) :number{
    return x + y;
}
let soma: number = addNumber(5, 10)

function addToHello(name: string): string{
    return `Hello ${name}!`
}
console.log(addToHello("veneceos"))

//funções multi tipos
function CallToPhone(phone: number | string){
    return phone
}
console.log(CallToPhone("123123"))
console.log(CallToPhone(123123))
//funções async
async function getDatabase(id: number): Promise<string>{
    return "viniciao";
}
async function getIDByName(name: string):Promise<number>{
    return 10;
}

//inferfaces e comparação com o type
type robot = {
    readonly id: number;
    name: string;
}
interface robot2 {
    readonly id: number;
    name: string;
    
    //methods
    sayHello(): string;
}
interface robot3 {
    readonly id: string;
    name: number;
}
type robot4 = {
    readonly id: string;
    name: number;
}
const bot: robot2 = {
    id: 1,
    name: "astroBoy",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}
//diferença: type serve para tipar uma variavel e a interface serve para tipar uma classe
//interface: contrato (quem herdar o contrato precisa seguir fielmente os requirements)

class Pessoa implements robot2{
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        console.log("hello");
        return "hello, i am "+this.name+"!";
    }
}
const p = new Pessoa(1, "viniciao")
console.log(p) 