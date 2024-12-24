function Computador(marca, processador, placaDeVideo) {
    this.marca = marca
    this.processador = processador
    this.placaDeVideo = placaDeVideo

    this.ligando = function() {
        console.log('o computador está ligando')
    }
}

function ComputadorRaiz(marca, processador, placaDeVideo) {
    Computador.call(this, marca, processador, placaDeVideo)
}

const computador1 = new Computador('intel', 'i5', 'gtx1080')
const computador2 = new Computador('intel', 'i7', 'rtx2080')
const computador3 = new Computador('amd', 'ryzen5', 'rx580')
const computadorRaiz = new ComputadorRaiz('xp', 'intel1', null)

console.log(computador1.ligando())
setTimeout(function() {
    console.log(computador1)
}, 1000)

console.log(computador2.ligando())
setTimeout(function() {
    console.log(computador2)
}, 2000)

console.log(computador3.ligando())
setTimeout(function() {
    console.log(computador3)
}, 3000)

console.log(computadorRaiz.ligando())
setTimeout(function() {
    console.log(computadorRaiz)
}, 4000)

setTimeout(function() {
    console.log('servidor aberto com sucesso')
}, 5000)
