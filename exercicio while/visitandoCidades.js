// const nomeTurista= prompt(`Qual seu nome turista?`)
// let visitouCidades= prompt(`Você já visitou alguma cidade?: (sim/nao)`)
// let cidades= ""
// let vesesVisitadas= 0

// while (visitouCidades== "sim") {
//     let nomeCidades= prompt(`qual o nome da cidade?`)
//     cidades+= " - " + nomeCidades+ "\n"
//     vesesVisitadas++
//     visitouCidades= prompt(`Você visitou alguma outra cidade? (sim/nao)`)
// }
// alert(`O turista ${nomeTurista} fez: ${vesesVisitadas} visitas
//  viajou para:\n ${cidades}`)

let abrirMesa= prompt(`Deseja abrir mesa? (sim/nao)`)
let numeroDePedidos= 0
let itens=""

while(abrirMesa=="sim"){
let nomeItens=prompt(`qual item gostaria de  pedir?`)
itens+= "- "+ nomeItens+ "\n" 
numeroDePedidos++
let maisPedidos= prompt("gostaria de  fazer outro pedido?(sim/nao")
if(maisPedidos=="nao"){
    alert("sistema encerrado")
    break
}

 
}
alert(`O numero de pedidos foram de: ${numeroDePedidos}
Nome dos itens ${itens}`)