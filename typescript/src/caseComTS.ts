type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
}
function ligarPara(heroi: Hero):string {
    return "Ligando para: "+heroi.telefone
}
ligarPara({
    nome: "vinicius",
    vulgo: "capitao america",
    telefone: "41 33822195"
})