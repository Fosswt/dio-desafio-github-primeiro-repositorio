function printaObjeto(pessoa) {
    console.log(pessoa);
    console.log(new Date("").toString());
}
console.log("olá mundo!");
printaObjeto({
    name: "bruce wayne",
    vulgo: "batman"
});
//tipos primitivos: boolean, number, string
var ligado = false;
var nome = 'vinicius';
var idade = 20;
var altura = 1.83;
//null
//undefined
var nulo = null;
var indefinido = undefined;
//any
//void
var retorno;
var retornoView;
//objeto sem previsibilidade
var produto = {
    nome: "viniciao",
    idade: 20,
    cidade: "pr"
};
var meuProduto = {
    nome: "banana",
    preco: 2,
    unidades: 30
};
//arrays
var dados = ["viniciao", "fonsacao", "aureliao", "vitao"];
var dados2 = ["viniciao", "fonsacao", "aureliao", "vitao", "evelin", "krupe", "cury", "edu"];
var infos = ["viniciao", 30, "aureliao", 25];
//tuplas 
var boleto = ["agua conta", 199, 31245]; //determina qual tipo e qual ordem deve aparecer
//metodos arrays
dados.pop();
//trabalhando com dates
var aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
