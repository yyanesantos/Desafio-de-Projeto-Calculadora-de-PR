let vitorias = 102
let derrotas = 2 //numeros propostos apenas para fins de teste, qualquer outro valor também funcionará.

function saldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas
}

function nivelRanqueada (saldoVitorias) {
    let nivel
    if(saldoVitorias < 10) {
        nivel = "Ferro"       
    }else if(saldoVitorias > 10 && saldoVitorias <= 20) {
        nivel = "Bronze"
    }else if(saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = "Prata"
    }else if(saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = "Ouro"
    }else if(saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = "Diamante"
    }else if(saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = "Lendário"
    }else if(saldoVitorias >= 101) {
        nivel = "Imortal"
    }

    return nivel
}

console.log("O Herói tem saldo de " + saldoVitorias(vitorias, derrotas) + " e está no nível de " 
            + nivelRanqueada(saldoVitorias(vitorias, derrotas)) + ".")

/*para saldos de vitórias de 10, o nivel de ranqueada será underfined, pois, no próprio texto do desafio
não há menção de definição de nível de ranqueada para saldo de vitórias 10. Apenas segui o texto do desafio.
Agora, apenas para fins de curiosidade, eu suponho que o desafio certinho seria:

let vitorias = 102
let derrotas = 92

function saldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas
}

function nivelRanqueada (saldoVitorias) {
    let nivel
    if(saldoVitorias <= 10) {
        nivel = "Ferro"       
    }else if(saldoVitorias > 10 && saldoVitorias <= 20) {
        nivel = "Bronze"
    }else if(saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = "Prata"
    }else if(saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = "Ouro"
    }else if(saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = "Diamante"
    }else if(saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = "Lendário"
    }else if(saldoVitorias >= 101) {
        nivel = "Imortal"
    }

    return nivel
}

console.log("O Herói tem saldo de " + saldoVitorias(vitorias, derrotas) + " e está no nível de " 
            + nivelRanqueada(saldoVitorias(vitorias, derrotas)) + ".")*/